/* ============================================================
   ALSHAHAMA Medical Equipment — script.js
   Vanilla JS. No dependencies.
   ============================================================ */
(function () {
  "use strict";

  var WA_NUMBER = "971503238103";
  var WA_MSG = {
    ar: "السلام عليكم، أريد الاستفسار عن خدمات الشهامة للمعدات الطبية.",
    en: "Hello, I would like to inquire about ALSHAHAMA Medical Equipments Trading LLC services."
  };

  /* ---------- i18n dictionary (content lives here, no runtime MT) ---------- */
  var I18N = {
    ar: {
      docTitle: "الشهامة لتجارة المعدات الطبية ش ذ م م | دبي – الإمارات",
      metaDesc: "الشهامة للمعدات الطبية في دبي: الكراسي المتحركة، الأطراف الصناعية، الأجهزة التعويضية وحلول الجلوس المتخصص، مع التقييم وأخذ المقاسات والتوصيل والتدريب.",
      skip: "تخطّي إلى المحتوى",
      brandAria: "الشهامة لتجارة المعدات الطبية ش ذ م م – الصفحة الرئيسية",
      logoAlt: "الشهامة لتجارة المعدات الطبية ش ذ م م",
      navMain: "التنقل الرئيسي",
      navHome: "الرئيسية", navServices: "خدماتنا", navWhy: "لماذا الشهامة",
      navHow: "طريقة العمل", navFaq: "الأسئلة الشائعة", navContact: "تواصل معنا",
      waAria: "تواصل عبر واتساب",
      menuOpen: "فتح القائمة", menuClose: "إغلاق القائمة", menuTitle: "القائمة",

      heroLoc: "دبي – الإمارات العربية المتحدة",
      heroH1: "الشهامة لتجارة المعدات الطبية ش ذ م م",
      heroLead: "حلول طبية مدروسة تساعد على الحركة والاستقلالية",
      heroText: "نوفر المعدات الطبية وحلول الحركة والكراسي المتحركة والأطراف الصناعية والأجهزة التعويضية، مع خدمات التقييم وأخذ المقاسات والتوصيل والتدريب على الاستخدام.",
      heroWa: "تواصل عبر واتساب", heroExplore: "استكشف خدماتنا",

      trustAria: "نقاط الثقة",
      trust1: "خصوصية واحترام", trust2: "حلول حسب احتياج الحالة", trust3: "قياسات دقيقة",
      trust4: "تدريب على الاستخدام", trust5: "متابعة بعد التسليم",

      servicesEyebrow: "خدماتنا",
      servicesH2: "حلول طبية متكاملة للحركة والرعاية",
      servicesSub: "نختار كل حل وفق تقييم الحالة واحتياج المستخدم وبيئة الاستخدام.",
      svc1t: "الكراسي المتحركة",
      svc1d: "كراسي يدوية وكهربائية وتأهيلية، مع حلول الجلوس المتخصص ودعم الرأس وخيارات الميل والإرجاع حسب احتياج الحالة.",
      svc2t: "الأطراف الصناعية",
      svc2d: "تقييم الحالة وأخذ المقاسات وتجربة الطرف والتدريب على الاستخدام والمتابعة بعد التسليم.",
      svc3t: "الأجهزة التعويضية والتقويمية",
      svc3d: "جبائر وأجهزة تقويم ودعم للمفاصل والحركة، يتم اختيارها وفق التقييم والاحتياج الوظيفي.",
      svc4t: "المشايات وأجهزة الحركة",
      svc4d: "مشايات وعكازات وأجهزة مساعدة على الحركة يتم اختيارها حسب احتياج المستخدم وبيئة الاستخدام.",
      svc5t: "التقييم المنزلي",
      svc5d: "زيارة منزلية عند الحاجة لتقييم بيئة الاستخدام وأخذ القياسات وتحديد الحل المناسب.",
      svc6t: "الأسرة والمعدات الطبية المنزلية",
      svc6d: "أسرة طبية ومعدات ومستلزمات مختارة للاستخدام المنزلي والرعاية اليومية.",
      svc7t: "السماعات الطبية",
      svc7d: "حلول سمعية وسماعات طبية مع التوجيه المناسب بحسب التقييم والاحتياج.",
      svc8t: "التوصيل والتدريب",
      svc8d: "تسليم الجهاز وضبطه وتوضيح طريقة الاستخدام والعناية وإرشادات السلامة للمستخدم أو الأسرة.",

      whyEyebrow: "لماذا الشهامة",
      whyH2: "لماذا تختار الشهامة؟",
      whyIntro: "لا نبدأ بالمنتج؛ نبدأ بفهم الحالة، وقدرات المستخدم، وبيئة الاستخدام، واحتياجات الأسرة أو مقدم الرعاية.",
      why1: "تقييم دقيق", why2: "قياسات وتجربة", why3: "اختيار حل مناسب", why4: "شرح واضح للمواصفات",
      why5: "تدريب على الاستخدام", why6: "متابعة بعد التسليم", why7: "احترام خصوصية المريض",
      why8: "التواصل مع الأسرة أو الجهة الداعمة",

      howEyebrow: "طريقة العمل",
      howH2: "من التواصل حتى المتابعة",
      how1t: "استلام الطلب", how1d: "مراجعة احتياج المريض والتقرير الطبي والصور أو المعلومات المتاحة.",
      how2t: "التقييم وأخذ القياسات", how2d: "تحديد موعد للتقييم وأخذ القياسات، في مقر الشركة أو منزل المريض عند الحاجة.",
      how3t: "ترشيح الحل المناسب", how3d: "اختيار الجهاز أو المنتج المناسب وتوضيح المواصفات والخيارات المتاحة.",
      how4t: "التجربة والضبط", how4d: "تجربة المنتج وإجراء التعديلات اللازمة للتأكد من الراحة والملاءمة.",
      how5t: "التسليم والتدريب", how5d: "تسليم الجهاز وشرح الاستخدام والعناية وإجراءات السلامة.",
      how6t: "المتابعة", how6d: "التواصل بعد التسليم لمراجعة الاستخدام ومعالجة أي ملاحظات.",

      serveEyebrow: "من نخدم",
      serveH2: "نخدم الأفراد والجهات الصحية والخيرية",
      serve1: "المرضى والأسر", serve2: "المستشفيات والعيادات", serve3: "مراكز الرعاية المنزلية",
      serve4: "الجمعيات والمؤسسات الخيرية", serve5: "أخصائيو العلاج الطبيعي والتأهيل",
      serve6: "الجهات الداعمة ومقدمو الرعاية",
      area: "نقدم خدماتنا من دبي، مع إمكانية التنسيق للزيارات والتوصيل إلى مناطق أخرى داخل دولة الإمارات حسب نوع الحالة والخدمة المطلوبة.",

      faqEyebrow: "الأسئلة الشائعة",
      faqH2: "إجابات على أكثر ما يُسأل",
      faq1q: "هل توفرون زيارة منزلية؟",
      faq1a: "تتوفر الزيارة المنزلية عند الحاجة وبعد مراجعة الحالة وموقع المريض.",
      faq2q: "هل يمكن إرسال التقرير الطبي عبر واتساب؟",
      faq2a: "نعم، يمكن إرسال التقرير والمعلومات المتاحة عبر واتساب لمراجعة الاحتياج المبدئي.",
      faq3q: "هل توفرون أخذ المقاسات؟",
      faq3a: "نعم، يتم أخذ القياسات المطلوبة حسب نوع الجهاز أو المنتج.",
      faq4q: "هل يوجد تدريب بعد التسليم؟",
      faq4a: "نعم، يتم شرح طريقة الاستخدام والعناية وإرشادات السلامة للمستخدم أو الأسرة.",
      faq5q: "هل يمكن طلب حل مخصص؟",
      faq5a: "نعم، بعض الحالات تحتاج تعديلات أو تجهيزات خاصة ويتم تقييمها بشكل منفصل.",
      faq6q: "هل يمكن للجمعيات الخيرية التواصل معكم؟",
      faq6a: "نعم، يمكن للجمعيات والجهات الداعمة التواصل معنا لمراجعة الحالات والتقارير والاحتياجات.",

      contactEyebrow: "تواصل معنا",
      contactH2: "تواصل معنا لمناقشة احتياج الحالة",
      contactSub: "أرسل التقرير الطبي أو وصف الحالة والمعلومات المتاحة، وسيقوم الفريق بمراجعة الطلب وتحديد الخطوة المناسبة.",
      contactWa: "تواصل عبر واتساب", contactCall: "اتصال مباشر", contactCopy: "نسخ رقم الهاتف",
      contactAddress: "دبي – بر دبي – بناية العبير – الطابق الأول – مكتب 101",
      copyDone: "تم نسخ الرقم", copyFail: "تعذّر النسخ، انسخ الرقم يدوياً",
      privacyTitle: "الخصوصية",
      privacy: "نحترم خصوصية وكرامة المرضى، ولا ننشر صورهم أو معلومات الحالات الإنسانية. يرجى عدم إرسال معلومات طبية غير ضرورية، وتستخدم البيانات المرسلة فقط لمراجعة الطلب والتواصل بشأن الخدمة.",

      footQuick: "روابط سريعة",
      footLegal: "الشهامة لتجارة المعدات الطبية ش ذ م م",
      footLoc: "دبي – بر دبي – بناية العبير – الطابق الأول – مكتب 101",
      disclaimer: "المعلومات الموجودة في الموقع تعريفية ولا تعتبر تشخيصاً طبياً أو بديلاً عن استشارة الطبيب أو المختص.",
      rights: "جميع الحقوق محفوظة"
    },

    en: {
      docTitle: "ALSHAHAMA Medical Equipments Trading LLC | Dubai, UAE",
      metaDesc: "Alshahama Medical Equipment in Dubai: wheelchairs, prosthetics, orthotic devices and specialized seating, with assessment, measurements, delivery and user training.",
      skip: "Skip to content",
      brandAria: "ALSHAHAMA Medical Equipments Trading LLC – Home",
      logoAlt: "ALSHAHAMA Medical Equipments Trading LLC",
      navMain: "Main navigation",
      navHome: "Home", navServices: "Services", navWhy: "Why Alshahama",
      navHow: "How It Works", navFaq: "FAQ", navContact: "Contact",
      waAria: "Contact us on WhatsApp",
      menuOpen: "Open menu", menuClose: "Close menu", menuTitle: "Menu",

      heroLoc: "Dubai, United Arab Emirates",
      heroH1: "ALSHAHAMA Medical Equipments Trading LLC",
      heroLead: "Thoughtfully selected medical solutions for mobility and independence",
      heroText: "We provide medical equipment, mobility solutions, wheelchairs, prosthetics and orthotic devices, supported by assessment, measurements, delivery and user training.",
      heroWa: "Contact Us on WhatsApp", heroExplore: "Explore Our Services",

      trustAria: "Trust points",
      trust1: "Privacy and Respect", trust2: "Case-Specific Solutions", trust3: "Accurate Measurements",
      trust4: "User Training", trust5: "Post-Delivery Support",

      servicesEyebrow: "Services",
      servicesH2: "Complete medical solutions for mobility and care",
      servicesSub: "Every solution is selected based on assessment, the user's needs and the environment of use.",
      svc1t: "Wheelchairs",
      svc1d: "Manual, powered and rehabilitation wheelchairs, including specialized seating, head support, tilt and recline options based on individual needs.",
      svc2t: "Prosthetics",
      svc2d: "Assessment, measurements, fitting, user training and follow-up for prosthetic solutions.",
      svc3t: "Orthotics and Support Devices",
      svc3d: "Orthotic devices, braces and joint-support solutions selected according to assessment and functional needs.",
      svc4t: "Walkers and Mobility Aids",
      svc4d: "Walkers, crutches and mobility aids selected according to the user’s needs and environment.",
      svc5t: "Home Assessment",
      svc5d: "Home visits when required to assess the environment, take measurements and identify a suitable solution.",
      svc6t: "Medical Beds and Homecare Equipment",
      svc6d: "Medical beds and selected devices and supplies for home use and daily care.",
      svc7t: "Hearing Aids",
      svc7d: "Hearing solutions and medical hearing aids with appropriate guidance based on assessment and need.",
      svc8t: "Delivery and Training",
      svc8d: "Delivery, setup, user guidance, care instructions and safety training for patients and families.",

      whyEyebrow: "Why Alshahama",
      whyH2: "Why Choose Alshahama?",
      whyIntro: "We do not begin with a product. We begin by understanding the user's condition, abilities, environment and the needs of the family or caregiver.",
      why1: "Careful Assessment", why2: "Measurements and Fitting", why3: "Suitable Solution Selection",
      why4: "Clear Specification Guidance", why5: "User Training", why6: "Post-Delivery Follow-Up",
      why7: "Respect for Patient Privacy", why8: "Coordination with Families and Supporting Organizations",

      howEyebrow: "How It Works",
      howH2: "From First Contact to Follow-Up",
      how1t: "Request Review", how1d: "We review the patient's needs, medical report and available information or images.",
      how2t: "Assessment and Measurements", how2d: "An appointment is arranged for assessment and measurements, at the company or at home when required.",
      how3t: "Solution Recommendation", how3d: "We recommend a suitable device or product and explain the available specifications and options.",
      how4t: "Fitting and Adjustment", how4d: "The product is tested and adjusted to improve comfort and suitability.",
      how5t: "Delivery and Training", how5d: "The device is delivered with instructions for use, care and safety.",
      how6t: "Follow-Up", how6d: "We follow up after delivery to review usage and address relevant concerns.",

      serveEyebrow: "Who We Serve",
      serveH2: "Serving Individuals, Healthcare Providers and Charities",
      serve1: "Patients and Families", serve2: "Hospitals and Clinics", serve3: "Home Healthcare Providers",
      serve4: "Charities and Foundations", serve5: "Rehabilitation and Physiotherapy Professionals",
      serve6: "Supporting Organizations and Caregivers",
      area: "We operate from Dubai and may coordinate visits or delivery to other areas within the UAE depending on the case and service requirements.",

      faqEyebrow: "FAQ",
      faqH2: "Answers to the most common questions",
      faq1q: "Do you provide home visits?",
      faq1a: "Home visits may be arranged after reviewing the case and the patient's location.",
      faq2q: "Can I send the medical report through WhatsApp?",
      faq2a: "Yes. Medical reports and available information may be shared through WhatsApp for an initial review.",
      faq3q: "Do you provide measurement services?",
      faq3a: "Yes. Required measurements are taken according to the device or product.",
      faq4q: "Is training provided after delivery?",
      faq4a: "Yes. The user or family receives guidance on operation, care and safety.",
      faq5q: "Can I request a customized solution?",
      faq5a: "Yes. Some cases require special adjustments or configurations and are assessed individually.",
      faq6q: "Can charities contact your company?",
      faq6a: "Yes. Charities and supporting organizations may contact us to review cases, reports and requirements.",

      contactEyebrow: "Contact",
      contactH2: "Contact Us to Discuss the Patient's Needs",
      contactSub: "Send the medical report, case description and available information. Our team will review the request and advise on the appropriate next step.",
      contactWa: "Contact on WhatsApp", contactCall: "Call Now", contactCopy: "Copy Phone Number",
      contactAddress: "Office 101, First Floor, Al Abeer Building, Bur Dubai, Dubai, UAE",
      copyDone: "Phone number copied", copyFail: "Copy failed — please copy the number manually",
      privacyTitle: "Privacy",
      privacy: "We respect patient privacy and dignity and do not publish patient photographs or humanitarian case information. Please avoid sharing unnecessary medical information. Submitted details are used only to review the request and communicate regarding the service.",

      footQuick: "Quick Links",
      footLegal: "ALSHAHAMA Medical Equipments Trading LLC",
      footLoc: "Office 101, First Floor, Al Abeer Building, Bur Dubai, Dubai, UAE",
      disclaimer: "The information on this website is for general guidance and does not constitute medical diagnosis or replace professional medical advice.",
      rights: "All rights reserved"
    }
  };

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Language ---------- */
  function getLang() {
    try { var s = localStorage.getItem("alshahama_lang"); if (s === "ar" || s === "en") return s; } catch (e) {}
    return "ar";
  }
  function saveLang(l) { try { localStorage.setItem("alshahama_lang", l); } catch (e) {} }

  function waHref(lang) {
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_MSG[lang]);
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.ar;
    var html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

    // text content
    $$("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    // aria-labels on single elements
    $$("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      if (dict[k] != null) el.setAttribute("aria-label", dict[k]);
    });
    // aria-labels for <nav>
    $$("[data-i18n-aria-nav]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria-nav");
      if (dict[k] != null) el.setAttribute("aria-label", dict[k]);
    });
    // alt text
    $$("[data-i18n-alt]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-alt");
      if (dict[k] != null) el.setAttribute("alt", dict[k]);
    });

    // document meta
    document.title = dict.docTitle;
    var md = $('meta[name="description"]'); if (md) md.setAttribute("content", dict.metaDesc);

    // whatsapp links
    var href = waHref(lang);
    $$("[data-wa]").forEach(function (a) { a.setAttribute("href", href); });

    // language buttons active state
    $$(".lang-btn").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    // compact toggle (mobile): shows the language you'll switch TO
    var compact = $("[data-lang-toggle]");
    if (compact) {
      if (lang === "ar") { compact.textContent = "EN"; compact.setAttribute("aria-label", "English"); }
      else { compact.textContent = "ع"; compact.setAttribute("aria-label", "العربية"); }
    }

    // menu toggle label reflects current state in current language
    syncMenuToggleLabel();
  }

  function setLang(lang) { saveLang(lang); applyLang(lang); }

  /* ---------- Mobile menu ---------- */
  var toggle = $("#menuToggle"),
      menu = $("#mobileMenu"),
      backdrop = $("#drawerBackdrop"),
      closeBtn = $("#menuClose");

  function menuIsOpen() { return menu && menu.classList.contains("open"); }

  function syncMenuToggleLabel() {
    if (!toggle) return;
    var dict = I18N[getLang()];
    toggle.setAttribute("aria-label", menuIsOpen() ? dict.menuClose : dict.menuOpen);
  }

  function openMenu() {
    if (!menu) return;
    backdrop.hidden = false;
    requestAnimationFrame(function () { backdrop.classList.add("show"); });
    menu.classList.add("open");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    syncMenuToggleLabel();
    var first = menu.querySelector("a, button");
    if (first) first.focus();
  }
  function closeMenu(returnFocus) {
    if (!menu) return;
    menu.classList.remove("open");
    backdrop.classList.remove("show");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    syncMenuToggleLabel();
    setTimeout(function () { if (!menuIsOpen()) backdrop.hidden = true; }, 280);
    if (returnFocus && toggle) toggle.focus();
  }

  if (toggle) toggle.addEventListener("click", function () { menuIsOpen() ? closeMenu(true) : openMenu(); });
  if (closeBtn) closeBtn.addEventListener("click", function () { closeMenu(true); });
  if (backdrop) backdrop.addEventListener("click", function () { closeMenu(true); });
  if (menu) $$("nav a", menu).forEach(function (a) { a.addEventListener("click", function () { closeMenu(false); }); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menuIsOpen()) closeMenu(true);
  });

  /* ---------- Language buttons ---------- */
  $$(".lang-btn").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });
  var compactToggle = $("[data-lang-toggle]");
  if (compactToggle) {
    compactToggle.addEventListener("click", function () {
      setLang(getLang() === "ar" ? "en" : "ar");
    });
  }

  /* ---------- FAQ accordion ---------- */
  $$(".faq-q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      var panel = document.getElementById(btn.getAttribute("aria-controls"));
      // close siblings (single-open accordion)
      $$(".faq-q").forEach(function (other) {
        if (other !== btn) {
          other.setAttribute("aria-expanded", "false");
          var p = document.getElementById(other.getAttribute("aria-controls"));
          if (p) p.hidden = true;
        }
      });
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      if (panel) panel.hidden = expanded;
    });
  });

  /* ---------- Copy phone ---------- */
  var copyBtn = $("#copyPhone"), feedback = $("#copyFeedback");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var num = copyBtn.getAttribute("data-copy");
      var dict = I18N[getLang()];
      var done = function () { if (feedback) { feedback.textContent = dict.copyDone; setTimeout(function () { feedback.textContent = ""; }, 2600); } };
      var fail = function () { if (feedback) { feedback.textContent = dict.copyFail; } };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(num).then(done).catch(fail);
      } else {
        try {
          var t = document.createElement("textarea"); t.value = num; document.body.appendChild(t);
          t.select(); document.execCommand("copy"); document.body.removeChild(t); done();
        } catch (e) { fail(); }
      }
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = $("#siteHeader");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Footer year ---------- */
  var y = $("#year"); if (y) y.textContent = new Date().getFullYear();

  /* ---------- Init ---------- */
  applyLang(getLang());
  closeMenu(false); // ensure closed on load
})();
