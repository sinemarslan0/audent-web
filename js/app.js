/**
 * Altınbaş University Faculty of Dentistry - AUDSA
 * DENTISTRY 5.0: DİJİTALDEN BİREYSELE
 * Core Application Engine (Showcase & Information Portal)
 */

// Application State
const AppState = {
  currentLang: localStorage.getItem('audsa_lang') || 'tr',
  activeScheduleDay: 'day1',
  activeScheduleFilter: 'all',
  activeSpeakerFilter: 'all',
  selectedSpeaker: null
};

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
  initLucide();
  initLanguage();
  initCountdown();
  initScrollEffects();
  initNavigation();
  initModals();
  initForms();
  initGoogleFormLinks();
  
  // Initial dynamic renders
  renderSpeakers();
  renderSchedule();
  renderFaqs();
  renderOrganizers();
  
  // Refresh Lucide icons
  refreshLucide();
});

// Helper for Lucide icons
function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function refreshLucide() {
  setTimeout(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, 50);
}

// Bind registration Google Form URLs
function initGoogleFormLinks() {
  const formUrl = symposiumData.event.registrationFormUrl || "https://forms.gle/AUDSA-Dentistry5-Kayit";
  const formLinks = document.querySelectorAll('.google-form-link');
  formLinks.forEach(link => {
    link.href = formUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

/* ==========================================================================
   1. Multi-Language (i18n) Engine
   ========================================================================== */

function initLanguage() {
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const mobileLangToggleBtn = document.getElementById('mobile-lang-toggle-btn');

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
  }
  if (mobileLangToggleBtn) {
    mobileLangToggleBtn.addEventListener('click', toggleLanguage);
  }

  applyLanguage(AppState.currentLang, false);
}

function toggleLanguage() {
  const nextLang = AppState.currentLang === 'tr' ? 'en' : 'tr';
  AppState.currentLang = nextLang;
  localStorage.setItem('audsa_lang', nextLang);
  applyLanguage(nextLang, true);

  showToast(i18nDictionary[nextLang].toast_lang_changed, 'info');
}

function applyLanguage(lang, animate = true) {
  const dict = i18nDictionary[lang] || i18nDictionary.tr;

  // Update static elements with data-i18n
  const translatables = document.querySelectorAll('[data-i18n]');
  translatables.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (animate) {
        el.classList.add('lang-fade-out');
        setTimeout(() => {
          el.innerHTML = dict[key];
          el.classList.remove('lang-fade-out');
          el.classList.add('lang-fade-in');
          setTimeout(() => el.classList.remove('lang-fade-in'), 200);
        }, 150);
      } else {
        el.innerHTML = dict[key];
      }
    }
  });

  // Update placeholders
  const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderEls.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update language toggle indicators
  const langIndicators = document.querySelectorAll('.lang-indicator-text');
  langIndicators.forEach(ind => {
    ind.textContent = lang === 'tr' ? 'EN' : 'TR';
  });

  const langFlagIcons = document.querySelectorAll('.lang-flag-badge');
  langFlagIcons.forEach(badge => {
    badge.textContent = lang.toUpperCase();
  });

  // Re-render dynamic components
  renderSpeakers();
  renderSchedule();
  renderFaqs();
  renderOrganizers();

  refreshLucide();
}

/* ==========================================================================
   2. Live Countdown Timer
   ========================================================================== */

function initCountdown() {
  const targetDate = new Date(symposiumData.event.targetCountdownDate).getTime();

  function update() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minutesEl = document.getElementById('cd-minutes');
    const secondsEl = document.getElementById('cd-seconds');

    if (!daysEl) return;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   3. Speakers Rendering & Filtering
   ========================================================================== */

function renderSpeakers() {
  const container = document.getElementById('speakers-grid');
  if (!container) return;

  const lang = AppState.currentLang;
  const filter = AppState.activeSpeakerFilter;

  let list = symposiumData.speakers;
  if (filter === 'day1') {
    list = list.filter(s => s.day === 1);
  } else if (filter === 'day2') {
    list = list.filter(s => s.day === 2);
  }

  container.innerHTML = list.map(speaker => {
    return `
      <div class="glass-card rounded-2xl overflow-hidden group border border-slate-200/70 hover:border-teal-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
        <div>
          <!-- Image & Badges -->
          <div class="relative overflow-hidden aspect-[4/3] bg-slate-100">
            <img 
              src="${speaker.image}" 
              alt="${speaker.name}" 
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            
            <!-- Specialty Badge -->
            <div class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-teal-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-teal-100 shadow-sm flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
              ${speaker.badge}
            </div>

            <!-- Time Badge -->
            <div class="absolute bottom-3 left-3 text-white text-xs font-medium px-2 py-0.5 rounded-md bg-slate-900/70 backdrop-blur-sm border border-white/20 flex items-center gap-1">
              <i data-lucide="clock" class="w-3 h-3 text-teal-400"></i>
              ${speaker.time}
            </div>

            <!-- Socials -->
            <div class="absolute top-3 right-3 flex flex-col gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
              <a href="${speaker.socials.linkedin}" target="_blank" rel="noopener" class="w-7 h-7 rounded-full bg-white/85 hover:bg-teal-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-sm" title="LinkedIn">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="mailto:${speaker.socials.email}" class="w-7 h-7 rounded-full bg-white/85 hover:bg-teal-600 hover:text-white text-slate-700 flex items-center justify-center transition-colors shadow-sm" title="Email">
                <i data-lucide="mail" class="w-3.5 h-3.5"></i>
              </a>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
              ${speaker.name}
            </h3>
            <p class="text-sm font-medium text-teal-600 mt-0.5 mb-1">
              ${speaker.title[lang]}
            </p>
            <p class="text-xs text-slate-500 mb-4 flex items-center gap-1">
              <i data-lucide="building" class="w-3.5 h-3.5 text-slate-400"></i>
              ${speaker.institution[lang]}
            </p>

            <div class="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mb-2">
              <div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                <i data-lucide="presentation" class="w-3 h-3 text-teal-600"></i>
                ${lang === 'tr' ? 'Sunum Başlığı' : 'Keynote Topic'}
              </div>
              <p class="text-xs font-semibold text-slate-800 line-clamp-2 leading-relaxed">
                "${speaker.topic[lang]}"
              </p>
            </div>
          </div>
        </div>

        <!-- Footer Button -->
        <div class="px-6 pb-6 pt-0">
          <button 
            type="button"
            onclick="openSpeakerModal('${speaker.id}')"
            class="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-200 border border-slate-200/80 hover:border-teal-200"
          >
            <span>${i18nDictionary[lang].speaker_view_bio}</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  refreshLucide();
}

function filterSpeakers(category) {
  AppState.activeSpeakerFilter = category;

  // Update filter buttons UI
  const buttons = document.querySelectorAll('.speaker-filter-btn');
  buttons.forEach(btn => {
    const filterVal = btn.getAttribute('data-filter');
    if (filterVal === category) {
      btn.className = 'speaker-filter-btn px-4 py-2 rounded-xl text-xs font-semibold bg-teal-600 text-white shadow-sm transition-all';
    } else {
      btn.className = 'speaker-filter-btn px-4 py-2 rounded-xl text-xs font-semibold bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 transition-all';
    }
  });

  renderSpeakers();
}

function openSpeakerModal(speakerId) {
  const speaker = symposiumData.speakers.find(s => s.id === speakerId);
  if (!speaker) return;

  AppState.selectedSpeaker = speaker;
  const lang = AppState.currentLang;

  const modalImg = document.getElementById('speaker-modal-img');
  const modalName = document.getElementById('speaker-modal-name');
  const modalTitle = document.getElementById('speaker-modal-title-text');
  const modalInst = document.getElementById('speaker-modal-institution');
  const modalBadge = document.getElementById('speaker-modal-badge');
  const modalTopic = document.getElementById('speaker-modal-topic');
  const modalBio = document.getElementById('speaker-modal-bio');
  const modalTime = document.getElementById('speaker-modal-time');

  if (modalImg) modalImg.src = speaker.image;
  if (modalName) modalName.textContent = speaker.name;
  if (modalTitle) modalTitle.textContent = speaker.title[lang];
  if (modalInst) modalInst.textContent = speaker.institution[lang];
  if (modalBadge) modalBadge.textContent = speaker.badge;
  if (modalTopic) modalTopic.textContent = speaker.topic[lang];
  if (modalBio) modalBio.textContent = speaker.bio[lang];
  if (modalTime) modalTime.textContent = speaker.time;

  openModal('modal-speaker');
}

/* ==========================================================================
   4. Scientific Schedule Rendering & Day Tabs
   ========================================================================== */

function setScheduleDay(dayKey) {
  AppState.activeScheduleDay = dayKey;

  const tabDay1 = document.getElementById('tab-day1');
  const tabDay2 = document.getElementById('tab-day2');

  if (dayKey === 'day1') {
    tabDay1.className = 'flex-1 py-3 px-5 text-sm font-bold rounded-xl bg-teal-600 text-white shadow-md transition-all flex items-center justify-center gap-2';
    tabDay2.className = 'flex-1 py-3 px-5 text-sm font-semibold rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all flex items-center justify-center gap-2';
  } else {
    tabDay2.className = 'flex-1 py-3 px-5 text-sm font-bold rounded-xl bg-teal-600 text-white shadow-md transition-all flex items-center justify-center gap-2';
    tabDay1.className = 'flex-1 py-3 px-5 text-sm font-semibold rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all flex items-center justify-center gap-2';
  }

  renderSchedule();
}

function filterSchedule(type) {
  AppState.activeScheduleFilter = type;

  const filterBtns = document.querySelectorAll('.schedule-filter-btn');
  filterBtns.forEach(btn => {
    const f = btn.getAttribute('data-filter');
    if (f === type) {
      btn.className = 'schedule-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-white shadow-sm transition-all';
    } else {
      btn.className = 'schedule-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 transition-all';
    }
  });

  renderSchedule();
}

function renderSchedule() {
  const container = document.getElementById('schedule-timeline-container');
  if (!container) return;

  const lang = AppState.currentLang;
  const dayKey = AppState.activeScheduleDay;
  const filter = AppState.activeScheduleFilter;

  let items = symposiumData.schedule[dayKey] || [];

  if (filter !== 'all') {
    items = items.filter(item => item.type === filter);
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 text-slate-500 text-sm">
        <i data-lucide="info" class="w-8 h-8 mx-auto text-slate-400 mb-2"></i>
        ${lang === 'tr' ? 'Bu filtreye uygun oturum bulunamadı.' : 'No sessions found matching this filter.'}
      </div>
    `;
    refreshLucide();
    return;
  }

  container.innerHTML = items.map((item, idx) => {
    const isBreak = item.type === 'break' || item.type === 'lunch';
    const isWorkshop = item.type === 'workshop';
    const isKeynote = item.type === 'keynote';

    let cardBgClass = 'bg-white border-slate-200/80';
    let iconBgClass = 'bg-teal-50 text-teal-600 border-teal-100';
    let badgeClass = 'bg-teal-100/70 text-teal-800 border-teal-200';

    if (isBreak) {
      cardBgClass = 'bg-amber-50/40 border-amber-200/60';
      iconBgClass = 'bg-amber-100 text-amber-700 border-amber-200';
      badgeClass = 'bg-amber-100 text-amber-800 border-amber-200';
    } else if (isWorkshop) {
      cardBgClass = 'bg-emerald-50/30 border-emerald-200/70';
      iconBgClass = 'bg-emerald-100 text-emerald-700 border-emerald-200';
      badgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-200';
    } else if (isKeynote) {
      cardBgClass = 'bg-white border-slate-200/90 shadow-sm hover:border-teal-400';
      iconBgClass = 'bg-blue-50 text-blue-700 border-blue-100';
      badgeClass = 'bg-blue-100/70 text-blue-800 border-blue-200';
    }

    return `
      <div class="relative pl-8 md:pl-32 pb-8 group last:pb-2">
        <!-- Stem node -->
        <div class="absolute left-0 md:left-24 top-1 w-6 h-6 rounded-full bg-white border-2 border-teal-500 shadow-sm flex items-center justify-center -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300">
          <div class="w-2 h-2 rounded-full bg-teal-600"></div>
        </div>

        <!-- Desktop Time Pill -->
        <div class="hidden md:block absolute left-0 top-0.5 w-20 text-right pr-4 text-xs font-bold text-slate-700">
          ${item.time.split(' - ')[0]}
          <span class="block text-[11px] font-normal text-slate-400">${item.time.split(' - ')[1]}</span>
        </div>

        <!-- Schedule Card -->
        <div class="${cardBgClass} rounded-2xl p-5 md:p-6 border transition-all duration-300 hover:shadow-md">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2.5">
            <!-- Mobile time & badges -->
            <div class="flex items-center flex-wrap gap-2">
              <span class="md:hidden inline-flex items-center gap-1 text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                <i data-lucide="clock" class="w-3 h-3"></i>
                ${item.time}
              </span>
              <span class="${badgeClass} text-[11px] font-semibold px-2.5 py-0.5 rounded-full border">
                ${item.badge[lang]}
              </span>
              <span class="text-xs text-slate-500 flex items-center gap-1">
                <i data-lucide="map-pin" class="w-3 h-3 text-slate-400"></i>
                ${item.hall[lang]}
              </span>
            </div>

            <!-- Icon -->
            <div class="hidden md:flex items-center justify-center w-8 h-8 rounded-xl border ${iconBgClass}">
              <i data-lucide="${item.icon}" class="w-4 h-4"></i>
            </div>
          </div>

          <!-- Title -->
          <h4 class="text-base md:text-lg font-bold text-slate-900 mb-1 leading-snug">
            ${item.title[lang]}
          </h4>

          <!-- Speaker / Host -->
          <div class="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-600">
            <i data-lucide="user" class="w-3.5 h-3.5 text-teal-600 flex-shrink-0"></i>
            <span>${item.speaker[lang]}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshLucide();
}

/* ==========================================================================
   5. FAQs Accordion Rendering
   ========================================================================== */

function renderFaqs() {
  const container = document.getElementById('faq-accordion-container');
  if (!container) return;

  const lang = AppState.currentLang;

  container.innerHTML = symposiumData.faqs.map((faq, index) => {
    return `
      <div class="glass-card rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200">
        <button 
          type="button" 
          onclick="toggleFaq(${index})"
          class="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
          aria-expanded="false"
          id="faq-btn-${index}"
        >
          <span class="text-sm md:text-base font-bold text-slate-800">${faq.q[lang]}</span>
          <div class="w-7 h-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center flex-shrink-0 transition-transform duration-300" id="faq-icon-${index}">
            <i data-lucide="chevron-down" class="w-4 h-4"></i>
          </div>
        </button>

        <div 
          id="faq-content-${index}" 
          class="hidden px-6 pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50"
        >
          ${faq.a[lang]}
        </div>
      </div>
    `;
  }).join('');

  refreshLucide();
}

function toggleFaq(index) {
  const content = document.getElementById(`faq-content-${index}`);
  const icon = document.getElementById(`faq-icon-${index}`);
  const btn = document.getElementById(`faq-btn-${index}`);

  if (!content) return;

  const isHidden = content.classList.contains('hidden');

  // Close all others
  symposiumData.faqs.forEach((_, i) => {
    const c = document.getElementById(`faq-content-${i}`);
    const ic = document.getElementById(`faq-icon-${i}`);
    const b = document.getElementById(`faq-btn-${i}`);
    if (c && i !== index) {
      c.classList.add('hidden');
      if (ic) ic.style.transform = 'rotate(0deg)';
      if (b) b.setAttribute('aria-expanded', 'false');
    }
  });

  if (isHidden) {
    content.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
    btn.setAttribute('aria-expanded', 'true');
  } else {
    content.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
    btn.setAttribute('aria-expanded', 'false');
  }
}

/* ==========================================================================
   6. Organizers & Leadership Rendering
   ========================================================================== */

function renderOrganizers() {
  const container = document.getElementById('organizers-container');
  if (!container) return;

  const lang = AppState.currentLang;

  container.innerHTML = symposiumData.organizers.map(org => {
    return `
      <div class="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4 hover:border-teal-400 transition-all">
        <img src="${org.image}" alt="${org.name}" class="w-14 h-14 rounded-full object-cover border-2 border-teal-500/40 shadow-sm flex-shrink-0" />
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-bold text-slate-900 truncate">${org.name}</h4>
          <p class="text-xs font-semibold text-teal-600 truncate">${org.role[lang]}</p>
          <div class="mt-2 flex items-center gap-3 text-xs text-slate-500">
            <a href="tel:${org.phone.replace(/\s+/g, '')}" class="inline-flex items-center gap-1 hover:text-teal-700 transition-colors font-medium">
              <i data-lucide="phone" class="w-3 h-3 text-teal-600"></i>
              ${org.phone}
            </a>
            <a href="mailto:${org.email}" class="inline-flex items-center gap-1 hover:text-teal-700 transition-colors truncate">
              <i data-lucide="mail" class="w-3 h-3 text-teal-600"></i>
              <span class="truncate">${org.email}</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshLucide();
}

/* ==========================================================================
   7. Navigation, Scroll Effects & Mobile Drawer
   ========================================================================== */

function initNavigation() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileClose = document.getElementById('mobile-nav-close');
  const mobileBackdrop = document.getElementById('mobile-nav-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    mobileDrawer.classList.remove('translate-x-full');
    mobileBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.add('translate-x-full');
    mobileBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeDrawer);
  mobileLinks.forEach(l => l.addEventListener('click', closeDrawer));
}

function initScrollEffects() {
  const header = document.getElementById('main-header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Header styling
    if (scrollY > 30) {
      header.classList.add('shadow-md', 'bg-white/95');
      header.classList.remove('bg-white/80');
    } else {
      header.classList.remove('shadow-md', 'bg-white/95');
      header.classList.add('bg-white/80');
    }

    // Back to top button
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTopBtn.classList.add('opacity-100', 'translate-y-0');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* ==========================================================================
   8. Modal System
   ========================================================================== */

function initModals() {
  // Close modals on escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Close modals on clicking overlay backdrop
  const modalOverlays = document.querySelectorAll('.modal-overlay');
  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  refreshLucide();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

function closeAllModals() {
  const modals = document.querySelectorAll('.modal-root');
  modals.forEach(m => m.classList.add('hidden'));
  document.body.style.overflow = '';
}

/* ==========================================================================
   9. Contact Form Handling
   ========================================================================== */

function initForms() {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const lang = AppState.currentLang;

      const btn = contactForm.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = `
        <span class="inline-block animate-spin mr-2">⟳</span>
        ${lang === 'tr' ? 'Gönderiliyor...' : 'Sending...'}
      `;

      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = orig;
        contactForm.reset();
        showToast(i18nDictionary[lang].toast_contact_success, 'success');
      }, 700);
    });
  }
}

/* ==========================================================================
   10. Calendar Export (iCal / Google Calendar)
   ========================================================================== */

function downloadCalendar() {
  const lang = AppState.currentLang;
  const title = "Dentistry 5.0: Dijitalden Bireyele - AUDSA Sempozyumu";
  const desc = "Altinbas Universitesi Dis Hekimligi Fakultesi Ogrenci Kulubu Yillik Sempozyumu. Bakirkoy Saglik Yerleskesi Buyuk Oditoryumu.";
  const location = "Altinbas Universitesi Bakirkoy Saglik Kampusu, Buyuk Oditoryum, Istanbul";
  
  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Altinbas University//AUDSA Dentistry 5.0//TR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:audsa-dentistry-5-2026@altinbas.edu.tr",
    "DTSTAMP:20260924T090000Z",
    "DTSTART:20261024T063000Z",
    "DTEND:20261025T140000Z",
    `SUMMARY:${title}`,
    `DESCRIPTION:${desc}`,
    `LOCATION:${location}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", "AUDSA-Dentistry-5.0-Sempozyum.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast(i18nDictionary[lang].toast_calendar_success, 'info');
}

/* ==========================================================================
   11. Toast Notification System
   ========================================================================== */

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  
  let iconName = 'info';
  let borderClass = 'border-teal-500/60 bg-slate-900/95 text-white';

  if (type === 'success') {
    iconName = 'check-circle-2';
    borderClass = 'border-emerald-500/80 bg-slate-900/95 text-white';
  } else if (type === 'warning') {
    iconName = 'alert-triangle';
    borderClass = 'border-amber-500/80 bg-slate-900/95 text-white';
  }

  toast.className = `flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-lg border ${borderClass} text-xs font-semibold transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto`;
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 text-teal-400 flex-shrink-0"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  refreshLucide();

  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  }, 10);

  // Animate out
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
