/* ============================================================
   PRIMENEST DIGITALS v7 — main.js
   ============================================================ */

/* ── PAGE LOADER ── */
(function(){
  if(sessionStorage.getItem('pn_loaded')){
    var l=document.getElementById('page-loader');
    if(l)l.style.display='none';
    return;
  }
  window.addEventListener('load',function(){
    setTimeout(function(){
      var l=document.getElementById('page-loader');
      if(!l)return;
      l.classList.add('fade-out');
      setTimeout(function(){l.style.display='none';sessionStorage.setItem('pn_loaded','1');},650);
    },2600);
  });
})();

/* ── THEME ── */
(function(){
  var saved=localStorage.getItem('pn_theme')||'dark';
  document.documentElement.setAttribute('data-theme',saved);
  var icon=document.getElementById('themeIcon');
  if(icon)icon.textContent=saved==='dark'?'☀️':'🌙';
})();

function toggleTheme(){
  var cur=document.documentElement.getAttribute('data-theme')||'dark';
  var next=cur==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',next);
  localStorage.setItem('pn_theme',next);
  var icon=document.getElementById('themeIcon');
  if(icon)icon.textContent=next==='dark'?'☀️':'🌙';
}

document.addEventListener('DOMContentLoaded',function(){

  /* ── THEME BTN ── */
  var themeBtn=document.getElementById('themeToggle');
  if(themeBtn)themeBtn.addEventListener('click',toggleTheme);

  /* ── PROGRESS BAR ── */
  var bar=document.getElementById('progress-bar');
  if(bar){
    window.addEventListener('scroll',function(){
      var s=(document.documentElement.scrollTop/(document.documentElement.scrollHeight-window.innerHeight))*100;
      bar.style.width=Math.min(s,100)+'%';
    });
  }

  /* ── HAMBURGER ── */
  var hb=document.getElementById('hamburger');
  var mm=document.getElementById('mobileMenu');
  if(hb&&mm){
    hb.addEventListener('click',function(){mm.classList.toggle('open');hb.classList.toggle('active');});
    document.addEventListener('click',function(e){
      if(!hb.contains(e.target)&&!mm.contains(e.target)){mm.classList.remove('open');hb.classList.remove('active');}
    });
  }

  /* ── REVEAL ON SCROLL ── */
  var reveals=document.querySelectorAll('.reveal');
  if(reveals.length){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});
    },{threshold:0.1});
    reveals.forEach(function(el){io.observe(el);});
  }

  /* ── COUNTER ANIMATION ── */
  var counters=document.querySelectorAll('[data-target]');
  if(counters.length){
    var cio=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(!e.isIntersecting)return;
        var el=e.target;
        var target=parseFloat(el.dataset.target);
        var suffix=el.dataset.suffix||'';
        var duration=1800;
        var start=performance.now();
        cio.unobserve(el);
        function step(now){
          var p=Math.min((now-start)/duration,1);
          var ease=1-Math.pow(1-p,3);
          var val=target*ease;
          el.textContent=(val%1!==0?val.toFixed(2):Math.round(val))+suffix;
          if(p<1)requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    },{threshold:0.3});
    counters.forEach(function(el){cio.observe(el);});
  }

  /* ── FLIP CARDS ── */
  document.querySelectorAll('.flip-card').forEach(function(card){
    card.addEventListener('click',function(){card.classList.toggle('flipped');});
  });

  /* ── FAQ ACCORDION ── */
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click',function(){
      var item=btn.closest('.faq-item');
      var isOpen=item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(o){o.classList.remove('open');});
      if(!isOpen)item.classList.add('open');
    });
  });

  /* ── SLIDE-UP PANEL ── */
  var panelTab=document.getElementById('panelTab');
  var slidePanel=document.getElementById('slidePanel');
  var panelOverlay=document.getElementById('panelOverlay');
  var panelClose=document.getElementById('panelClose');

  function openPanel(){if(!slidePanel)return;slidePanel.classList.add('open');if(panelOverlay)panelOverlay.classList.add('open');document.body.style.overflow='hidden';}
  function closePanel(){if(!slidePanel)return;slidePanel.classList.remove('open');if(panelOverlay)panelOverlay.classList.remove('open');document.body.style.overflow='';}

  if(panelTab)panelTab.addEventListener('click',openPanel);
  if(panelClose)panelClose.addEventListener('click',closePanel);
  if(panelOverlay)panelOverlay.addEventListener('click',closePanel);

  if(!sessionStorage.getItem('pn_panel_shown')){
    setTimeout(function(){openPanel();sessionStorage.setItem('pn_panel_shown','1');},12000);
  }

  /* ── WHATSAPP WIDGET ── */
  var waPill=document.getElementById('waPill');
  var waCard=document.getElementById('waCard');
  var waClose=document.getElementById('waClose');

  if(waPill&&waCard){
    waPill.addEventListener('click',function(){waCard.classList.toggle('open');});
  }
  if(waClose){
    waClose.addEventListener('click',function(e){e.stopPropagation();waCard.classList.remove('open');});
  }

  /* ── BLOG FILTER ── */
  document.querySelectorAll('.blog-filter-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      document.querySelectorAll('.blog-filter-btn').forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      var cat=btn.dataset.cat;
      document.querySelectorAll('.blog-card').forEach(function(card){
        if(cat==='all'||card.dataset.cat===cat)card.classList.remove('hidden');
        else card.classList.add('hidden');
      });
    });
  });

  /* ── PORTFOLIO FILTER ── */
  document.querySelectorAll('.filter-btn').forEach(function(btn){
    btn.addEventListener('click',function(){
      document.querySelectorAll('.filter-btn').forEach(function(b){b.classList.remove('active');});
      btn.classList.add('active');
      var cat=btn.dataset.cat;
      document.querySelectorAll('.port-card').forEach(function(card){
        if(cat==='all'||card.dataset.cat===cat)card.classList.remove('hidden');
        else card.classList.add('hidden');
      });
    });
  });

  /* ── ROI CALCULATOR ── */
  function calcROI(){
    var vis=parseInt(document.getElementById('roiVis')&&document.getElementById('roiVis').value||1000);
    var val=parseFloat(document.getElementById('roiVal')&&document.getElementById('roiVal').value||2500);
    var cvr=parseFloat(document.getElementById('roiCVR')&&document.getElementById('roiCVR').value||1.5);
    var curr=Math.round(vis*(cvr/100)*val);
    var opt=Math.round(vis*0.032*val);
    var uplift=Math.max(0,opt-curr);
    var annual=uplift*12;
    var fmt=function(n){return'$'+n.toLocaleString();};
    var set=function(id,v){var el=document.getElementById(id);if(el)el.textContent=v;};
    set('roiCurrVal',fmt(curr));set('roiOptVal',fmt(opt));
    set('roiUpliftVal',fmt(uplift));set('roiAnnualVal',fmt(annual));
    var vv=document.getElementById('roiVisVal');if(vv)vv.textContent=vis.toLocaleString();
    var cv=document.getElementById('roiCVRVal');if(cv)cv.textContent=cvr.toFixed(1)+'%';
  }
  ['roiVis','roiVal','roiCVR'].forEach(function(id){
    var el=document.getElementById(id);if(el)el.addEventListener('input',calcROI);
  });
  calcROI();

  /* ── PACKAGE BUILDER ── */
  document.querySelectorAll('.pkg-item').forEach(function(item){
    item.addEventListener('click',function(){item.classList.toggle('selected');updatePkg();});
  });
  function updatePkg(){
    var selected=document.querySelectorAll('.pkg-item.selected');
    var list=document.getElementById('pkgSelectedList');
    var btn=document.getElementById('pkgSubmit');
    if(!list)return;
    list.innerHTML='';
    if(selected.length===0){
      list.innerHTML='<span class="pkg-empty">No services selected yet</span>';
      if(btn)btn.disabled=true;return;
    }
    selected.forEach(function(item){
      var tag=document.createElement('span');
      tag.className='pkg-tag';
      tag.textContent=item.querySelector('.pkg-name').textContent;
      list.appendChild(tag);
    });
    if(btn)btn.disabled=false;
  }
  updatePkg();

  var pkgSubmit=document.getElementById('pkgSubmit');
  if(pkgSubmit){
    pkgSubmit.addEventListener('click',function(){
      var selected=Array.from(document.querySelectorAll('.pkg-item.selected')).map(function(i){return i.querySelector('.pkg-name').textContent;});
      if(!selected.length)return;
      var msg=encodeURIComponent('Hi Hazeem, I would like to discuss these services: '+selected.join(', '));
      window.open('https://wa.me/13653751409?text='+msg,'_blank');
    });
  }

  /* ── TICKER DUPLICATE ── */
  var strip=document.querySelector('.stats-strip-track');
  if(strip){var sc=strip.cloneNode(true);strip.parentNode.appendChild(sc);}
  var track=document.querySelector('.ticker-track');
  if(track){var clone=track.cloneNode(true);track.parentNode.appendChild(clone);}

  /* ── DEFAULT DARK ── */
  if(!localStorage.getItem('pn_theme')){
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('pn_theme','dark');
    var icon=document.getElementById('themeIcon');
    if(icon)icon.textContent='☀️';
  }
});
