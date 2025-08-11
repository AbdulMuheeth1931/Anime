const favouriteAnime = [
  {
    id: 2001,
    title: "Attack on Titan",
    poster: "assets/aot.jpg",
    seasons: [
      { seasonNum: 1, episodes: ["Ep 1", "Ep 2"] }
    ],
    movies: []
  },
  {
    id: 2002,
    title: "Jujutsu Kaisen",
    poster: "assets/jjk.jpg",
    seasons: [
      { seasonNum: 1, episodes: ["Ep 1", "Ep 2"] }
    ],
    movies: []
  },

];

const favouriteManga = [
  {
    id: 3001,
    title: "Attack on Titan",
    poster: "assets/aot.jpg",
    seasons: [
      { seasonNum: 1, episodes: ["Ep 1", "Ep 2"] }
    ],
    movies: []
  },
  {
    id: 3002,
    title: "Jujutsu Kaisen",
    poster: "assets/jjk.jpg",
    seasons: [
      { seasonNum: 1, episodes: ["Ep 1", "Ep 2"] }
    ],
    movies: []
  },
];

const homeFavourites = favouriteAnime;
const homeMangaFavourites = favouriteManga;

const dataByTab = {
    anime: [
    {
      id: 1,
      title: "Naruto Classic  ",
      poster: "assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes:["Episode 1", "Episode 2", "Episode 3", "Episode 4", "Episode 5", 
                                  "Episode 6", "Episode 7", "Episode 8", "Episode 9", "Episode 10", 
                                  "Episode 11", "Episode 12", "Episode 13", "Episode 14", "Episode 15", 
                                  "Episode 16", "Episode 17", "Episode 18", "Episode 19", "Episode 20", 
                                  "Episode 21", "Episode 22", "Episode 23", "Episode 24", "Episode 25", 
                                  "Episode 26", "Episode 27", "Episode 28", "Episode 29", "Episode 30", 
                                  "Episode 31", "Episode 32", "Episode 33", "Episode 34", "Episode 35", 
                                  "Episode 36", "Episode 37", "Episode 38", "Episode 39", "Episode 40", 
                                  "Episode 41", "Episode 42", "Episode 43", "Episode 44", "Episode 45", 
                                  "Episode 46", "Episode 47", "Episode 48", "Episode 49", "Episode 50", 
                                  "Episode 51", "Episode 52", "Episode 53", "Episode 54", "Episode 55", 
                                  "Episode 56", "Episode 57"] },
                                  
        { seasonNum: 2, episodes:["Episode 58", "Episode 59", "Episode 60", "Episode 61", "Episode 62", 
                                  "Episode 63", "Episode 64", "Episode 65", "Episode 66", "Episode 67", 
                                  "Episode 68", "Episode 69", "Episode 70", "Episode 71", "Episode 72", 
                                  "Episode 73", "Episode 74", "Episode 75", "Episode 76", "Episode 77", 
                                  "Episode 78", "Episode 79", "Episode 80", "Episode 81", "Episode 82", 
                                  "Episode 83", "Episode 84", "Episode 85", "Episode 86", "Episode 87", 
                                  "Episode 88", "Episode 89", "Episode 90", "Episode 91", "Episode 92", 
                                  "Episode 93", "Episode 94", "Episode 95", "Episode 96", "Episode 97", 
                                  "Episode 98", "Episode 99", "Episode 100"] },
        { seasonNum: 3,episodes:[ "Episode 101", "Episode 102", "Episode 103", "Episode 104", "Episode 105", 
                                  "Episode 106", "Episode 107", "Episode 108", "Episode 109", "Episode 110", 
                                  "Episode 111", "Episode 112", "Episode 113", "Episode 114", "Episode 115", 
                                  "Episode 116", "Episode 117", "Episode 118", "Episode 119", "Episode 120", 
                                  "Episode 121", "Episode 122", "Episode 123", "Episode 124", "Episode 125", 
                                  "Episode 126", "Episode 127", "Episode 128", "Episode 129", "Episode 130", 
                                  "Episode 131", "Episode 132", "Episode 133", "Episode 134", "Episode 135", 
                                  "Episode 136", "Episode 137", "Episode 138", "Episode 139", "Episode 140", 
                                  "Episode 141"]},
        { seasonNum: 4,episodes:[ "Episode 142", "Episode 143", "Episode 144", "Episode 145", "Episode 146", 
                                  "Episode 147", "Episode 148", "Episode 149", "Episode 150", "Episode 151", 
                                  "Episode 152", "Episode 153", "Episode 154", "Episode 155", "Episode 156", 
                                  "Episode 157", "Episode 158", "Episode 159", "Episode 160", "Episode 161", 
                                  "Episode 162", "Episode 163", "Episode 164", "Episode 165", "Episode 166", 
                                  "Episode 167", "Episode 168", "Episode 169", "Episode 170", "Episode 171", 
                                  "Episode 172", "Episode 173", "Episode 174", "Episode 175", "Episode 176", 
                                  "Episode 177", "Episode 178", "Episode 179", "Episode 180", "Episode 181", 
                                  "Episode 182", "Episode 183"]},
        { seasonNum: 5,episodes:[ "Episode 184", "Episode 185", "Episode 186", "Episode 187", "Episode 188", 
                                  "Episode 189", "Episode 190", "Episode 191", "Episode 192", "Episode 193", 
                                  "Episode 194", "Episode 195", "Episode 196", "Episode 197", "Episode 198", 
                                  "Episode 199", "Episode 200", "Episode 201", "Episode 202", "Episode 203", 
                                  "Episode 204", "Episode 205", "Episode 206", "Episode 207", "Episode 208", 
                                  "Episode 209", "Episode 210", "Episode 211", "Episode 212", "Episode 213", 
                                  "Episode 214", "Episode 215", "Episode 216", "Episode 217", "Episode 218", 
                                  "Episode 219", "Episode 220"]}
      ],
      movies: ["Movie-1  Ninja Clash in the Land of Snow", " Movie-2  Legend of the Stone of Gelel","Movie-3  Guardians of the Crescent Moon Kingdom"]
    },
    {
      id: 2,
      title: "One Piece",
      poster: "assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Episode 1 - Pirate King", "Episode 2 - The Adventure Starts"] },
        { seasonNum: 2, episodes: ["Episode 1 - Grand Line", "Episode 2 - New Crew"] }
      ],
      movies: ["One Piece: The Movie", "Dead End Adventure"]
    }
  ],
  englishAnime: [
    {
      id: 11,
      title: "Avatar: The Last Airbender",
      poster: "assets/images-1.jpg",
      seasons: [{ seasonNum: 1, episodes: ["Ep 1-Aang Awakens", "Ep 2-Katara's Adventure"] }],
      movies: ["The Last Airbender Movie"]
    },
    {
      id: 12,
      title: "RWBY",
      poster: "assets/images-1.jpg",
      seasons: [{ seasonNum: 1, episodes: ["Red Trailer", "White Trailer"] }],
      movies: []
    }
  ],
  tamilAnime: [
    {
      id: 21,
      title: "Chhota Bheem (Tamil dubbed)",
      poster:"assets/images-1.jpg",
      seasons: [{ seasonNum: 1, episodes: ["Ep 1-Bheem vs Kalia", "Ep 2-Bheem's Triumph"] }],
      movies: ["Bheem in the City"]
    }
  ],
  myAnime: [
    {
      id: 3,
      title: "Demon king Daimao",
      poster: "assets/images-100.jpeg",
      seasons: [
        { seasonNum: 1, episodes: ["Episode 1 - The Beginning", "Episode 2 - Alchemy Lessons"] }
      ],
      movies: ["The Conqueror of Shamballa"]
    },
    {
      id: 4,
      title: "Dragon Ball Z",
      poster: "assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Episode 1 - Goku's Adventure", "Episode 2 - The New Threat"] },
        { seasonNum: 2, episodes: ["Episode 1 - Training for Battle"] }
      ],
      movies: ["Broly: The Legendary Super Saiyan"]
    }
  ],
  manga: [
    {
      id: 101,
      title: "Chained Soldier",
      poster: "assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - Uzumaki Naruto", "Chapter 2 - Chunin Exams"] },
        { seasonNum: 2, episodes: ["Chapter 3 - Sasuke vs Naruto", "Chapter 4 - Final Battle"] }
      ],
      movies: []
    },
    {
      id: 101,
      title: "Chainsaw Man",
      poster: "assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - Romance Dawn", "Chapter 2 - Buggy the Clown"] },
        { seasonNum: 2, episodes: ["Chapter 3 - Arlong Park", "Chapter 4 - Drum Island"] }
      ],
      movies: []
    },
    {
      id: 101,
      title: "Darling In The Franxx",
      poster:"assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - To You, in 2000 Years", "Chapter 2 - That Day"] }
      ],
      movies: []
    },
    {
      id: 101,
      title: "Domestic Girlfriend",
      poster:"assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - To You, in 2000 Years", "Chapter 2 - That Day"] }
      ],
      movies: []
    },
    {
      id: 101,
      title: "High School Dxd",
      poster:"assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - To You, in 2000 Years", "Chapter 2 - That Day"] }
      ],
      movies: []
    },
        {
      id: 103,
      title: "Kakegurui",
      poster:"assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - To You, in 2000 Years", "Chapter 2 - That Day"] }
      ],
      movies: []
    },
        {
      id: 103,
      title: "Midnight Secretary",
      poster:"assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - To You, in 2000 Years", "Chapter 2 - That Day"] }
      ],
      movies: []
    },
        {
      id: 103,
      title: "My Dress Up Darling",
      poster:"assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - To You, in 2000 Years", "Chapter 2 - That Day"] }
      ],
      movies: []
    },
        {
      id: 103,
      title: "Prison School",
      poster:"assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - To You, in 2000 Years", "Chapter 2 - That Day"] }
      ],
      movies: []
    },
        {
      id: 103,
      title: "Redo of Healer",
      poster:"assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - To You, in 2000 Years", "Chapter 2 - That Day"] }
      ],
      movies: []
    },
        {
      id: 103,
      title: "Rosario + Vampire",
      poster:"assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - To You, in 2000 Years", "Chapter 2 - That Day"] }
      ],
      movies: []
    },
        {
      id: 103,
      title: "Sekirei",
      poster:"assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - To You, in 2000 Years", "Chapter 2 - That Day"] }
      ],
      movies: []
    },
        {
      id: 103,
      title: "",
      poster:"assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - To You, in 2000 Years", "Chapter 2 - That Day"] }
      ],
      movies: []
    },
        {
      id: 103,
      title: "",
      poster:"assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1 - To You, in 2000 Years", "Chapter 2 - That Day"] }
      ],
      movies: []
    },


  ],
  myManga: [
    {
      id: 201,
      title: "Your Name (Manga)",
      poster: "assets/images-1.jpg",
      seasons: [
        { seasonNum: 1, episodes: ["Chapter 1", "Chapter 2", "Chapter 3"] }
      ],
      movies: []
    }
  ],
  

movies : [
  {
    id: 401,
    title: "Naruto Movie 1",
    poster: "assets/naruto-movie1.jpg",
    seasons: [], // movies will not have seasons/episodes
    movies: []
  },
  {
    id: 402,
    title: "One Piece Movie",
    poster: "assets/onepiece-movie.jpg",
    seasons: [],
    movies: []
  }
  // add more movies here...
]
};

let currentTab = 'home';
let currentSelected = null;
let currentDetailTab = 'seasons';
let currentSelectedSeason = null;
let currentSelectedVolume = null;

const tabButtons = document.querySelectorAll('nav button.nav-btn');
const tabSections = {
  home: document.getElementById('homeSection'),
  englishAnime: document.getElementById('englishAnimeSection'),
  tamilAnime: document.getElementById('tamilAnimeSection'),
  anime: document.getElementById('animeSection'),
  myAnime: document.getElementById('myAnimeSection'),
  manga: document.getElementById('mangaSection'),
  myManga: document.getElementById('myMangaSection'),
  movies: document.getElementById('moviesSection'),
  login: document.getElementById('loginSection')
};

const searchInput = document.getElementById('searchBar');
const logoutBtn = document.getElementById('logoutBtn');
const detailSidebar = document.getElementById('detailSidebar');
const detailTitle = document.getElementById('detailTitle');
const closeDetailBtn = document.getElementById('closeDetailBtn');
const detailTabs = document.querySelectorAll('.detail-tab-btn');
const detailContent = document.getElementById('detailContent');
const userNameDisplay = document.getElementById('userNameDisplay');
const loginSection = document.getElementById('loginSection');
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('usernameInput');

function showOnlySections(sectionsToShow) {
  Object.values(tabSections).forEach(sec => {
    sec.style.display = (sectionsToShow.includes(sec.id) ? '' : 'none');
  });
}

function isMangaCategory(item) {
  if (!item) return false;
  return currentTab === 'manga' || currentTab === 'myManga';
}

function filterListBySearch(list) {
  if (!searchFilter) return list;
  return list.filter(item => item.title.toLowerCase().includes(searchFilter));
}

function fillSection(carouselId, arr) {
  const carousel = document.getElementById(carouselId);
  carousel.innerHTML = '';
  let filtered = filterListBySearch(arr || []);
  if (filtered.length === 0) {
    carousel.innerHTML = "<p style='color:#999; padding:20px;'>No anime/manga found.</p>";
    return;
  }
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'poster-card';
    card.innerHTML = `
      <img src="${item.poster}" alt="${item.title}" loading="lazy" />
      <div class="poster-title" title="${item.title}">${item.title}</div>
    `;

    card.querySelector('img').addEventListener('click', () => openDetailSidebar(item));
    card.querySelector('.poster-title').addEventListener('click', () => openDetailSidebar(item));

    carousel.appendChild(card);
  });
}

let searchFilter = '';

function showTab(tab) {
  currentTab = tab;
  tabButtons.forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  showOnlySections([tab + 'Section']);
  searchInput.style.display = '';
  logoutBtn.style.display = 'inline-block';

  if (tab === 'home') {
    fillSection('favouriteCarousel', homeFavourites);
    fillSection('favouriteMangaCarousel', homeMangaFavourites);   
  } else if (dataByTab[tab]) {
    fillSection(tab + 'Carousel', dataByTab[tab]);
  } else {
    const carousel = document.getElementById(tab + 'Carousel');
    if (carousel) carousel.innerHTML = '';
  }
  updateThemeBtn();
  closeDetailSidebar();
}

searchInput.addEventListener('input', function () {
  searchFilter = this.value.trim().toLowerCase();
  showTab(currentTab);
});

function openDetailSidebar(item) {
  currentSelected = item;
  currentSelectedSeason = null;
  currentSelectedVolume = null;
  currentDetailTab = isMangaCategory(item) ? 'volumes' : 'seasons';
  updateDetailTitle();
  updateDetailTabsForCategory(item);
  setActiveDetailTab();
  renderDetailContent();
  detailSidebar.classList.add('open');
  detailSidebar.setAttribute('aria-hidden', 'false');
  detailSidebar.focus();
}

function closeDetailSidebar() {
  detailSidebar.classList.remove('open');
  detailSidebar.setAttribute('aria-hidden', 'true');
  currentSelected = null;
  currentSelectedSeason = null;
  currentSelectedVolume = null;
}

function updateDetailTitle() {
  detailTitle.textContent = currentSelected ? currentSelected.title : '';
}

function updateDetailTabsForCategory(item) {
  const seasonsTab = Array.from(detailTabs).find(t => t.dataset.detailTab === 'seasons' || t.dataset.detailTab === 'volumes');
  const moviesTab = Array.from(detailTabs).find(t => t.dataset.detailTab === 'movies');

  if (isMangaCategory(item)) {
    if (seasonsTab) {
      seasonsTab.textContent = 'Volumes';
      seasonsTab.dataset.detailTab = 'volumes';
    }
    if (moviesTab) moviesTab.style.display = 'none';
    currentDetailTab = 'volumes';
  } else {
    if (seasonsTab) {
      seasonsTab.textContent = 'Seasons';
      seasonsTab.dataset.detailTab = 'seasons';
      seasonsTab.style.display = '';
    }
    if (moviesTab) moviesTab.style.display = '';
    if (currentDetailTab !== 'seasons' && currentDetailTab !== 'movies') {
      currentDetailTab = 'seasons';
    }
  }
  setActiveDetailTab();
}

function setActiveDetailTab() {
  detailTabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.detailTab === currentDetailTab);
  });
}

function renderDetailContent() {
  detailContent.innerHTML = '';
  if (!currentSelected) return;

  if (isMangaCategory(currentSelected)) {
    if (!currentSelectedVolume) {
      if (!currentSelected.seasons || currentSelected.seasons.length === 0) {
        detailContent.innerHTML = '<p>No volumes available.</p>';
        return;
      }
      const ul = document.createElement('ul');
      ul.className = 'detail-list';
      currentSelected.seasons.forEach(volume => {
        const li = document.createElement('li');
        li.textContent = `Volume ${volume.seasonNum}`;
        li.addEventListener('click', () => {
          currentSelectedVolume = volume;
          renderDetailContent();
        });
        ul.appendChild(li);
      });
      detailContent.appendChild(ul);
    } else {
      const backBtn = document.createElement('button');
      backBtn.id = 'backToVolumesBtn';
      backBtn.textContent = '← Back to Volumes';
      backBtn.addEventListener('click', () => {
        currentSelectedVolume = null;
        renderDetailContent();
      });
      detailContent.appendChild(backBtn);

      if (!currentSelectedVolume.episodes || currentSelectedVolume.episodes.length === 0) {
        detailContent.innerHTML += '<p>No chapters found.</p>';
        return;
      }
      const ul = document.createElement('ul');
      ul.className = 'detail-list';
      currentSelectedVolume.episodes.forEach(chapter => {
        const li = document.createElement('li');
        li.textContent = chapter;
        ul.appendChild(li);
      });
      detailContent.appendChild(ul);
    }
  } else {
    if (currentDetailTab === 'seasons') {
      if (!currentSelectedSeason) {
        if (!currentSelected.seasons || currentSelected.seasons.length === 0) {
          detailContent.innerHTML = '<p>No seasons available.</p>';
          return;
        }
        const ul = document.createElement('ul');
        ul.className = 'detail-list';
        currentSelected.seasons.forEach(season => {
          const li = document.createElement('li');
          li.textContent = `Season ${season.seasonNum}`;
          li.addEventListener('click', () => {
            currentSelectedSeason = season;
            renderDetailContent();
          });
          ul.appendChild(li);
        });
        detailContent.appendChild(ul);
      } else {
        const backBtn = document.createElement('button');
        backBtn.id = 'backToSeasonsBtn';
        backBtn.textContent = '← Back to Seasons';
        backBtn.addEventListener('click', () => {
          currentSelectedSeason = null;
          renderDetailContent();
        });
        detailContent.appendChild(backBtn);

        if (!currentSelectedSeason.episodes || currentSelectedSeason.episodes.length === 0) {
          detailContent.innerHTML += '<p>No episodes found.</p>';
          return;
        }
        const ul = document.createElement('ul');
        ul.className = 'detail-list';
        currentSelectedSeason.episodes.forEach(ep => {
          const li = document.createElement('li');
          li.textContent = ep;
          ul.appendChild(li);
        });
        detailContent.appendChild(ul);
      }
    } else if (currentDetailTab === 'movies') {
      if (!currentSelected.movies || currentSelected.movies.length === 0) {
        detailContent.innerHTML = '<p>No movies available.</p>';
        return;
      }
      const ul = document.createElement('ul');
      ul.className = 'detail-list';
      currentSelected.movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie;
        ul.appendChild(li);
      });
      detailContent.appendChild(ul);
    }
  }
}

detailTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    if (tab.dataset.detailTab === currentDetailTab) return;
    currentDetailTab = tab.dataset.detailTab;
    currentSelectedSeason = null;
    currentSelectedVolume = null;
    renderDetailContent();
    setActiveDetailTab();
  });
});

closeDetailBtn.addEventListener('click', () => closeDetailSidebar());

const themeToggleBtn = document.getElementById('themeToggleBtn');
function updateThemeBtn() {
  themeToggleBtn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
}
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  document.body.classList.toggle('dark-mode');
  updateThemeBtn();
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('loggedInName');
  logoutBtn.style.display = 'none';
  usernameInput.value = '';
  showTab('login');
});

function greetUser(name) {
  userNameDisplay.textContent = name;
  logoutBtn.style.display = 'inline-block';
}

function checkLogin() {
  const savedName = localStorage.getItem('loggedInName');
  if (savedName && savedName.trim() !== '') {
    greetUser(savedName);
    searchInput.style.display = '';
    logoutBtn.style.display = 'inline-block';
    return true;
  }
  return false;
}

function initializeLoginState() {
  if (!checkLogin()) {
    showTab('login');
    searchInput.style.display = 'none';
    logoutBtn.style.display = 'none';
    tabButtons.forEach(b => b.classList.remove('active'));
  } else {
    showTab('home');
    tabButtons.forEach(b => b.classList.toggle('active', b.dataset.tab === 'home'));
  }
}

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const enteredName = usernameInput.value.trim();
  if (enteredName) {
    localStorage.setItem('loggedInName', enteredName);
    greetUser(enteredName);
    loginSection.style.display = 'none';
    showTab('home');
    tabButtons.forEach(b => b.classList.toggle('active', b.dataset.tab === 'home'));
  }
});

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (!checkLogin() && btn.dataset.tab !== 'login') {
      showTab('login');
      return;
    }
    showTab(btn.dataset.tab);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('dark-mode');
  updateThemeBtn();
  initializeLoginState();
});
