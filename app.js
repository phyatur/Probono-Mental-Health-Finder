const psychologists = [
  {
    id: 1,
    name: 'Dr. Ama Mensah',
    city: 'Accra',
    type: 'Independent Psychologist',
    support: 'pro-bono',
    mode: 'hybrid',
    specialties: ['anxiety', 'young adults', 'stress'],
    availability: '2 pro bono slots this month',
    bio: 'Focuses on anxiety, academic stress, and young adult wellbeing. Offers limited pro bono intake each month and hybrid appointments.'
  },
  {
    id: 2,
    name: 'Kwame Ofori, MPhil',
    city: 'Kumasi',
    type: 'Independent Counselling Psychologist',
    support: 'reduced-fee',
    mode: 'in-person',
    specialties: ['trauma', 'grief', 'family'],
    availability: 'Reduced-fee assessment sessions',
    bio: 'Works with trauma recovery, grief, and family-related stress. Uses a reduced-fee model to increase access for low-income clients.'
  },
  {
    id: 3,
    name: 'Akosua Bediako',
    city: 'Accra',
    type: 'Independent Psychologist',
    support: 'pro-bono',
    mode: 'virtual',
    specialties: ['women', 'depression', 'life transitions'],
    availability: 'Weekly online pro bono hours',
    bio: 'Provides online support for women dealing with depressive symptoms, burnout, and major life transitions.'
  },
  {
    id: 4,
    name: 'Naa Lartey',
    city: 'Cape Coast',
    type: 'Psychological Therapist',
    support: 'reduced-fee',
    mode: 'hybrid',
    specialties: ['teens', 'school stress', 'confidence'],
    availability: 'Student-friendly pricing',
    bio: 'Supports teenagers and university-age clients through school stress, self-esteem issues, and adjustment periods.'
  },
  {
    id: 5,
    name: 'Ibrahim Fuseini',
    city: 'Tamale',
    type: 'Independent Counsellor',
    support: 'pro-bono',
    mode: 'in-person',
    specialties: ['community outreach', 'men', 'addiction'],
    availability: 'Community outreach appointments',
    bio: 'Works with men, addiction recovery, and community-based mental health support using outreach-oriented sessions.'
  },
  {
    id: 6,
    name: 'Esi Hammond',
    city: 'Kumasi',
    type: 'Clinical Psychologist',
    support: 'reduced-fee',
    mode: 'virtual',
    specialties: ['couples', 'communication', 'burnout'],
    availability: 'Evening video sessions',
    bio: 'Offers flexible evening appointments for couples support, burnout, and communication-focused therapy.'
  }
];

const cityFilter = document.getElementById('cityFilter');
const supportFilter = document.getElementById('supportFilter');
const modeFilter = document.getElementById('modeFilter');
const searchInput = document.getElementById('searchInput');
const cardGrid = document.getElementById('cardGrid');
const resultsSummary = document.getElementById('resultsSummary');
const resetFilters = document.getElementById('resetFilters');
const metricCount = document.getElementById('metric-count');
const tabButtons = [...document.querySelectorAll('.tab-btn')];
const themeToggle = document.querySelector('[data-theme-toggle]');
const dialog = document.getElementById('profileDialog');
const closeDialog = document.getElementById('closeDialog');
const openIntake = document.getElementById('open-intake');
const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

const dialogType = document.getElementById('dialogType');
const dialogName = document.getElementById('dialogName');
const dialogCity = document.getElementById('dialogCity');
const dialogSpecialties = document.getElementById('dialogSpecialties');
const dialogMode = document.getElementById('dialogMode');
const dialogSupport = document.getElementById('dialogSupport');
const dialogBio = document.getElementById('dialogBio');

let activeView = 'all';
let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
document.documentElement.setAttribute('data-theme', theme);

function populateCities() {
  const cities = [...new Set(psychologists.map(item => item.city))].sort();
  cities.forEach(city => {
    const option = document.createElement('option');
    option.value = city;
    option.textContent = city;
    cityFilter.appendChild(option);
  });
}

function matchesSearch(item, term) {
  const haystack = `${item.name} ${item.city} ${item.type} ${item.specialties.join(' ')} ${item.bio}`.toLowerCase();
  return haystack.includes(term.toLowerCase());
}

function getFilteredPsychologists() {
  const city = cityFilter.value;
  const support = supportFilter.value;
  const mode = modeFilter.value;
  const term = searchInput.value.trim();

  return psychologists.filter(item => {
    const cityMatch = city === 'all' || item.city === city;
    const supportMatch = support === 'all' || item.support === support;
    const modeMatch = mode === 'all' || item.mode === mode;
    const tabMatch = activeView === 'all' || item.support === activeView;
    const searchMatch = term === '' || matchesSearch(item, term);
    return cityMatch && supportMatch && modeMatch && tabMatch && searchMatch;
  });
}

function supportLabel(value) {
  return value === 'pro-bono' ? 'Pro bono' : 'Reduced fee';
}

function renderCards() {
  const filtered = getFilteredPsychologists();
  metricCount.textContent = psychologists.length;
  resultsSummary.textContent = `${filtered.length} professional${filtered.length === 1 ? '' : 's'} found`;

  if (!filtered.length) {
    cardGrid.innerHTML = `
      <article class="empty-state">
        <p class="eyebrow">No match</p>
        <h3>No psychologist matches the current filters.</h3>
        <p>Try changing city, care type, or search terms such as anxiety, trauma, couples, or youth.</p>
      </article>
    `;
    return;
  }

  cardGrid.innerHTML = filtered.map(item => `
    <article class="profile-card">
      <div class="profile-top">
        <div>
          <p class="profile-city">${item.city}</p>
          <h3>${item.name}</h3>
        </div>
        <span class="badge badge-primary">${supportLabel(item.support)}</span>
      </div>
      <div class="badges">
        <span class="badge badge-neutral">${item.mode}</span>
        <span class="badge badge-accent">${item.type}</span>
      </div>
      <p>${item.specialties.join(' • ')}</p>
      <div class="card-actions">
        <span class="availability">${item.availability}</span>
        <button class="btn btn-secondary detail-btn" type="button" data-id="${item.id}">View profile</button>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', () => openProfile(Number(btn.dataset.id)));
  });
}

function openProfile(id) {
  const item = psychologists.find(entry => entry.id === id);
  if (!item) return;
  dialogType.textContent = item.type;
  dialogName.textContent = item.name;
  dialogCity.textContent = `City: ${item.city}`;
  dialogSpecialties.textContent = `Specialties: ${item.specialties.join(', ')}`;
  dialogMode.textContent = `Session mode: ${item.mode}`;
  dialogSupport.textContent = `Access model: ${supportLabel(item.support)} — ${item.availability}`;
  dialogBio.textContent = item.bio;
  dialog.showModal();
}

function setActiveView(view) {
  activeView = view;
  tabButtons.forEach(btn => {
    const active = btn.dataset.view === view;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', String(active));
  });
  renderCards();
}

[cityFilter, supportFilter, modeFilter, searchInput].forEach(control => {
  control.addEventListener('input', renderCards);
  control.addEventListener('change', renderCards);
});

resetFilters.addEventListener('click', () => {
  cityFilter.value = 'all';
  supportFilter.value = 'all';
  modeFilter.value = 'all';
  searchInput.value = '';
  setActiveView('all');
});

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => setActiveView(btn.dataset.view));
});

themeToggle.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
});

closeDialog.addEventListener('click', () => dialog.close());

dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const inside = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
  if (!inside) dialog.close();
});

openIntake.addEventListener('click', () => {
  dialogType.textContent = 'How matching works';
  dialogName.textContent = 'Simple client journey';
  dialogCity.textContent = 'Step 1: User filters by city, affordability, or speciality.';
  dialogSpecialties.textContent = 'Step 2: The app narrows the list instantly using JavaScript.';
  dialogMode.textContent = 'Step 3: The user opens a profile to review fit and care style.';
  dialogSupport.textContent = 'Step 4: In a real product, the next step would be secure contact, intake, or referral to Ghana mental health services.';
  dialogBio.textContent = 'For this capstone, the flow stays front-end only so your team can explain the architecture clearly without needing a backend or database.';
  dialog.showModal();
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  formResponse.textContent = name ? `Thanks, ${name}. Your message has been captured in this browser demo.` : 'Thank you for your message.';
  contactForm.reset();
});

populateCities();
renderCards();
