// ============================================================
// GİKAL TOPLULUKLAR KULÜBÜ — UYGULAMA KATMANI (Tailwind'siz)
// ============================================================

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const el = (tag, cls = '', html = '') => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
};

// ------------------------------------------------------------
// 1. KATEGORİ FİLTRESİ + TOPLULUK GRID
// ------------------------------------------------------------
let activeFilter = 'all';

function getCategoryById(id) {
  return CATEGORIES.find(c => c.id === id);
}

function renderCategoryFilters() {
  const container = $('#categoryFilters');
  container.innerHTML = '';

  const allBtn = el('button', 'tab-btn' + (activeFilter === 'all' ? ' active' : ''));
  allBtn.textContent = `Tümü (${COMMUNITIES.length})`;
  allBtn.onclick = () => { activeFilter = 'all'; renderCategoryFilters(); renderCommunities(); };
  container.appendChild(allBtn);

  CATEGORIES.forEach(cat => {
    const count = COMMUNITIES.filter(c => c.cat === cat.id).length;
    const btn = el('button', 'tab-btn' + (activeFilter === cat.id ? ' active' : ''));
    btn.innerHTML = `<span style="margin-right:6px">${cat.icon}</span>${cat.name.split(' & ')[0]} (${count})`;
    btn.onclick = () => { activeFilter = cat.id; renderCategoryFilters(); renderCommunities(); };
    container.appendChild(btn);
  });
}

function renderCommunities() {
  const grid = $('#communitiesGrid');
  grid.innerHTML = '';

  const filtered = activeFilter === 'all'
    ? COMMUNITIES
    : COMMUNITIES.filter(c => c.cat === activeFilter);

  filtered.forEach((c, i) => {
    const cat = getCategoryById(c.cat);
    const card = el('div', 'community-card');
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="community-card-head">
        <div class="pill" style="background: ${cat.color}15; color: ${cat.color}; border: 1px solid ${cat.color}30;">
          <span>${cat.icon}</span>
          <span>${cat.name.split(' & ')[0]}</span>
        </div>
        <div class="community-card-rank">#${String(c.rank).padStart(2,'0')}</div>
      </div>
      <h3 style="color: ${cat.color};">${c.name}</h3>
      <p>${c.desc}</p>
      <div class="community-card-foot">
        <div class="label">Üye</div>
        <div class="num">${c.members}<small>·%${c.pct}</small></div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderCategoryBars() {
  const container = $('#categoryBars');
  container.innerHTML = '';

  const totals = CATEGORIES.map(cat => {
    const list = COMMUNITIES.filter(c => c.cat === cat.id);
    const members = list.reduce((s, c) => s + c.members, 0);
    return { ...cat, members, count: list.length };
  });

  const max = Math.max(...totals.map(t => t.members));

  totals.forEach((t) => {
    const row = el('div', 'cat-bar-row');
    row.innerHTML = `
      <div class="cat-bar-head">
        <div class="cat-bar-meta">
          <span class="icon">${t.icon}</span>
          <div>
            <div class="cat-bar-name" style="color:${t.color};">${t.name}</div>
            <div class="cat-bar-sub">${t.count} topluluk</div>
          </div>
        </div>
        <div class="cat-bar-num">${t.members}<small>öğrenci</small></div>
      </div>
      <div class="bar-bg">
        <div class="bar-fill" data-target="${(t.members/max)*100}" style="width:0%; background:${t.color};"></div>
      </div>
    `;
    container.appendChild(row);
  });

  setTimeout(() => {
    $$('#categoryBars .bar-fill').forEach(b => {
      b.style.width = b.dataset.target + '%';
    });
  }, 300);
}

// ------------------------------------------------------------
// 2. TAKVİM
// ------------------------------------------------------------
function renderCalendar() {
  const grid = $('#calendarGrid');
  grid.innerHTML = '';
  CALENDAR.forEach((m, i) => {
    const card = el('div', 'cal-card');
    card.style.borderLeft = `4px solid ${m.color}`;
    card.innerHTML = `
      <div class="cal-icon">${m.icon}</div>
      <div class="cal-meta" style="color:${m.color};">Ay ${String(i+1).padStart(2,'0')} · ${m.month}</div>
      <h3 class="cal-title">${m.theme}</h3>
      <p class="cal-desc">${m.details}</p>
    `;
    grid.appendChild(card);
  });
}

// ------------------------------------------------------------
// 3. CHECKLIST
// ------------------------------------------------------------
let activePhase = 'kurulus';
const STORAGE_KEY = 'gikal_checklist_v1';

function loadChecked() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function saveChecked(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}

function getTotalTasks() {
  return CHECKLIST_PHASES.reduce((s, p) => s + p.tasks.length, 0);
}

function getDoneCount(state) {
  let count = 0;
  Object.keys(state).forEach(k => { if (state[k]) count++; });
  return count;
}

function renderChecklistTabs() {
  const container = $('#checklistTabs');
  container.innerHTML = '';
  const state = loadChecked();

  CHECKLIST_PHASES.forEach(p => {
    const doneInPhase = p.tasks.filter((_, i) => state[`${p.id}_${i}`]).length;
    const btn = el('button', 'tab-btn' + (activePhase === p.id ? ' active' : ''));
    btn.innerHTML = `${p.icon} ${p.label} <span>${doneInPhase}/${p.tasks.length}</span>`;
    btn.onclick = () => { activePhase = p.id; renderChecklistTabs(); renderChecklistItems(); };
    container.appendChild(btn);
  });
}

function renderChecklistItems() {
  const container = $('#checklistItems');
  container.innerHTML = '';
  const phase = CHECKLIST_PHASES.find(p => p.id === activePhase);
  const state = loadChecked();

  const header = el('div', 'phase-header');
  header.style.borderColor = phase.color;
  header.style.background = phase.color + '08';
  header.innerHTML = `
    <div class="icon">${phase.icon}</div>
    <div style="flex: 1;">
      <div class="title" style="color:${phase.color}">${phase.label}</div>
      <div class="meta">${phase.period} · ${phase.tasks.length} görev</div>
    </div>
  `;
  container.appendChild(header);

  phase.tasks.forEach((task, i) => {
    const key = `${phase.id}_${i}`;
    const isDone = !!state[key];
    const item = el('div', 'check-item' + (isDone ? ' done' : ''));
    item.innerHTML = `
      <div class="checkbox"></div>
      <div style="flex: 1;">
        <div class="check-text">${task}</div>
        <div class="check-id">${phase.id}-${String(i+1).padStart(2,'0')}</div>
      </div>
    `;
    item.onclick = () => {
      const s = loadChecked();
      s[key] = !s[key];
      saveChecked(s);
      renderChecklistItems();
      renderChecklistTabs();
      updateProgress();
    };
    container.appendChild(item);
  });
}

function updateProgress() {
  const state = loadChecked();
  const total = getTotalTasks();
  const done = getDoneCount(state);
  const pct = total ? Math.round((done / total) * 100) : 0;
  $('#progressText').textContent = `${done} / ${total} · %${pct}`;
  $('#progressBar').style.width = pct + '%';
}

function resetChecklist() {
  if (!confirm('Tüm checklist sıfırlansın mı? Bu işlem geri alınamaz.')) return;
  localStorage.removeItem(STORAGE_KEY);
  renderChecklistTabs();
  renderChecklistItems();
  updateProgress();
}

// ------------------------------------------------------------
// 4. YOL HARİTASI
// ------------------------------------------------------------
function renderRoadmap() {
  const container = $('#roadmap');
  container.innerHTML = `<div class="roadmap-line"></div>`;

  const list = el('div', 'roadmap-list');

  ROADMAP.forEach((q) => {
    const block = el('div', 'roadmap-block');
    block.innerHTML = `
      <div class="roadmap-marker" style="background:${q.color};"></div>
      <div class="roadmap-phase" style="color:${q.color};">${q.phase} · ${q.milestone}</div>
      <h3 class="roadmap-title">${q.title}</h3>
      <div class="roadmap-grid">
        ${q.items.map(item => `
          <div class="roadmap-card">
            <div class="label" style="color:${q.color};">${item.label}</div>
            <p>${item.text}</p>
          </div>
        `).join('')}
      </div>
    `;
    list.appendChild(block);
  });

  container.appendChild(list);
}

// ------------------------------------------------------------
// 5. KPI GRID
// ------------------------------------------------------------
function renderKpis() {
  const grid = $('#kpiGrid');
  grid.innerHTML = '';
  KPIS.forEach((k) => {
    const card = el('div', 'kpi-card');
    card.innerHTML = `
      <div class="kpi-head">
        <div class="kpi-icon">${k.icon}</div>
        <div class="kpi-target">${k.target}</div>
      </div>
      <div class="kpi-metric">${k.metric}</div>
      <div class="kpi-detail">${k.detail}</div>
    `;
    grid.appendChild(card);
  });
}

// ------------------------------------------------------------
// 6. BÜTÇE DONUT
// ------------------------------------------------------------
function renderBudget() {
  const container = $('#budgetChart');
  const size = 320;
  const r = 110;
  const cx = size / 2;
  const cy = size / 2;
  const c = 2 * Math.PI * r;

  let cumulative = 0;
  const segments = BUDGET.map(b => {
    const dash = (b.pct / 100) * c;
    const offset = -((cumulative / 100) * c);
    cumulative += b.pct;
    return { ...b, dash, offset };
  });

  container.innerHTML = `
    <div class="budget-chart-inner">
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="flex-shrink: 0;">
        ${segments.map(s => `
          <circle cx="${cx}" cy="${cy}" r="${r}" fill="none"
                  stroke="${s.color}" stroke-width="44"
                  stroke-dasharray="${s.dash} ${c - s.dash}"
                  stroke-dashoffset="${s.offset}"
                  transform="rotate(-90 ${cx} ${cy})"/>
        `).join('')}
        <text x="${cx}" y="${cy - 5}" text-anchor="middle" fill="#f5f1ea" font-family="Fraunces" font-size="32">100%</text>
        <text x="${cx}" y="${cy + 20}" text-anchor="middle" fill="#f5f1ea" font-family="JetBrains Mono" font-size="10" letter-spacing="2" opacity="0.6">YILLIK BÜTÇE</text>
      </svg>
      <div class="budget-legend">
        ${BUDGET.map(b => `
          <div class="budget-legend-row">
            <div class="swatch">
              <div class="dot" style="background:${b.color};"></div>
              <div class="item-name">${b.item}</div>
            </div>
            <div class="pct">%${b.pct}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ------------------------------------------------------------
// 7. İLHAM VEREN TOPLULUKLAR
// ------------------------------------------------------------
function renderInspirations() {
  const grid = $('#inspirationGrid');
  grid.innerHTML = '';
  INSPIRATIONS.forEach(insp => {
    const card = el('div', 'insp-card');
    card.innerHTML = `
      <div class="origin">${insp.origin}</div>
      <h3>${insp.name}</h3>
      <p>${insp.desc}</p>
    `;
    grid.appendChild(card);
  });
}

// ------------------------------------------------------------
// 8. SCROLL REVEAL
// ------------------------------------------------------------
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  $$('.reveal').forEach(el => observer.observe(el));
}

// ------------------------------------------------------------
// 9. MOBILE NAV
// ------------------------------------------------------------
function initMobileNav() {
  const toggle = $('#mobileToggle');
  const menu = $('#mobileMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// ------------------------------------------------------------
// INIT
// ------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryFilters();
  renderCommunities();
  renderCategoryBars();
  renderCalendar();
  renderChecklistTabs();
  renderChecklistItems();
  updateProgress();
  renderRoadmap();
  renderKpis();
  renderBudget();
  renderInspirations();
  initScrollReveal();
  initMobileNav();
});
