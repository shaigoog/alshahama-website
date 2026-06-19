(function(){
  'use strict';
  var lang='ar';
  var html=document.documentElement;
  var button=document.getElementById('langButton');
  var menu=document.getElementById('mobileMenu');
  var menuButton=document.getElementById('menuButton');
  var wa='https://wa.me/971503238103?text=';
  function message(l){return l==='ar'?'السلام عليكم، أريد الاستفسار عن خدمات الشهامة لتجارة المعدات الطبية.':'Hello, I would like to inquire about ALSHAHAMA Medical Equipments Trading LLC services.';}
  function apply(l){
    lang=l; html.lang=l; html.dir=l==='ar'?'rtl':'ltr';
    document.querySelectorAll('[data-ar][data-en]').forEach(function(el){el.textContent=el.getAttribute('data-'+l);});
    document.querySelectorAll('[data-wa]').forEach(function(el){el.href=wa+encodeURIComponent(message(l));});
    button.textContent=l==='ar'?'English':'العربية';
    document.title=l==='ar'?'الشهامة لتجارة المعدات الطبية ش ذ م م | دبي':'ALSHAHAMA Medical Equipments Trading LLC | Dubai';
    var meta=document.querySelector('meta[name="description"]');
    if(meta)meta.content=l==='ar'?'الشهامة لتجارة المعدات الطبية في دبي: معدات طبية وحلول الحركة والأطراف الصناعية والأجهزة التعويضية.':'ALSHAHAMA Medical Equipments Trading LLC in Dubai: medical equipment, mobility solutions, prosthetics and orthotic devices.';
    try{localStorage.setItem('alshahama-lang',l);}catch(e){}
  }
  function toggleLang(){apply(lang==='ar'?'en':'ar');}
  button.addEventListener('click',toggleLang);
  document.querySelectorAll('[data-lang-switch]').forEach(function(el){el.addEventListener('click',toggleLang);});
  menuButton.addEventListener('click',function(){var open=menu.hidden;menu.hidden=!open;menuButton.setAttribute('aria-expanded',open?'true':'false');});
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');});});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');}});
  document.getElementById('year').textContent=new Date().getFullYear();
  try{var saved=localStorage.getItem('alshahama-lang');if(saved==='en')lang='en';}catch(e){}
  apply(lang);
})();
