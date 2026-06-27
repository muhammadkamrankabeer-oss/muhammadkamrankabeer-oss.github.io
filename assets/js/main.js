/* ================================================================
   DEVRISTON V4 — assets/js/main.js
   ================================================================ */
(function(){'use strict';

/* ── Nav ── */
const nav=document.getElementById('nav');
if(nav) window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>30),{passive:true});
window.toggleDrawer=function(){const d=document.getElementById('nav-drawer');if(d)d.classList.toggle('open')};

/* ── Fade-up observer ── */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.style.animationPlayState='running';obs.unobserve(e.target)}});
},{threshold:.07});
document.querySelectorAll('.fade-up').forEach(el=>{el.style.animationPlayState='paused';obs.observe(el)});

/* ── Search + filter ── */
function initSearch(inputId,pillsSelector,cardsSelector,countId){
  const input=document.getElementById(inputId);
  if(!input)return;
  const pills=document.querySelectorAll(pillsSelector);
  const cards=document.querySelectorAll(cardsSelector);
  const cntEl=document.getElementById(countId);
  const noRes=document.getElementById('noResults');
  let cat='all';

  function run(){
    const q=input.value.trim().toLowerCase();
    let n=0;
    cards.forEach(c=>{
      const catMatch=cat==='all'||c.dataset.cat===cat;
      const ex=c.querySelector('.c-excerpt,.c-desc,.n-desc');
      const textMatch=!q
        ||(c.dataset.title||'').toLowerCase().includes(q)
        ||(c.dataset.tags||'').toLowerCase().includes(q)
        ||(ex&&ex.textContent.toLowerCase().includes(q));
      const show=catMatch&&textMatch;
      c.style.display=show?'':'none';
      if(show)n++;
    });

    /* hide/show section headers when all their cards are hidden */
    document.querySelectorAll('[data-section]').forEach(sec=>{
      const visible=[...sec.querySelectorAll(cardsSelector)].some(c=>c.style.display!=='none');
      sec.style.display=visible?'':'none';
      const prev=sec.previousElementSibling;
      if(prev&&prev.classList.contains('cat-hdr'))prev.style.display=visible?'':'none';
    });

    if(cntEl)cntEl.textContent=n===1?'1 result':`${n} results`;
    if(noRes)noRes.style.display=n===0?'block':'none';
  }

  input.addEventListener('input',run);
  pills.forEach(p=>p.addEventListener('click',()=>{
    pills.forEach(x=>x.classList.remove('active'));
    p.classList.add('active');
    cat=p.dataset.cat;
    run();
  }));
}

/* Notes page — scoped to #noteSearch pills / n-card+c-card */
initSearch('noteSearch','#noteSearch ~ .filter-pills .fpill, .search-bar:has(#noteSearch) .fpill','.n-card.c-card[data-cat]','resultCount');

/* Blog page — scoped to #blogSearch pills / blog c-cards (no n-card class) */
initSearch('blogSearch','#blogSearch ~ .filter-pills .fpill, .search-bar:has(#blogSearch) .fpill','.content-grid .c-card[data-cat]','blogCount');

/* ── Contact form ── */
const form=document.getElementById('contactForm');
if(form){
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const btn=document.getElementById('submitBtn');
    const txt=document.getElementById('submitText');
    if(btn)btn.disabled=true;
    if(txt)txt.textContent='Sending…';
    try{
      const r=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
      if(r.ok){
        form.style.display='none';
        const s=document.getElementById('formSuccess');if(s)s.style.display='block';
      }else throw 0;
    }catch{
      if(txt)txt.textContent='Failed — email us directly';
      setTimeout(()=>{if(txt)txt.textContent='Send Message';if(btn)btn.disabled=false;},3000);
    }
  });
}

/* ── GitHub live repos ── */
async function loadRepos(){
  const el=document.getElementById('gh-repos');
  if(!el)return;
  const U='muhammadkamrankabeer-oss';
  const LC={
    'Shell':'#89e051','Python':'#3572A5','HCL':'#844FBA',
    'Dockerfile':'#384d54','YAML':'#cb171e','HTML':'#e34c26',
    'CSS':'#563d7c','Go':'#00ADD8'
  };
  function ago(d){
    const dy=Math.floor((Date.now()-new Date(d))/86400000);
    return dy===0?'today':dy===1?'yesterday':dy<30?`${dy}d ago`:dy<365?`${Math.floor(dy/30)}mo ago`:`${Math.floor(dy/365)}y ago`;
  }
  try{
    const rs=await fetch(
      `https://api.github.com/users/${U}/repos?sort=updated&direction=desc&per_page=12&type=public`,
      {headers:{Accept:'application/vnd.github.mercy-preview+json'}}
    );
    if(!rs.ok)throw 0;
    const repos=(await rs.json()).filter(r=>r.name!==U&&!r.fork).slice(0,9);
    const g=document.createElement('div');
    g.className='content-grid';
    repos.forEach(r=>{
      const a=document.createElement('a');
      a.className='c-card';
      a.href=r.html_url;
      a.target='_blank';
      a.rel='noopener noreferrer';
      const topics=(r.topics||[]).slice(0,3).map(t=>`<span class="c-tag">${t}</span>`).join('');
      a.innerHTML=`
        <div class="c-card-accent" style="background:linear-gradient(90deg,#1a6aff,#00d4ff)"></div>
        <div class="c-card-body">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:9px;gap:7px">
            <span style="font-family:var(--f-mono);font-size:.84rem;font-weight:600;color:var(--blue);word-break:break-word">${r.name}</span>
            <span style="font-size:1rem;flex-shrink:0">📁</span>
          </div>
          <p class="c-excerpt" style="flex:1">${(r.description||'No description.').slice(0,108)}${(r.description||'').length>108?'…':''}</p>
          <div class="c-tags" style="margin-bottom:11px">${topics}</div>
          <div class="c-footer">
            <div style="display:flex;gap:11px;flex-wrap:wrap">
              ${r.language?`<span style="font-family:var(--f-mono);font-size:.68rem;color:var(--text-3);display:flex;align-items:center;gap:4px"><span style="width:8px;height:8px;border-radius:50%;background:${LC[r.language]||'#64748b'};display:inline-block;flex-shrink:0"></span>${r.language}</span>`:''}
              ${r.stargazers_count>0?`<span style="font-family:var(--f-mono);font-size:.68rem;color:var(--text-3)">⭐ ${r.stargazers_count}</span>`:''}
              <span style="font-family:var(--f-mono);font-size:.68rem;color:var(--text-3)">🕐 ${ago(r.updated_at)}</span>
            </div>
          </div>
        </div>`;
      g.appendChild(a);
    });
    el.innerHTML='';
    el.appendChild(g);
  }catch{
    el.innerHTML=`<p style="text-align:center;color:var(--text-3);padding:32px">Could not load repositories. <a href="https://github.com/${U}" target="_blank">View on GitHub →</a></p>`;
  }
}
loadRepos();

/* ── Note card share bars (notes page only) ── */
document.querySelectorAll('.n-card[id]').forEach(card=>{
  const url=`${location.origin}${location.pathname}#${card.id}`;
  const bar=document.createElement('div');
  bar.className='n-share';
  bar.innerHTML=`
    <span class="n-share-url">#${card.id}</span>
    <button class="n-copy-btn" onclick="dvcopy('${url}',this)">📋 Copy link</button>`;
  card.appendChild(bar);
});

window.dvcopy=function(url,btn){
  navigator.clipboard.writeText(url).then(()=>{
    const o=btn.textContent;
    btn.textContent='✅ Copied!';
    btn.style.color='#22c55e';
    btn.style.borderColor='#22c55e';
    setTimeout(()=>{btn.textContent=o;btn.style.color='';btn.style.borderColor='';},2000);
  });
};

/* ── Deep-link highlight on page load ── */
window.addEventListener('load',()=>{
  const h=location.hash;
  if(!h)return;
  const t=document.querySelector(h);
  if(!t)return;
  setTimeout(()=>{
    t.scrollIntoView({behavior:'smooth',block:'center'});
    t.style.transition='box-shadow .3s,border-color .3s';
    t.style.boxShadow='0 0 0 3px #1a6aff';
    t.style.borderColor='#1a6aff';
    setTimeout(()=>{t.style.boxShadow='';t.style.borderColor='';},2500);
  },350);
});

/* ── Expandable note sections ── */
window.toggleExpand=function(btn){
  const expanded=btn.getAttribute('aria-expanded')==='true';
  btn.setAttribute('aria-expanded',String(!expanded));
  const panel=btn.nextElementSibling;
  if(panel)panel.classList.toggle('open',!expanded);
};

/* ── Learn dropdown ── */
window.toggleLearnMenu=function(e){
  e.stopPropagation();
  var menu=document.getElementById('learn-menu');
  var btn=e.currentTarget;
  if(!menu)return;
  var isOpen=menu.classList.contains('open');
  menu.classList.toggle('open',!isOpen);
  btn.classList.toggle('open',!isOpen);
  btn.setAttribute('aria-expanded',String(!isOpen));
};
document.addEventListener('click',function(){
  var menu=document.getElementById('learn-menu');
  var btn=document.querySelector('.nav-dropdown-toggle');
  if(menu)menu.classList.remove('open');
  if(btn){btn.classList.remove('open');btn.setAttribute('aria-expanded','false');}
});

})();
