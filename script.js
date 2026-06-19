/* ============================================================
   ALSHAHAMA — premium redesign · script.js (vanilla, no deps)
   ============================================================ */
(function () {
  "use strict";
  var WA_NUMBER = "971503238103";
  var WA_MSG = {
    ar: "السلام عليكم، أريد الاستفسار عن خدمات الشهامة للمعدات الطبية.",
    en: "Hello, I would like to inquire about Alshahama Medical Equipment services."
  };

  var I18N = {
    ar: {
      docTitle: "الشهامة لتجارة المعدات الطبية | دبي – الإمارات",
      metaDesc: "الشهامة للمعدات الطبية في دبي: الكراسي المتحركة، الأطراف الصناعية، الأجهزة التعويضية، أجهزة المشي والأسرّة الطبية والسماعات، مع التقييم والتجربة والتوصيل والتدريب.",
      skip: "تخطّي إلى المحتوى",
      brandAria: "الشهامة للمعدات الطبية – الرئيسية", logoAlt: "الشهامة للمعدات الطبية",
      navMain: "التنقل الرئيسي",
      navHome: "الرئيسية", navServices: "خدماتنا", navWhy: "لماذا الشهامة", navHow: "طريقة العمل",
      navGallery: "معرض المعدات", navPartners: "شركاؤنا", navFaq: "الأسئلة الشائعة", navContact: "تواصل معنا",
      waAria: "تواصل عبر واتساب", menuOpen: "فتح القائمة", menuClose: "إغلاق القائمة", menuTitle: "القائمة",

      heroLoc: "دبي – الإمارات العربية المتحدة",
      heroH1: "الشهامة لتجارة المعدات الطبية",
      heroLead: "حلول طبية مدروسة تساعد على الحركة والاستقلالية",
      heroText: "نوفّر المعدات الطبية وحلول الحركة والكراسي المتحركة والأطراف الصناعية والأجهزة التعويضية، مع خدمات التقييم وأخذ المقاسات والتوصيل والتدريب على الاستخدام.",
      heroWa: "تواصل عبر واتساب", heroExplore: "استكشف خدماتنا",
      heroImgAlt: "معدات طبية وحلول حركة", chipTitle: "تقييم وتجربة وتدريب", chipSub: "حلول حسب احتياج كل حالة",

      trust1: "خصوصية واحترام", trust2: "حلول حسب احتياج الحالة", trust3: "قياسات دقيقة",
      trust4: "تدريب على الاستخدام", trust5: "متابعة بعد التسليم",

      servicesEyebrow: "خدماتنا", servicesH2: "منظومة معدّات وحلول طبية للحركة والرعاية",
      servicesSub: "نختار كل حل وفق تقييم الحالة واحتياج المستخدم وبيئة الاستخدام — لا منتجات جاهزة بقالب واحد.",
      svc1t: "الكراسي المتحركة", svc1d: "كراسي يدوية وكهربائية وتأهيلية، مع حلول الجلوس المتخصص ودعم الرأس وخيارات الميل والإرجاع حسب احتياج الحالة.", svc1alt: "كراسي متحركة يدوية وكهربائية",
      svc2t: "كراسي التأهيل والميل والإرجاع", svc2d: "كراسي تأهيلية بخيارات الميل والإرجاع وتوزيع الضغط، مناسبة للجلوس الطويل والحالات التي تحتاج وضعية دقيقة.", svc2alt: "كراسي التأهيل بخاصية الميل والإرجاع",
      svc3t: "الأطراف الصناعية", svc3d: "تقييم الحالة وأخذ المقاسات وتجربة الطرف والتدريب على الاستخدام والمتابعة بعد التسليم.", svc3alt: "أطراف صناعية",
      svc4t: "الأجهزة التعويضية والتقويمية", svc4d: "جبائر وأجهزة تقويم ودعم للمفاصل والحركة، يتم اختيارها وفق التقييم والاحتياج الوظيفي.", svc4alt: "أجهزة تقويمية ودعامات",
      svc5t: "أجهزة المشي ومساندات الحركة", svc5d: "مشايات وعكازات ووسائل مساندة تساعد على الحركة الآمنة وتعزيز الاستقلالية.", svc5alt: "مشايات ووسائل مساندة للحركة",
      svc6t: "الأسرّة الطبية والرعاية المنزلية", svc6d: "أسرّة طبية ومراتب ومعدات للاستخدام المنزلي والرعاية اليومية والعناية المريحة.", svc6alt: "أسرّة طبية ومعدات رعاية منزلية",
      svc7t: "السماعات الطبية", svc7d: "حلول سمعية يتم ترشيحها حسب الحاجة، مع توضيح طريقة الاستخدام والعناية والمتابعة.", svc7alt: "سماعات طبية",
      svc8t: "التقييم والتجربة والتوصيل والتدريب", svc8d: "من التقييم وأخذ المقاسات إلى التجربة والضبط والتسليم وشرح الاستخدام والعناية وإرشادات السلامة.", svc8alt: "التقييم والتجربة والتوصيل والتدريب",

      whyEyebrow: "لماذا الشهامة", whyH2: "لماذا تختار الشهامة؟",
      whyIntro: "لا نبدأ بالمنتج؛ نبدأ بفهم الحالة، وقدرات المستخدم، وبيئة الاستخدام، واحتياجات الأسرة أو مقدم الرعاية.",
      why1: "تقييم دقيق", why2: "قياسات وتجربة", why3: "اختيار حل مناسب", why4: "شرح واضح للمواصفات",
      why5: "تدريب على الاستخدام", why6: "متابعة بعد التسليم", why7: "احترام خصوصية المريض", why8: "التواصل مع الأسرة أو الجهة الداعمة",

      howEyebrow: "طريقة العمل", howH2: "من التواصل حتى المتابعة",
      how1t: "استلام الطلب", how1d: "مراجعة احتياج المريض والمعلومات المتاحة عن الحالة.",
      how2t: "التقييم وأخذ القياسات", how2d: "تحديد موعد للتقييم وأخذ القياسات، في المقر أو منزل المريض عند الحاجة.",
      how3t: "ترشيح الحل المناسب", how3d: "اختيار الجهاز أو المنتج المناسب وتوضيح المواصفات والخيارات المتاحة.",
      how4t: "التجربة والضبط", how4d: "تجربة المنتج وإجراء التعديلات اللازمة للتأكد من الراحة والملاءمة.",
      how5t: "التسليم والتدريب", how5d: "تسليم الجهاز وشرح الاستخدام والعناية وإجراءات السلامة.",
      how6t: "المتابعة", how6d: "التواصل بعد التسليم لمراجعة الاستخدام ومعالجة أي ملاحظات.",

      galEyebrow: "معرض المعدات", galH2: "لمحة عن المعدّات والحلول",
      galSub: "صور توضيحية لأنواع المعدّات — تُستبدل بصور منتجاتكم الفعلية.",
      gal1alt: "كرسي متحرك", gal2alt: "جهاز تقويمي", gal3alt: "جهاز مساندة للحركة", gal4alt: "معدات رعاية منزلية",

      partEyebrow: "شركاؤنا", partH2: "شركاؤنا", partSub: "نعمل مع جهات خيرية موثوقة لدعم الحالات المحتاجة.",
      part1alt: "جمعية دار البر الخيرية — Dar Al Ber Society", part2alt: "دبي الخيرية — Dubai Charity Association",

      serveEyebrow: "من نخدم", serveH2: "نخدم الأفراد والجهات الصحية والخيرية",
      serve1: "المرضى والأسر", serve2: "المستشفيات والعيادات", serve3: "مراكز الرعاية المنزلية",
      serve4: "الجمعيات والمؤسسات الخيرية", serve5: "أخصائيو العلاج الطبيعي والتأهيل", serve6: "الجهات الداعمة ومقدمو الرعاية",
      area: "نعمل من دبي، مع إمكانية التنسيق للزيارات والتوصيل إلى مناطق أخرى داخل دولة الإمارات حسب نوع الحالة والخدمة المطلوبة.",

      faqEyebrow: "الأسئلة الشائعة", faqH2: "إجابات على أكثر ما يُسأل",
      faq1q: "هل توفرون زيارة منزلية؟", faq1a: "تتوفر الزيارة المنزلية عند الحاجة وبعد مراجعة الحالة وموقع المريض.",
      faq2q: "هل توفرون أخذ المقاسات؟", faq2a: "نعم، يتم أخذ القياسات المطلوبة حسب نوع الجهاز أو المنتج.",
      faq3q: "هل يوجد تدريب بعد التسليم؟", faq3a: "نعم، يتم شرح طريقة الاستخدام والعناية وإرشادات السلامة للمستخدم أو الأسرة.",
      faq4q: "هل يمكن طلب حل مخصص؟", faq4a: "نعم، بعض الحالات تحتاج تعديلات أو تجهيزات خاصة ويتم تقييمها بشكل منفصل.",
      faq5q: "هل يمكن للجمعيات الخيرية التواصل معكم؟", faq5a: "نعم، يمكن للجمعيات والجهات الداعمة التواصل معنا لمراجعة الحالات والاحتياجات.",

      contactEyebrow: "تواصل معنا", contactH2: "تواصل معنا لمناقشة احتياج الحالة",
      contactSub: "أخبرنا بالخدمة المطلوبة ونوع الحالة بشكل عام، وسيقوم الفريق بمراجعة الطلب وتحديد الخطوة المناسبة.",
      contactWa: "تواصل عبر واتساب", contactCall: "اتصال مباشر",
      cLabelPhone: "الهاتف وواتساب", cLabelEmail: "البريد الإلكتروني", cLabelAddr: "العنوان", cLabelHours: "ساعات العمل",
      cAddr: "دبي – بر دبي – بناية العبير – الطابق الأول – مكتب 101", cHours: "أضف ساعات العمل هنا (قابلة للتعديل)",
      privacy: "نحترم خصوصية معلومات المرضى. يُرجى عدم مشاركة معلومات طبية حساسة عبر القنوات العامة، ويُستخدم ما يُرسَل فقط لمراجعة الطلب والتواصل بشأن الخدمة.",

      footQuick: "روابط سريعة", footLegal: "الشهامة لتجارة المعدات الطبية ش ذ م م",
      disclaimer: "المعلومات الموجودة في الموقع تعريفية ولا تُعدّ تشخيصاً طبياً أو بديلاً عن استشارة الطبيب أو المختص.",
      rights: "جميع الحقوق محفوظة"
    },

    en: {
      docTitle: "Alshahama Medical Equipments Trading | Dubai, UAE",
      metaDesc: "Alshahama Medical Equipment in Dubai: wheelchairs, prosthetics, orthotic devices, walkers, medical beds and hearing aids, with assessment, fitting, delivery and training.",
      skip: "Skip to content",
      brandAria: "Alshahama Medical Equipment – Home", logoAlt: "Alshahama Medical Equipment",
      navMain: "Main navigation",
      navHome: "Home", navServices: "Services", navWhy: "Why Alshahama", navHow: "How We Work",
      navGallery: "Gallery", navPartners: "Our Partners", navFaq: "FAQ", navContact: "Contact",
      waAria: "Contact us on WhatsApp", menuOpen: "Open menu", menuClose: "Close menu", menuTitle: "Menu",

      heroLoc: "Dubai, United Arab Emirates",
      heroH1: "Alshahama Medical Equipments Trading",
      heroLead: "Thoughtfully selected medical solutions for mobility and independence",
      heroText: "We provide medical equipment, mobility solutions, wheelchairs, prosthetics and orthotic devices, supported by assessment, measurements, delivery and user training.",
      heroWa: "Contact Us on WhatsApp", heroExplore: "Explore Our Services",
      heroImgAlt: "Medical equipment and mobility solutions", chipTitle: "Assess · Fit · Train", chipSub: "Solutions tailored to each case",

      trust1: "Privacy and Respect", trust2: "Case-Specific Solutions", trust3: "Accurate Measurements",
      trust4: "User Training", trust5: "Post-Delivery Support",

      servicesEyebrow: "Services", servicesH2: "A full range of medical equipment for mobility and care",
      servicesSub: "Every solution is chosen from assessment, the user's needs and the environment of use — never one-size-fits-all.",
      svc1t: "Wheelchairs", svc1d: "Manual, powered and rehabilitation wheelchairs, including specialized seating, head support, tilt and recline options based on individual needs.", svc1alt: "Manual and powered wheelchairs",
      svc2t: "Rehabilitation, Tilt & Recline Chairs", svc2d: "Rehabilitation chairs with tilt, recline and pressure-distribution options, suited to longer sitting and cases needing precise positioning.", svc2alt: "Rehabilitation tilt-recline wheelchairs",
      svc3t: "Prosthetics", svc3d: "Assessment, measurements, fitting, user training and follow-up for prosthetic solutions.", svc3alt: "Prosthetic limbs",
      svc4t: "Orthotics and Support Devices", svc4d: "Orthotic devices, braces and joint-support solutions selected according to assessment and functional needs.", svc4alt: "Orthotic devices and braces",
      svc5t: "Walkers and Mobility Aids", svc5d: "Walkers, crutches and mobility aids that support safe movement and greater independence.", svc5alt: "Walkers and mobility aids",
      svc6t: "Medical Beds and Homecare", svc6d: "Medical beds, mattresses and equipment for home use, daily care and comfortable support.", svc6alt: "Medical beds and homecare equipment",
      svc7t: "Hearing Aids", svc7d: "Hearing solutions recommended to suit the need, with guidance on use, care and follow-up.", svc7alt: "Hearing aids",
      svc8t: "Assessment, Fitting, Delivery & Training", svc8d: "From assessment and measurements to fitting, adjustment, delivery and guidance on use, care and safety.", svc8alt: "Assessment, fitting, delivery and training",

      whyEyebrow: "Why Alshahama", whyH2: "Why Choose Alshahama?",
      whyIntro: "We do not begin with a product. We begin by understanding the user's condition, abilities, environment and the needs of the family or caregiver.",
      why1: "Careful Assessment", why2: "Measurements and Fitting", why3: "Suitable Solution Selection", why4: "Clear Specification Guidance",
      why5: "User Training", why6: "Post-Delivery Follow-Up", why7: "Respect for Patient Privacy", why8: "Coordination with Families and Supporting Organizations",

      howEyebrow: "How We Work", howH2: "From First Contact to Follow-Up",
      how1t: "Request Review", how1d: "We review the patient's needs and the available information about the case.",
      how2t: "Assessment and Measurements", how2d: "An appointment is arranged for assessment and measurements, at the office or at home when required.",
      how3t: "Solution Recommendation", how3d: "We recommend a suitable device or product and explain the available specifications and options.",
      how4t: "Fitting and Adjustment", how4d: "The product is tested and adjusted to improve comfort and suitability.",
      how5t: "Delivery and Training", how5d: "The device is delivered with instructions for use, care and safety.",
      how6t: "Follow-Up", how6d: "We follow up after delivery to review usage and address relevant concerns.",

      galEyebrow: "Gallery", galH2: "A look at the equipment and solutions",
      galSub: "Illustrative images of equipment types — replace with photos of your actual products.",
      gal1alt: "Wheelchair", gal2alt: "Orthotic device", gal3alt: "Mobility aid", gal4alt: "Homecare equipment",

      partEyebrow: "Our Partners", partH2: "Our Partners", partSub: "We work with trusted charitable organizations to support cases in need.",
      part1alt: "Dar Al Ber Society — جمعية دار البر الخيرية", part2alt: "Dubai Charity Association — دبي الخيرية",

      serveEyebrow: "Who We Serve", serveH2: "Serving Individuals, Healthcare Providers and Charities",
      serve1: "Patients and Families", serve2: "Hospitals and Clinics", serve3: "Home Healthcare Providers",
      serve4: "Charities and Foundations", serve5: "Rehabilitation and Physiotherapy Professionals", serve6: "Supporting Organizations and Caregivers",
      area: "We operate from Dubai and may coordinate visits or delivery to other areas within the UAE depending on the case and service requirements.",

      faqEyebrow: "FAQ", faqH2: "Answers to the most common questions",
      faq1q: "Do you provide home visits?", faq1a: "Home visits may be arranged after reviewing the case and the patient's location.",
      faq2q: "Do you provide measurement services?", faq2a: "Yes. Required measurements are taken according to the device or product.",
      faq3q: "Is training provided after delivery?", faq3a: "Yes. The user or family receives guidance on operation, care and safety.",
      faq4q: "Can I request a customized solution?", faq4a: "Yes. Some cases require special adjustments or configurations and are assessed individually.",
      faq5q: "Can charities contact your company?", faq5a: "Yes. Charities and supporting organizations may contact us to review cases and requirements.",

      contactEyebrow: "Contact", contactH2: "Contact Us to Discuss the Case",
      contactSub: "Tell us the service you need and the general nature of the case, and our team will review the request and advise on the next step.",
      contactWa: "Contact on WhatsApp", contactCall: "Call Now",
      cLabelPhone: "Phone & WhatsApp", cLabelEmail: "Email", cLabelAddr: "Address", cLabelHours: "Opening Hours",
      cAddr: "Office 101, First Floor, Al Abeer Building, Bur Dubai, Dubai, UAE", cHours: "Add your opening hours here (editable)",
      privacy: "We respect patient privacy. Please avoid sharing sensitive medical information through public channels; anything sent is used only to review the request and communicate about the service.",

      footQuick: "Quick Links", footLegal: "Alshahama Medical Equipments Trading LLC",
      disclaimer: "The information on this website is for general guidance and does not constitute medical diagnosis or replace professional medical advice.",
      rights: "All rights reserved"
    }
  };

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  function getLang(){ try{var s=localStorage.getItem("alshahama_lang"); if(s==="ar"||s==="en")return s;}catch(e){} return "ar"; }
  function saveLang(l){ try{localStorage.setItem("alshahama_lang",l);}catch(e){} }
  function waHref(l){ return "https://wa.me/"+WA_NUMBER+"?text="+encodeURIComponent(WA_MSG[l]); }

  function applyLang(lang){
    var d=I18N[lang]||I18N.ar, html=document.documentElement;
    html.setAttribute("lang",lang);
    html.setAttribute("dir", lang==="ar"?"rtl":"ltr");
    $$("[data-i18n]").forEach(function(el){var k=el.getAttribute("data-i18n"); if(d[k]!=null) el.textContent=d[k];});
    $$("[data-i18n-aria]").forEach(function(el){var k=el.getAttribute("data-i18n-aria"); if(d[k]!=null) el.setAttribute("aria-label",d[k]);});
    $$("[data-i18n-aria-nav]").forEach(function(el){var k=el.getAttribute("data-i18n-aria-nav"); if(d[k]!=null) el.setAttribute("aria-label",d[k]);});
    $$("[data-i18n-alt]").forEach(function(el){var k=el.getAttribute("data-i18n-alt"); if(d[k]!=null) el.setAttribute("alt",d[k]);});
    document.title=d.docTitle;
    var md=$('meta[name="description"]'); if(md) md.setAttribute("content",d.metaDesc);
    var ogl=$('meta[property="og:locale"]'); if(ogl) ogl.setAttribute("content", lang==="ar"?"ar_AE":"en_US");
    var href=waHref(lang); $$("[data-wa]").forEach(function(a){a.setAttribute("href",href);});
    $$(".lang-b").forEach(function(b){var on=b.getAttribute("data-lang")===lang; b.classList.toggle("is-active",on); b.setAttribute("aria-pressed",on?"true":"false");});
    var c=$("[data-lang-toggle]");
    if(c){ if(lang==="ar"){c.textContent="EN";c.setAttribute("aria-label","English");} else {c.textContent="ع";c.setAttribute("aria-label","العربية");} }
    syncBurger();
  }
  function setLang(l){ saveLang(l); applyLang(l); }

  /* ---- drawer ---- */
  var burger=$("#burger"), drawer=$("#drawer"), backdrop=$("#backdrop"), xbtn=$("#drawerClose");
  function isOpen(){ return drawer && drawer.classList.contains("open"); }
  function syncBurger(){ if(burger) burger.setAttribute("aria-label", isOpen()?I18N[getLang()].menuClose:I18N[getLang()].menuOpen); }
  function openD(){ backdrop.hidden=false; requestAnimationFrame(function(){backdrop.classList.add("show");}); drawer.classList.add("open"); drawer.setAttribute("aria-hidden","false"); burger.setAttribute("aria-expanded","true"); document.body.classList.add("lock"); syncBurger(); var f=drawer.querySelector("a,button"); if(f)f.focus(); }
  function closeD(rf){ drawer.classList.remove("open"); backdrop.classList.remove("show"); drawer.setAttribute("aria-hidden","true"); burger.setAttribute("aria-expanded","false"); document.body.classList.remove("lock"); syncBurger(); setTimeout(function(){ if(!isOpen()) backdrop.hidden=true; },320); if(rf&&burger) burger.focus(); }
  if(burger) burger.addEventListener("click",function(){ isOpen()?closeD(true):openD(); });
  if(xbtn) xbtn.addEventListener("click",function(){ closeD(true); });
  if(backdrop) backdrop.addEventListener("click",function(){ closeD(true); });
  if(drawer) $$("nav a",drawer).forEach(function(a){ a.addEventListener("click",function(){ closeD(false); }); });
  document.addEventListener("keydown",function(e){ if(e.key==="Escape"&&isOpen()) closeD(true); });

  /* ---- lang buttons ---- */
  $$(".lang-b").forEach(function(b){ b.addEventListener("click",function(){ setLang(b.getAttribute("data-lang")); }); });
  var ct=$("[data-lang-toggle]"); if(ct) ct.addEventListener("click",function(){ setLang(getLang()==="ar"?"en":"ar"); });

  /* ---- FAQ ---- */
  $$(".q").forEach(function(btn){
    btn.addEventListener("click",function(){
      var open=btn.getAttribute("aria-expanded")==="true";
      $$(".q").forEach(function(o){ if(o!==btn){ o.setAttribute("aria-expanded","false"); var p=document.getElementById(o.getAttribute("aria-controls")); if(p)p.hidden=true; } });
      btn.setAttribute("aria-expanded", open?"false":"true");
      var panel=document.getElementById(btn.getAttribute("aria-controls")); if(panel) panel.hidden=open;
    });
  });

  /* ---- header shadow ---- */
  var hdr=$("#hdr");
  function onScroll(){ if(hdr) hdr.classList.toggle("scrolled", window.scrollY>8); }
  window.addEventListener("scroll",onScroll,{passive:true}); onScroll();

  /* ---- year ---- */
  var y=$("#year"); if(y) y.textContent=new Date().getFullYear();

  /* ---- reveal on scroll ---- */
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = $$(".reveal, .why-list");
  if(reduce || !("IntersectionObserver" in window)){
    revealEls.forEach(function(el){ el.classList.add("in"); });
  } else {
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
    },{rootMargin:"0px 0px -8% 0px",threshold:.12});
    revealEls.forEach(function(el){ io.observe(el); });
  }

  /* ---- init ---- */
  applyLang(getLang());
  closeD(false);
})();
