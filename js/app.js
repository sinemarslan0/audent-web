/**
 * Altınbaş University Faculty of Dentistry - AUDSA
 * DENTISTRY 5.0: DİJİTALDEN BİREYSELE
 * Core Application Engine
 * Color Scheme: Lacivert • Kırmızı • Beyaz
 */

// Application State
const AppState = {
  currentLang: localStorage.getItem('audsa_lang') || 'tr',
  activeScheduleDay: 'day1',
  activeScheduleFilter: 'all',
  activeSpeakerFilter: 'all',
  selectedSpeaker: null,
  activePosterIndex: 0
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
  renderWorkshops();
  renderPostersShowcase();
  renderSchedule();
  renderSponsors();
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
  const formUrl = symposiumData.event.registrationFormUrl || "https://forms.gle/BFu1sdK98rwNL6zg8";
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
  renderWorkshops();
  renderPostersShowcase();
  renderSchedule();
  renderSponsors();
  renderFaqs();
  renderOrganizers();

  refreshLucide();
}

/* ==========================================================================
   2. Live Countdown Timer (Target: 5 Aralık 2026)
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
    list = list.filter(s => s.category === 'keynote');
  } else if (filter === 'day2') {
    list = list.filter(s => s.category === 'workshop');
  }

  container.innerHTML = list.map(speaker => {
    return `
      <div class="glass-card rounded-2xl overflow-hidden group border border-slate-200/90 hover:border-[#E30613]/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
        <div>
          <!-- Image & Badges -->
          <div class="relative overflow-hidden aspect-[4/3] bg-slate-900">
            <img 
              src="${speaker.image}" 
              alt="${speaker.name}" 
              class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0A142F]/90 via-transparent to-transparent"></div>
            
            <!-- Specialty Badge -->
            <div class="absolute top-3 left-3 bg-[#0A142F]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 shadow-sm flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-[#E30613]"></span>
              ${speaker.badge}
            </div>

            <!-- Time Badge -->
            <div class="absolute bottom-3 left-3 text-white text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#0A142F]/85 backdrop-blur-sm border border-white/20 flex items-center gap-1.5">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-[#E30613]"></i>
              ${speaker.time}
            </div>

            <!-- Socials / Email -->
            <div class="absolute top-3 right-3 flex flex-col gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
              <a href="mailto:${speaker.socials.email}" class="w-8 h-8 rounded-full bg-white/90 hover:bg-[#E30613] hover:text-white text-slate-800 flex items-center justify-center transition-colors shadow-sm" title="E-posta">
                <i data-lucide="mail" class="w-4 h-4"></i>
              </a>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-extrabold text-[#0A142F] group-hover:text-[#E30613] transition-colors leading-tight">
              ${speaker.name}
            </h3>
            <p class="text-xs font-bold text-[#E30613] mt-1 mb-1">
              ${speaker.title[lang]}
            </p>
            <p class="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
              <i data-lucide="building" class="w-3.5 h-3.5 text-slate-400 flex-shrink-0"></i>
              <span class="line-clamp-1">${speaker.institution[lang]}</span>
            </p>

            <div class="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mb-2">
              <div class="text-[11px] font-bold text-[#0A142F] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <i data-lucide="presentation" class="w-3.5 h-3.5 text-[#E30613]"></i>
                ${lang === 'tr' ? 'Sunum Başlığı' : 'Presentation Topic'}
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
            class="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-800 hover:text-[#E30613] text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 border border-slate-200/80 hover:border-[#E30613]/30"
          >
            <span>${i18nDictionary[lang].speaker_view_bio}</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-[#E30613]"></i>
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
      btn.className = 'speaker-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-[#E30613] text-white shadow-md shadow-red-600/30 transition-all';
    } else {
      btn.className = 'speaker-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition-all';
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
  const bioEl = document.getElementById('speaker-modal-bio');
  const modalTime = document.getElementById('speaker-modal-time');

  if (modalImg) modalImg.src = speaker.image;
  if (modalName) modalName.textContent = speaker.name;
  if (modalTitle) modalTitle.textContent = speaker.title[lang];
  if (modalInst) modalInst.textContent = speaker.institution[lang];
  if (modalBadge) modalBadge.textContent = speaker.badge;
  if (modalTopic) modalTopic.textContent = speaker.topic[lang];
  if (bioEl) bioEl.textContent = speaker.bio[lang];
  if (modalTime) modalTime.textContent = speaker.time;

  openModal('modal-speaker');
}

/* ==========================================================================
   4. Dedicated Hands-on Workshops Section Rendering
   ========================================================================== */

function renderWorkshops() {
  const container = document.getElementById('workshops-container');
  if (!container) return;

  const lang = AppState.currentLang;
  const formUrl = symposiumData.event.registrationFormUrl;

  container.innerHTML = symposiumData.workshops.map(ws => {
    return `
      <div class="glass-card rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#E30613]/40 shadow-xl transition-all duration-300 flex flex-col lg:flex-row group">
        <!-- Visual & Badges Column -->
        <div class="lg:w-5/12 relative overflow-hidden bg-[#0A142F] min-h-[300px]">
          <img 
            src="${ws.image}" 
            alt="${ws.instructor}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A142F] via-[#0A142F]/40 to-transparent"></div>

          <!-- Red Quota Ribbon -->
          <div class="absolute top-4 left-4 bg-[#E30613] text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
            <i data-lucide="users" class="w-3.5 h-3.5"></i>
            <span>${ws.quota}</span>
          </div>

          <!-- Bottom Visual Overlay Info -->
          <div class="absolute bottom-4 left-4 right-4 text-white">
            <span class="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">${ws.instructorTitle[lang]}</span>
            <h4 class="text-xl font-black">${ws.instructor}</h4>
            <div class="flex items-center gap-2 mt-1 text-xs text-slate-300">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#E30613]"></i>
              <span>${ws.venue[lang]}</span>
            </div>
          </div>
        </div>

        <!-- Content & Program Column -->
        <div class="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <div class="flex items-center gap-2 flex-wrap mb-2">
              <span class="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#0A142F] text-white">
                5 Aralık 2026
              </span>
              <span class="px-2.5 py-1 rounded-md text-[11px] font-bold bg-red-100 text-[#E30613]">
                ${ws.badge}
              </span>
              ${ws.partner ? `<span class="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-100 text-slate-700">${ws.partner}</span>` : ''}
            </div>

            <h3 class="text-xl sm:text-2xl font-black text-[#0A142F] mb-3 leading-tight">
              ${ws.title[lang]}
            </h3>

            <!-- Time Slots -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Teorik Oturum</span>
                <span class="text-xs sm:text-sm font-extrabold text-[#0A142F] flex items-center gap-1 mt-0.5">
                  <i data-lucide="clock" class="w-3.5 h-3.5 text-[#E30613]"></i>
                  ${ws.theoreticalTime}
                </span>
              </div>
              <div class="p-3 rounded-xl bg-red-50/60 border border-red-200">
                <span class="text-[10px] font-bold text-[#E30613] uppercase tracking-wider block">Klinik Uygulama (Hands-on)</span>
                <span class="text-xs sm:text-sm font-extrabold text-[#E30613] flex items-center gap-1 mt-0.5">
                  <i data-lucide="activity" class="w-3.5 h-3.5 text-[#E30613]"></i>
                  ${ws.handsOnTime}
                </span>
              </div>
            </div>

            <!-- Curriculum Highlights -->
            <h5 class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              ${lang === 'tr' ? 'Atölye Kapsamı & Kazanımlar' : 'Workshop Curriculum'}
            </h5>
            <ul class="space-y-2 mb-6">
              ${ws.curriculum.map(item => `
                <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <i data-lucide="check-circle-2" class="w-4 h-4 text-[#E30613] mt-0.5 flex-shrink-0"></i>
                  <span>${item[lang]}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-100">
            <a 
              href="${formUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="google-form-link w-full sm:w-auto flex-1 py-3 px-5 rounded-xl bg-[#E30613] hover:bg-[#C70410] text-white font-bold text-xs sm:text-sm text-center shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 transition-all"
            >
              <span>${i18nDictionary[lang].workshops_register_btn}</span>
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>

            <button 
              type="button" 
              onclick="openPosterByIndex(${ws.id === 'workshop-anterior' ? 1 : 3})"
              class="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-all"
            >
              <i data-lucide="image" class="w-4 h-4 text-[#0A142F]"></i>
              <span>${lang === 'tr' ? 'Afişi İncele' : 'View Poster'}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshLucide();
}

/* ==========================================================================
   5. Posters Showcase & Modal Gallery (5 Official Posters)
   ========================================================================== */

function renderPostersShowcase() {
  const container = document.getElementById('posters-showcase-container');
  if (!container) return;

  const lang = AppState.currentLang;

  container.innerHTML = symposiumData.posters.map((poster, index) => {
    return `
      <div class="glass-card rounded-2xl overflow-hidden border border-slate-200 group hover:border-[#E30613] transition-all duration-300 flex flex-col justify-between">
        <div class="relative overflow-hidden aspect-[3/4] bg-slate-900 cursor-pointer" onclick="openPosterByIndex(${index})">
          <img 
            src="${poster.src}" 
            alt="${poster.title[lang]}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0A142F]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span class="px-4 py-2 rounded-xl bg-[#E30613] text-white text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <i data-lucide="zoom-in" class="w-4 h-4"></i>
              ${lang === 'tr' ? 'Büyüt / İncele' : 'Zoom Poster'}
            </span>
          </div>
        </div>

        <div class="p-4 bg-white flex items-center justify-between gap-2 border-t border-slate-100">
          <div>
            <h4 class="text-xs font-black text-[#0A142F] line-clamp-1">${poster.title[lang]}</h4>
            <span class="text-[10px] text-slate-500 block line-clamp-1">${poster.subtitle[lang]}</span>
          </div>
          <button 
            type="button" 
            onclick="openPosterByIndex(${index})"
            class="p-2 rounded-lg bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-[#E30613] transition-colors"
            title="Görüntüle"
          >
            <i data-lucide="maximize-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  refreshLucide();
}

function openPosterByIndex(index) {
  AppState.activePosterIndex = index;
  updateModalPoster();
  openModal('modal-poster');
}

function switchModalPoster(index) {
  AppState.activePosterIndex = index;
  updateModalPoster();
}

function updateModalPoster() {
  const lang = AppState.currentLang;
  const poster = symposiumData.posters[AppState.activePosterIndex];
  if (!poster) return;

  const imgEl = document.getElementById('modal-poster-img');
  const titleEl = document.getElementById('modal-poster-title-text');
  const subtitleEl = document.getElementById('modal-poster-subtitle-text');
  const downloadLink = document.getElementById('modal-poster-download');
  const tabsContainer = document.getElementById('modal-poster-tabs');

  if (imgEl) imgEl.src = poster.src;
  if (titleEl) titleEl.textContent = poster.title[lang];
  if (subtitleEl) subtitleEl.textContent = poster.subtitle[lang];
  if (downloadLink) {
    downloadLink.href = poster.src;
    downloadLink.setAttribute('download', poster.src.split('/').pop());
  }

  // Update tabs buttons inside modal
  if (tabsContainer) {
    tabsContainer.innerHTML = symposiumData.posters.map((p, idx) => {
      const active = idx === AppState.activePosterIndex;
      const activeClass = active 
        ? 'bg-[#E30613] text-white font-bold shadow-md' 
        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 font-semibold';
      return `
        <button 
          type="button" 
          onclick="switchModalPoster(${idx})"
          class="px-3 py-1.5 rounded-lg text-xs whitespace-nowrap transition-all ${activeClass}"
        >
          ${idx + 1}. ${p.title[lang].split(':')[0]}
        </button>
      `;
    }).join('');
  }

  refreshLucide();
}

/* ==========================================================================
   6. Scientific Schedule Rendering & Day Tabs
   ========================================================================== */

function setScheduleDay(dayKey) {
  AppState.activeScheduleDay = dayKey;

  const tabDay1 = document.getElementById('tab-day1');
  const tabDay2 = document.getElementById('tab-day2');

  if (dayKey === 'day1') {
    tabDay1.className = 'flex-1 py-3 px-5 text-xs sm:text-sm font-bold rounded-xl bg-[#E30613] text-white shadow-md shadow-red-600/30 transition-all flex items-center justify-center gap-2';
    tabDay2.className = 'flex-1 py-3 px-5 text-xs sm:text-sm font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all flex items-center justify-center gap-2';
  } else {
    tabDay2.className = 'flex-1 py-3 px-5 text-xs sm:text-sm font-bold rounded-xl bg-[#E30613] text-white shadow-md shadow-red-600/30 transition-all flex items-center justify-center gap-2';
    tabDay1.className = 'flex-1 py-3 px-5 text-xs sm:text-sm font-semibold rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all flex items-center justify-center gap-2';
  }

  renderSchedule();
}

function filterSchedule(type) {
  AppState.activeScheduleFilter = type;

  const filterBtns = document.querySelectorAll('.schedule-filter-btn');
  filterBtns.forEach(btn => {
    const f = btn.getAttribute('data-filter');
    if (f === type) {
      btn.className = 'schedule-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-[#0A142F] text-white shadow-sm transition-all';
    } else {
      btn.className = 'schedule-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 transition-all';
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

    let cardBgClass = 'bg-white border-slate-200/90';
    let iconBgClass = 'bg-slate-100 text-[#0A142F] border-slate-200';
    let badgeClass = 'bg-slate-100 text-slate-800 border-slate-200';

    if (isBreak) {
      cardBgClass = 'bg-slate-50 border-slate-200';
      iconBgClass = 'bg-slate-200/70 text-slate-700 border-slate-300';
      badgeClass = 'bg-slate-200 text-slate-800 border-slate-300';
    } else if (isWorkshop) {
      cardBgClass = 'bg-red-50/50 border-red-200 hover:border-[#E30613]';
      iconBgClass = 'bg-red-100 text-[#E30613] border-red-200';
      badgeClass = 'bg-[#E30613] text-white border-red-600';
    } else if (isKeynote) {
      cardBgClass = 'bg-white border-slate-200/90 shadow-sm hover:border-[#E30613]';
      iconBgClass = 'bg-[#0A142F] text-white border-[#0A142F]';
      badgeClass = 'bg-slate-900 text-white border-slate-900';
    }

    return `
      <div class="relative pl-8 md:pl-32 pb-8 group last:pb-2">
        <!-- Stem node -->
        <div class="absolute left-0 md:left-24 top-1 w-6 h-6 rounded-full bg-white border-2 border-[#E30613] shadow-sm flex items-center justify-center -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300">
          <div class="w-2 h-2 rounded-full bg-[#E30613]"></div>
        </div>

        <!-- Desktop Time Pill -->
        <div class="hidden md:block absolute left-0 top-0.5 w-20 text-right pr-4 text-xs font-extrabold text-[#0A142F]">
          ${item.time.split(' - ')[0]}
          <span class="block text-[11px] font-normal text-slate-400">${item.time.split(' - ')[1] || ''}</span>
        </div>

        <!-- Schedule Card -->
        <div class="${cardBgClass} rounded-2xl p-5 md:p-6 border transition-all duration-300 hover:shadow-md">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-2.5">
            <!-- Mobile time & badges -->
            <div class="flex items-center flex-wrap gap-2">
              <span class="md:hidden inline-flex items-center gap-1 text-xs font-bold text-[#0A142F] bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                <i data-lucide="clock" class="w-3 h-3 text-[#E30613]"></i>
                ${item.time}
              </span>
              <span class="${badgeClass} text-[11px] font-bold px-2.5 py-0.5 rounded-full border">
                ${item.badge[lang]}
              </span>
              <span class="text-xs text-slate-500 flex items-center gap-1 font-medium">
                <i data-lucide="map-pin" class="w-3 h-3 text-[#E30613]"></i>
                ${item.hall[lang]}
              </span>
            </div>

            <!-- Icon -->
            <div class="hidden md:flex items-center justify-center w-8 h-8 rounded-xl border ${iconBgClass}">
              <i data-lucide="${item.icon}" class="w-4 h-4"></i>
            </div>
          </div>

          <!-- Title -->
          <h4 class="text-base md:text-lg font-black text-[#0A142F] mb-1 leading-snug">
            ${item.title[lang]}
          </h4>

          <!-- Speaker / Host -->
          <div class="flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-600">
            <i data-lucide="user" class="w-3.5 h-3.5 text-[#E30613] flex-shrink-0"></i>
            <span>${item.speaker[lang]}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  refreshLucide();
}

/* ==========================================================================
   7. Sponsors & Industry Partners Rendering (Official PDF List)
   ========================================================================== */

function renderSponsors() {
  const container = document.getElementById('sponsors-grid');
  if (!container) return;

  const lang = AppState.currentLang;

  container.innerHTML = symposiumData.sponsors.map(s => {
    const categoryText = (typeof s.category === 'object' && s.category[lang]) ? s.category[lang] : (s.category[lang] || s.category);
    return `
      <div class="glass-card rounded-2xl p-6 bg-white border border-slate-200/90 shadow-sm hover:border-[#E30613]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
        <div>
          <!-- Official Brand Logo Container -->
          <div class="h-20 sm:h-24 w-full rounded-xl bg-slate-50/80 border border-slate-100 flex items-center justify-center p-3.5 mb-5 group-hover:bg-white group-hover:border-red-100 transition-colors">
            <img 
              src="${s.logo}" 
              alt="${s.name}" 
              class="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <!-- Brand Information -->
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#E30613]"></span>
              <span class="text-[10px] sm:text-[11px] font-bold tracking-wider text-slate-400 uppercase">${s.subtitle || 'SPONSOR'}</span>
            </div>
            <h4 class="text-base sm:text-lg font-black text-[#0A142F] group-hover:text-[#E30613] transition-colors leading-tight mb-1.5">
              ${s.name}
            </h4>
            <p class="text-xs text-slate-500 font-medium leading-relaxed">
              ${categoryText}
            </p>
          </div>
        </div>

        <!-- Footer / Link -->
        <div class="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
          <span class="text-[11px] font-bold text-slate-400 group-hover:text-[#E30613] transition-colors">
            ${lang === 'tr' ? 'Resmi Partner' : 'Official Partner'}
          </span>
          <a 
            href="${s.website}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="w-7 h-7 rounded-lg bg-slate-50 hover:bg-[#E30613] text-slate-400 hover:text-white flex items-center justify-center transition-all shadow-sm"
            title="${s.name}"
          >
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>
    `;
  }).join('');

  refreshLucide();
}

/* ==========================================================================
   8. FAQs Accordion Rendering
   ========================================================================== */

function renderFaqs() {
  const container = document.getElementById('faq-accordion-container');
  if (!container) return;

  const lang = AppState.currentLang;

  container.innerHTML = symposiumData.faqs.map((faq, index) => {
    return `
      <div class="glass-card rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200">
        <button 
          type="button" 
          onclick="toggleFaq(${index})"
          class="w-full py-4 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
          aria-expanded="false"
          id="faq-btn-${index}"
        >
          <span class="text-sm md:text-base font-bold text-[#0A142F]">${faq.q[lang]}</span>
          <div class="w-7 h-7 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0 transition-transform duration-300" id="faq-icon-${index}">
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
   9. Organizers & Leadership Rendering
   ========================================================================== */

function renderOrganizers() {
  const container = document.getElementById('organizers-container');
  if (!container) return;

  const lang = AppState.currentLang;

  container.innerHTML = symposiumData.organizers.map(org => {
    return `
      <div class="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:border-[#E30613]/50 hover:shadow-md transition-all flex flex-col justify-between">
        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#E30613] text-xs font-bold mb-3 border border-red-100">
            <span class="w-2 h-2 rounded-full bg-[#E30613]"></span>
            ${org.role[lang]}
          </div>
          <h4 class="text-base sm:text-lg font-black text-[#0A142F]">${org.name}</h4>
        </div>
        <div class="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-600">
          <a href="tel:${org.phone.replace(/\s+/g, '')}" class="inline-flex items-center gap-2 hover:text-[#E30613] transition-colors font-medium">
            <i data-lucide="phone" class="w-4 h-4 text-[#E30613] flex-shrink-0"></i>
            <span>${org.phone}</span>
          </a>
          <a href="mailto:${org.email}" class="inline-flex items-center gap-2 hover:text-[#E30613] transition-colors truncate">
            <i data-lucide="mail" class="w-4 h-4 text-[#E30613] flex-shrink-0"></i>
            <span class="truncate">${org.email}</span>
          </a>
        </div>
      </div>
    `;
  }).join('');

  refreshLucide();
}

/* ==========================================================================
   10. Navigation, Scroll Effects & Mobile Drawer
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
   11. Modal System
   ========================================================================== */

function initModals() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

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

  if (modalId === 'modal-poster') {
    updateModalPoster();
  }

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
   12. Contact Form Handling
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
   13. Calendar Export (December 5, 2026)
   ========================================================================== */

function downloadCalendar() {
  const lang = AppState.currentLang;
  const title = "Dentistry 5.0: Dijitalden Bireysele - AUDSA Sempozyumu";
  const desc = "Altinbas Universitesi Dis Hekimligi Fakultesi Yillik Sempozyumu & Hands-on Egitimleri. Kayit Formu: https://forms.gle/BFu1sdK98rwNL6zg8";
  const location = "Altinbas Universitesi Bakirkoy Yerleskesi & Altinbas Diş Hastanesi, Istanbul";
  
  const icsData = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Altinbas University//AUDSA Dentistry 5.0//TR",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:audsa-dentistry-5-20261205@altinbas.edu.tr",
    "DTSTAMP:20261006T090000Z",
    "DTSTART:20261205T060000Z",
    "DTEND:20261205T150000Z",
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
  link.setAttribute("download", "AUDSA-Dentistry-5.0-Sempozyum-5-Aralik.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast(i18nDictionary[lang].toast_calendar_success, 'info');
}

/* ==========================================================================
   14. Toast Notification System
   ========================================================================== */

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  
  let iconName = 'info';
  let borderClass = 'border-[#E30613]/60 bg-[#0A142F]/95 text-white';

  if (type === 'success') {
    iconName = 'check-circle-2';
    borderClass = 'border-emerald-500/80 bg-[#0A142F]/95 text-white';
  } else if (type === 'warning') {
    iconName = 'alert-triangle';
    borderClass = 'border-amber-500/80 bg-[#0A142F]/95 text-white';
  }

  toast.className = `flex items-center gap-3 px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-lg border ${borderClass} text-xs font-semibold transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto`;
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 text-[#E30613] flex-shrink-0"></i>
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
