/* ==========================================================================
   MARVEL MULTIVERSE - ULTIMATE INTERACTIVE ENGINE (JS)
   ========================================================================== */

// 1. CHARACTER DATABASE
const MARVEL_DATABASE = [
  {
    id: "iron-man",
    name: "IRON MAN",
    alias: "Tony Stark",
    team: "AVENGERS",
    category: "avengers",
    powerLevel: 95,
    stats: { strength: 85, speed: 88, energy: 95, combat: 85 },
    color: "#e62429",
    glowColor: "rgba(230, 36, 41, 0.6)",
    quote: "I am Iron Man.",
    sfx: "repulsor",
    bio: "Genius, billionaire, playboy, philanthropist. Tony Stark constructed a powered suit of armor to escape captivity, becoming the protector of Earth and founding member of the Avengers.",
    powers: ["Arc Reactor Energy", "Nano-Tech Armor", "Repulsor Beams", "Flight & Targeting AI"]
  },
  {
    id: "spider-man",
    name: "SPIDER-MAN",
    alias: "Peter Parker",
    team: "AVENGERS",
    category: "avengers",
    powerLevel: 88,
    stats: { strength: 78, speed: 94, energy: 70, combat: 92 },
    color: "#e62429",
    glowColor: "rgba(230, 36, 41, 0.6)",
    quote: "With great power comes great responsibility.",
    sfx: "magic",
    bio: "Bitten by a radioactive spider, high school student Peter Parker gained extraordinary arachnid abilities and swore to protect New York City as your friendly neighborhood Spider-Man.",
    powers: ["Spider-Sense Radar", "Web-Slinging", "Wall-Crawling", "Superhuman Agility"]
  },
  {
    id: "thor",
    name: "THOR",
    alias: "Thor Odinson",
    team: "COSMIC",
    category: "cosmic",
    powerLevel: 98,
    stats: { strength: 98, speed: 85, energy: 96, combat: 90 },
    color: "#0088ff",
    glowColor: "rgba(0, 136, 255, 0.6)",
    quote: "Bring me Thanos!",
    sfx: "lightning",
    bio: "The Asgardian God of Thunder, wielder of Mjolnir and Stormbreaker. Thor possesses immense divine strength and commands the elemental power of cosmic lightning.",
    powers: ["God of Thunder", "Stormbreaker & Mjolnir", "Asgardian Physiology", "Atmospheric Flight"]
  },
  {
    id: "captain-america",
    name: "CAPTAIN AMERICA",
    alias: "Steve Rogers",
    team: "AVENGERS",
    category: "avengers",
    powerLevel: 84,
    stats: { strength: 72, speed: 75, energy: 60, combat: 99 },
    color: "#0055ff",
    glowColor: "rgba(0, 85, 255, 0.6)",
    quote: "I can do this all day.",
    sfx: "shield",
    bio: "Recipient of the Super-Soldier Serum during WWII, Steve Rogers became Captain America, the living symbol of freedom and master tactical leader of the Avengers.",
    powers: ["Vibranium Shield Mastery", "Super-Soldier Conditioning", "Tactical Genius", "Peak Physical Power"]
  },
  {
    id: "doctor-strange",
    name: "DOCTOR STRANGE",
    alias: "Stephen Strange",
    team: "MAGIC",
    category: "magic",
    powerLevel: 97,
    stats: { strength: 60, speed: 70, energy: 99, combat: 88 },
    color: "#ffaa00",
    glowColor: "rgba(255, 170, 0, 0.6)",
    quote: "Dormammu, I've come to bargain!",
    sfx: "magic",
    bio: "Once a world-renowned neurosurgeon, Stephen Strange mastered the mystic arts under the Ancient One to become Sorcerer Supreme, protecting reality from interdimensional threats.",
    powers: ["Sorcerer Supreme", "Dimensional Eldritch Portals", "Time Manipulation", "Astral Projection"]
  },
  {
    id: "scarlet-witch",
    name: "SCARLET WITCH",
    alias: "Wanda Maximoff",
    team: "MAGIC",
    category: "magic",
    powerLevel: 99,
    stats: { strength: 65, speed: 72, energy: 100, combat: 84 },
    color: "#ff0044",
    glowColor: "rgba(255, 0, 68, 0.6)",
    quote: "You took everything from me.",
    sfx: "magic",
    bio: "Wielder of Chaos Magic foretold in the Darkhold, Wanda Maximoff can rewrite the fabric of reality itself, unleashing unmatched magical destruction across timelines.",
    powers: ["Chaos Magic Manifestation", "Reality Distortion", "Telekinesis", "Mind Control"]
  },
  {
    id: "wolverine",
    name: "WOLVERINE",
    alias: "Logan",
    team: "X-MEN",
    category: "xmen",
    powerLevel: 89,
    stats: { strength: 82, speed: 80, energy: 65, combat: 96 },
    color: "#ffcc00",
    glowColor: "rgba(255, 204, 0, 0.6)",
    quote: "I'm the best there is at what I do.",
    sfx: "claw",
    bio: "Mutant with a mutant healing factor, enhanced animalistic senses, and a skeleton bonded with unbreakable Adamantium, complete with retractable razor claws.",
    powers: ["Adamantium Claws", "Accelerated Healing Factor", "Berserker Rage", "Heightened Senses"]
  },
  {
    id: "thanos",
    name: "THANOS",
    alias: "The Mad Titan",
    team: "VILLAINS",
    category: "villains",
    powerLevel: 99,
    stats: { strength: 99, speed: 75, energy: 98, combat: 95 },
    color: "#aa00ff",
    glowColor: "rgba(170, 0, 255, 0.6)",
    quote: "I am inevitable.",
    sfx: "snap",
    bio: "A warlord from Titan obsessed with universal balance. Armed with the Infinity Gauntlet, Thanos holds cosmic authority capable of erasing half of all living creatures.",
    powers: ["Infinity Gauntlet Mastery", "Titan Invulnerability", "Cosmic Energy Projection", "Warlord Tactician"]
  },
  {
    id: "black-panther",
    name: "BLACK PANTHER",
    alias: "T'Challa",
    team: "AVENGERS",
    category: "avengers",
    powerLevel: 87,
    stats: { strength: 75, speed: 88, energy: 75, combat: 96 },
    color: "#9900ff",
    glowColor: "rgba(153, 0, 255, 0.6)",
    quote: "Wakanda Forever!",
    sfx: "shield",
    bio: "King of the advanced nation of Wakanda. T'Challa channels the power of the Panther Goddess Bast and wears a high-tech Vibranium suit that absorbs and redirects kinetic shockwaves.",
    powers: ["Vibranium Kinetic Suit", "Panther Herb Enhancement", "Wakandan High-Tech Weapons", "Master Martial Artist"]
  },
  {
    id: "loki",
    name: "LOKI",
    alias: "God of Mischief",
    team: "VILLAINS",
    category: "villains",
    powerLevel: 92,
    stats: { strength: 70, speed: 75, energy: 90, combat: 85 },
    color: "#00cc66",
    glowColor: "rgba(0, 204, 102, 0.6)",
    quote: "I am burdened with glorious purpose.",
    sfx: "magic",
    bio: "Asgardian Prince and master of sorcery and optical trickery. Loki weaves illusions, duplicates himself, and navigates time threads as guardian of the Multiverse tree.",
    powers: ["Illusion Projection", "Multiversal Magic", "Shape-Shifting", "Duplication Sorcery"]
  },
  {
    id: "deadpool",
    name: "DEADPOOL",
    alias: "Wade Wilson",
    team: "X-MEN",
    category: "xmen",
    powerLevel: 88,
    stats: { strength: 70, speed: 82, energy: 60, combat: 94 },
    color: "#cc0000",
    glowColor: "rgba(204, 0, 0, 0.6)",
    quote: "Maximum Effort!",
    sfx: "claw",
    bio: "The Merc with a Mouth. Possessing an unhinged healing factor that renders him functionally immortal, Deadpool shreds enemies with dual katanas and meta commentary.",
    powers: ["Immortality & Regeneration", "Fourth-Wall Breaking", "Master Swordsmanship", "Unpredictable Combat"]
  },
  {
    id: "storm",
    name: "STORM",
    alias: "Ororo Munroe",
    team: "X-MEN",
    category: "xmen",
    powerLevel: 94,
    stats: { strength: 65, speed: 85, energy: 96, combat: 82 },
    color: "#00e5ff",
    glowColor: "rgba(0, 229, 255, 0.6)",
    quote: "I am a goddess of the elements.",
    sfx: "lightning",
    bio: "Omega-level mutant capable of manipulating weather patterns on a global scale. Storm summons lightning tempests, blizzards, hurricane winds, and flight.",
    powers: ["Atmospheric Weather Control", "Lightning Generation", "Flight & Wind Currents", "Ecological Connection"]
  }
];

// 2. SVG VECTOR ARTWORK FALLBACK GENERATOR
function getHeroSVG(id, mainColor = "#e62429") {
  const svgs = {
    "iron-man": `
      <svg class="hero-svg-avatar" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="85" fill="rgba(230, 36, 41, 0.15)" stroke="${mainColor}" stroke-width="3"/>
        <path d="M60 50 L140 50 L150 110 L130 160 L100 175 L70 160 L50 110 Z" fill="#b30006" stroke="#ffcc00" stroke-width="3"/>
        <polygon points="75,65 125,65 135,115 100,150 65,115" fill="#f3d300"/>
        <polygon points="75,85 92,88 90,95 73,92" fill="#00e5ff" filter="drop-shadow(0 0 8px #00e5ff)"/>
        <polygon points="125,85 108,88 110,95 127,92" fill="#00e5ff" filter="drop-shadow(0 0 8px #00e5ff)"/>
        <circle cx="100" cy="100" r="12" stroke="#00e5ff" stroke-width="3" fill="rgba(0,229,255,0.4)" filter="drop-shadow(0 0 10px #00e5ff)"/>
      </svg>
    `,
    "spider-man": `
      <svg class="hero-svg-avatar" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="85" fill="rgba(230, 36, 41, 0.15)" stroke="${mainColor}" stroke-width="3"/>
        <path d="M55 70 C55 40, 145 40, 145 70 C145 130, 130 165, 100 175 C70 165, 55 130, 55 70 Z" fill="#cc000d" stroke="#111" stroke-width="3"/>
        <path d="M100 45 L100 175 M55 70 L145 70 M65 110 L135 110 M75 145 L125 145" stroke="#111" stroke-width="1.5" opacity="0.6"/>
        <path d="M65 80 C85 80, 92 100, 92 110 C75 115, 60 100, 65 80 Z" fill="#ffffff" stroke="#111" stroke-width="5" filter="drop-shadow(0 0 6px #fff)"/>
        <path d="M135 80 C115 80, 108 100, 108 110 C125 115, 140 100, 135 80 Z" fill="#ffffff" stroke="#111" stroke-width="5" filter="drop-shadow(0 0 6px #fff)"/>
      </svg>
    `
  };

  return svgs[id] || svgs["iron-man"];
}

// 3. AUDIO ENGINE (Web Audio API Synthesizer - 100% Procedural Sound FX)
class AudioFXEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  play(type) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    if (type === 'repulsor') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, t);
      osc.frequency.exponentialRampToValueAtTime(880, t + 0.3);
      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.35);
      osc.start(t);
      osc.stop(t + 0.35);
    } else if (type === 'lightning') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(80, t);
      osc.frequency.exponentialRampToValueAtTime(30, t + 0.5);
      gain.gain.setValueAtTime(0.4, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.5);
      osc.start(t);
      osc.stop(t + 0.5);
    } else if (type === 'magic') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, t);
      osc.frequency.exponentialRampToValueAtTime(1046.50, t + 0.4);
      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.4);
      osc.start(t);
      osc.stop(t + 0.4);
    } else if (type === 'shield') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, t);
      osc.frequency.exponentialRampToValueAtTime(220, t + 0.25);
      gain.gain.setValueAtTime(0.3, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.3);
      osc.start(t);
      osc.stop(t + 0.3);
    } else if (type === 'claw') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1200, t);
      osc.frequency.exponentialRampToValueAtTime(300, t + 0.2);
      gain.gain.setValueAtTime(0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.2);
      osc.start(t);
      osc.stop(t + 0.2);
    } else if (type === 'snap') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(120, t);
      osc.frequency.exponentialRampToValueAtTime(20, t + 0.6);
      gain.gain.setValueAtTime(0.5, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.6);
      osc.start(t);
      osc.stop(t + 0.6);
    }
  }
}

const audioEngine = new AudioFXEngine();

// 4. NAVBAR ACTIVE SCROLL & CLICK HIGHLIGHT ENGINE (FIXED BUG)
function setupNavigationHighlight() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  // Click Handler for navbar links
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      const targetId = link.getAttribute("href");
      if (targetId === "#anthem") {
        playMarvelAnthem();
      }
    });
  });

  // Scroll Observer for updating active link automatically as user scrolls
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));
}

// 5. MARVEL ANTHEM PLAYER ENGINE
function setupMarvelAnthemPlayer() {
  const audio = document.getElementById("marvel-anthem-audio");
  const playBtn = document.getElementById("anthem-play-btn");
  const playIcon = document.getElementById("anthem-play-icon");
  const stopBtn = document.getElementById("anthem-stop-btn");
  const volumeSlider = document.getElementById("anthem-volume");
  const disc = document.getElementById("anthem-disc");
  const playerCard = document.getElementById("anthem-player-card");
  const currentTimeEl = document.getElementById("anthem-current-time");
  const durationEl = document.getElementById("anthem-duration");
  const progressBar = document.getElementById("anthem-progress-bar");
  const progressFill = document.getElementById("anthem-progress-fill");

  if (!audio) return;

  function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  window.playMarvelAnthem = function() {
    audio.play().then(() => {
      playIcon.innerText = "❚❚";
      disc.classList.add("playing");
      if (playerCard) playerCard.classList.add("playing");
    }).catch(err => console.log("Audio play error:", err));
  };

  function pauseMarvelAnthem() {
    audio.pause();
    playIcon.innerText = "▶";
    disc.classList.remove("playing");
    if (playerCard) playerCard.classList.remove("playing");
  }

  function stopMarvelAnthem() {
    audio.pause();
    audio.currentTime = 0;
    playIcon.innerText = "▶";
    disc.classList.remove("playing");
    if (playerCard) playerCard.classList.remove("playing");
    progressFill.style.width = "0%";
    currentTimeEl.innerText = "0:00";
  }

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        window.playMarvelAnthem();
      } else {
        pauseMarvelAnthem();
      }
    });
  }

  if (stopBtn) {
    stopBtn.addEventListener("click", stopMarvelAnthem);
  }

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      audio.volume = parseFloat(e.target.value);
    });
  }

  if (audio) {
    audio.addEventListener("timeupdate", () => {
      if (audio.duration) {
        const pct = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = `${pct}%`;
        currentTimeEl.innerText = formatTime(audio.currentTime);
        durationEl.innerText = formatTime(audio.duration);
      }
    });

    audio.addEventListener("loadedmetadata", () => {
      durationEl.innerText = formatTime(audio.duration);
    });

    audio.addEventListener("ended", () => {
      stopMarvelAnthem();
    });
  }

  if (progressBar) {
    progressBar.addEventListener("click", (e) => {
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = clickX / rect.width;
      if (audio.duration) {
        audio.currentTime = pct * audio.duration;
      }
    });
  }
}

// 6. HERO SECTION 3D CARD SHOWCASE
let currentShowcaseIdx = 0;

function updateShowcaseCard(index) {
  const hero = MARVEL_DATABASE[index];
  if (!hero) return;

  const card = document.getElementById("hero-3d-card");
  const glow = document.getElementById("showcase-glow");
  const team = document.getElementById("showcase-team");
  const avatar = document.getElementById("showcase-avatar");
  const name = document.getElementById("showcase-name");
  const title = document.getElementById("showcase-title");
  const pbar = document.getElementById("showcase-pbar");

  if (card && name) {
    gsap.to(card, {
      rotateY: 15,
      opacity: 0.5,
      duration: 0.2,
      onComplete: () => {
        name.innerText = hero.name;
        title.innerText = `${hero.alias.toUpperCase()} • ${hero.team}`;
        team.innerText = hero.team;
        avatar.innerHTML = `<img class="showcase-img" src="images/${hero.id}.jpg" alt="${hero.name}" onerror="this.onerror=null; this.parentElement.innerHTML=getHeroSVG('${hero.id}', '${hero.color}');" />`;
        pbar.style.width = `${hero.powerLevel}%`;
        glow.style.background = `radial-gradient(circle at center, ${hero.glowColor} 0%, transparent 60%)`;
        card.style.borderColor = hero.color;
        
        gsap.to(card, { rotateY: 0, opacity: 1, duration: 0.3 });
      }
    });
  }
}

// 7. ROSTER GRID & RENDER ENGINE
function renderRosterGrid(items) {
  const grid = document.getElementById("roster-grid");
  if (!grid) return;
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted); font-family: var(--font-tech);">NO HEROES FOUND IN THIS TIMELINE.</div>`;
    return;
  }

  items.forEach((hero, i) => {
    const card = document.createElement("div");
    card.className = "hero-card";
    card.dataset.id = hero.id;
    card.style.setProperty("--card-color", hero.color);
    card.style.setProperty("--card-glow", hero.glowColor);

    card.innerHTML = `
      <div class="hero-card-badge">${hero.team}</div>
      <div class="hero-card-img-wrap">
        <img class="hero-card-img" src="images/${hero.id}.jpg" alt="${hero.name}" onerror="this.onerror=null; this.parentElement.innerHTML=getHeroSVG('${hero.id}', '${hero.color}');" />
      </div>
      <div class="hero-card-content">
        <div>
          <h3 class="hero-card-name">${hero.name}</h3>
          <div class="hero-card-alias">${hero.alias}</div>
        </div>
        
        <div class="hero-card-stats">
          <div class="mini-stat">
            <span class="mini-label">POWER</span>
            <span class="mini-val">${hero.powerLevel}</span>
          </div>
          <div class="mini-stat">
            <span class="mini-label">COMBAT</span>
            <span class="mini-val">${hero.stats.combat}</span>
          </div>
        </div>

        <div class="hero-card-actions">
          <button class="btn-card-details" onclick="openHeroModal('${hero.id}')">VIEW BIO</button>
          <button class="btn-card-sfx" onclick="audioEngine.play('${hero.sfx}')" title="Play Power SFX">⚡</button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Smooth animation that clears inline opacity props so cards remain 100% visible
  gsap.fromTo(".hero-card",
    { y: 30, opacity: 0, scale: 0.96 },
    { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: "power2.out", clearProps: "opacity,transform" }
  );
}

// 8. FILTER & SEARCH HANDLERS
function setupRosterFilters() {
  const searchInput = document.getElementById("character-search");
  const clearBtn = document.getElementById("clear-search");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const sortSelect = document.getElementById("sort-select");

  let currentCategory = "all";
  let currentSearch = "";
  let currentSort = "default";

  function applyFilters() {
    let filtered = MARVEL_DATABASE.filter(hero => {
      const matchCat = currentCategory === "all" || hero.category === currentCategory;
      const matchSearch = hero.name.toLowerCase().includes(currentSearch) ||
                          hero.alias.toLowerCase().includes(currentSearch) ||
                          hero.powers.some(p => p.toLowerCase().includes(currentSearch));
      return matchCat && matchSearch;
    });

    if (currentSort === "power-high") {
      filtered.sort((a, b) => b.powerLevel - a.powerLevel);
    } else if (currentSort === "power-low") {
      filtered.sort((a, b) => a.powerLevel - b.powerLevel);
    } else if (currentSort === "name-asc") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    renderRosterGrid(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      clearBtn.style.display = currentSearch ? "block" : "none";
      applyFilters();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentSearch = "";
      clearBtn.style.display = "none";
      applyFilters();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.filter;
      applyFilters();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      applyFilters();
    });
  }
}

// 9. BATTLE ARENA SIMULATOR ENGINE
function setupBattleArena() {
  const select1 = document.getElementById("fighter1-select");
  const select2 = document.getElementById("fighter2-select");
  const btnSimulate = document.getElementById("btn-simulate-battle");
  const canvas = document.getElementById("battle-clash-canvas");
  const box1 = document.getElementById("fighter1-box");
  const box2 = document.getElementById("fighter2-box");

  if (!select1 || !select2) return;

  MARVEL_DATABASE.forEach(hero => {
    const opt1 = document.createElement("option");
    opt1.value = hero.id;
    opt1.innerText = hero.name;
    select1.appendChild(opt1);

    const opt2 = document.createElement("option");
    opt2.value = hero.id;
    opt2.innerText = hero.name;
    select2.appendChild(opt2);
  });

  select1.value = "iron-man";
  select2.value = "thanos";

  function resetFighterStates() {
    [box1, box2].forEach(b => {
      if (b) {
        b.classList.remove("winner", "defeated");
      }
    });

    const hp1Fill = document.getElementById("f1-hp-fill");
    const hp2Fill = document.getElementById("f2-hp-fill");
    const hp1Val = document.getElementById("f1-hp-val");
    const hp2Val = document.getElementById("f2-hp-val");

    if (hp1Fill) { hp1Fill.style.width = "100%"; hp1Fill.style.background = "linear-gradient(90deg, #00ff66, #ffcc00)"; }
    if (hp2Fill) { hp2Fill.style.width = "100%"; hp2Fill.style.background = "linear-gradient(90deg, #00ff66, #ffcc00)"; }
    if (hp1Val) hp1Val.innerText = "100 / 100 HP";
    if (hp2Val) hp2Val.innerText = "100 / 100 HP";
  }

  function updateFighter(cornerNum, heroId) {
    const hero = MARVEL_DATABASE.find(h => h.id === heroId);
    if (!hero) return;

    resetFighterStates();

    document.getElementById(`fighter${cornerNum}-name`).innerText = hero.name;
    const teamBadge = document.getElementById(`fighter${cornerNum}-team`);
    teamBadge.innerText = hero.team;
    teamBadge.className = `badge-team ${hero.category === 'villains' ? 'villain' : ''}`;
    
    document.getElementById(`fighter${cornerNum}-avatar`).innerHTML = `<img class="fighter-img" src="images/${hero.id}.jpg" alt="${hero.name}" onerror="this.onerror=null; this.parentElement.innerHTML=getHeroSVG('${hero.id}', '${hero.color}');" />`;

    document.getElementById(`f${cornerNum}-stat-str`).style.width = `${hero.stats.strength}%`;
    document.getElementById(`f${cornerNum}-stat-spd`).style.width = `${hero.stats.speed}%`;
    document.getElementById(`f${cornerNum}-stat-nrg`).style.width = `${hero.stats.energy}%`;
    document.getElementById(`f${cornerNum}-stat-cbt`).style.width = `${hero.stats.combat}%`;
  }

  updateFighter(1, "iron-man");
  updateFighter(2, "thanos");

  select1.addEventListener("change", (e) => updateFighter(1, e.target.value));
  select2.addEventListener("change", (e) => updateFighter(2, e.target.value));

  // Canvas Beam Clash Particle Animation
  let animationId = null;
  function runBeamClashCanvas(f1Color, f2Color, durationMs) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    canvas.width = (rect.width && rect.width > 0) ? rect.width : (canvas.parentElement ? canvas.parentElement.clientWidth : 1000);
    canvas.height = (rect.height && rect.height > 0) ? rect.height : 400;

    const startTime = performance.now();

    function draw() {
      const now = performance.now();
      const elapsed = now - startTime;
      if (elapsed > durationMs) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const midX = canvas.width / 2 + (Math.sin(elapsed / 50) * 20);
      const midY = canvas.height / 2;

      // Beam 1 (Left to Center)
      const grad1 = ctx.createLinearGradient(0, midY, midX, midY);
      grad1.addColorStop(0, f1Color);
      grad1.addColorStop(1, "#ffffff");

      ctx.beginPath();
      ctx.moveTo(0, midY);
      ctx.lineTo(midX, midY);
      ctx.lineWidth = 14 + Math.sin(elapsed / 40) * 4;
      ctx.strokeStyle = grad1;
      ctx.shadowBlur = 25;
      ctx.shadowColor = f1Color;
      ctx.stroke();

      // Beam 2 (Right to Center)
      const grad2 = ctx.createLinearGradient(canvas.width, midY, midX, midY);
      grad2.addColorStop(0, f2Color);
      grad2.addColorStop(1, "#ffffff");

      ctx.beginPath();
      ctx.moveTo(canvas.width, midY);
      ctx.lineTo(midX, midY);
      ctx.lineWidth = 14 + Math.cos(elapsed / 40) * 4;
      ctx.strokeStyle = grad2;
      ctx.shadowBlur = 25;
      ctx.shadowColor = f2Color;
      ctx.stroke();

      // Center Collision Spark Burst
      ctx.beginPath();
      ctx.arc(midX, midY, 20 + Math.random() * 15, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.shadowBlur = 35;
      ctx.shadowColor = "#ffcc00";
      ctx.fill();

      // Sparks
      for (let i = 0; i < 6; i++) {
        const angle = Math.random() * Math.PI * 2;
        const len = 30 + Math.random() * 40;
        ctx.beginPath();
        ctx.moveTo(midX, midY);
        ctx.lineTo(midX + Math.cos(angle) * len, midY + Math.sin(angle) * len);
        ctx.strokeStyle = Math.random() > 0.5 ? f1Color : f2Color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    }

    if (animationId) cancelAnimationFrame(animationId);
    draw();
  }

  if (btnSimulate) {
    btnSimulate.addEventListener("click", () => {
      const f1 = MARVEL_DATABASE.find(h => h.id === select1.value);
      const f2 = MARVEL_DATABASE.find(h => h.id === select2.value);
      const log = document.getElementById("battle-log");

      if (!f1 || !f2) return;

      resetFighterStates();
      audioEngine.play("lightning");

      gsap.fromTo(".vs-circle", { scale: 1 }, { scale: 1.4, duration: 0.3, yoyo: true, repeat: 3 });

      runBeamClashCanvas(f1.color, f2.color, 2600);

      log.innerHTML = `<div class="log-message system">⚡ CLASH LAUNCHED: ${f1.name} VS ${f2.name}</div>`;

      // Round 1
      setTimeout(() => {
        audioEngine.play(f1.sfx);
        const dmg1 = Math.floor(25 + (f1.stats.energy * 0.35) + (Math.random() * 10));
        const f2HpLeft = Math.max(15, 100 - dmg1);

        const hp2Fill = document.getElementById("f2-hp-fill");
        const hp2Val = document.getElementById("f2-hp-val");
        if (hp2Fill) {
          hp2Fill.style.width = `${f2HpLeft}%`;
          hp2Fill.style.background = f2HpLeft < 40 ? "linear-gradient(90deg, #ff0044, #ff6600)" : "linear-gradient(90deg, #ffcc00, #ff6600)";
        }
        if (hp2Val) hp2Val.innerText = `${f2HpLeft} / 100 HP`;

        const logItem1 = document.createElement("div");
        logItem1.className = "log-message hit";
        logItem1.innerText = `[Round 1] ${f1.name} strikes with ${f1.powers[0]}! Dealt ${dmg1} DMG to ${f2.name}.`;
        log.appendChild(logItem1);
        log.scrollTop = log.scrollHeight;
      }, 700);

      // Round 2
      setTimeout(() => {
        audioEngine.play(f2.sfx);
        const dmg2 = Math.floor(25 + (f2.stats.strength * 0.35) + (Math.random() * 10));
        const f1HpLeft = Math.max(15, 100 - dmg2);

        const hp1Fill = document.getElementById("f1-hp-fill");
        const hp1Val = document.getElementById("f1-hp-val");
        if (hp1Fill) {
          hp1Fill.style.width = `${f1HpLeft}%`;
          hp1Fill.style.background = f1HpLeft < 40 ? "linear-gradient(90deg, #ff0044, #ff6600)" : "linear-gradient(90deg, #ffcc00, #ff6600)";
        }
        if (hp1Val) hp1Val.innerText = `${f1HpLeft} / 100 HP`;

        const logItem2 = document.createElement("div");
        logItem2.className = "log-message hit";
        logItem2.innerText = `[Round 2] ${f2.name} counters with ${f2.powers[0]}! Dealt ${dmg2} DMG to ${f1.name}.`;
        log.appendChild(logItem2);
        log.scrollTop = log.scrollHeight;
      }, 1500);

      // Round 3 (Outcome & Knockout)
      setTimeout(() => {
        const score1 = (f1.stats.strength * 1.2) + (f1.stats.speed * 1.0) + (f1.stats.energy * 1.5) + (f1.stats.combat * 1.3) + (Math.random() * 20);
        const score2 = (f2.stats.strength * 1.2) + (f2.stats.speed * 1.0) + (f2.stats.energy * 1.5) + (f2.stats.combat * 1.3) + (Math.random() * 20);
        
        const isF1Winner = score1 >= score2;
        const winner = isF1Winner ? f1 : f2;
        const loser = isF1Winner ? f2 : f1;

        const winnerBox = isF1Winner ? box1 : box2;
        const loserBox = isF1Winner ? box2 : box1;

        if (winnerBox) winnerBox.classList.add("winner");
        if (loserBox) loserBox.classList.add("defeated");

        const loserHpFill = document.getElementById(`f${isF1Winner ? 2 : 1}-hp-fill`);
        const loserHpVal = document.getElementById(`f${isF1Winner ? 2 : 1}-hp-val`);
        if (loserHpFill) {
          loserHpFill.style.width = "0%";
          loserHpFill.style.background = "#ff0044";
        }
        if (loserHpVal) loserHpVal.innerText = "0 / 100 HP (KNOCKOUT)";

        audioEngine.play("repulsor");

        const logItemWin = document.createElement("div");
        logItemWin.className = "log-message winner";
        logItemWin.innerText = `🏆 OUTCOME: ${winner.name} OVERPOWERS ${loser.name} FOR THE KNOCKOUT! "${winner.quote}"`;
        log.appendChild(logItemWin);
        log.scrollTop = log.scrollHeight;
      }, 2400);
    });
  }
}

// 10. INFINITY STONE NEXUS THEME ENGINE
function setupInfinityStones() {
  const stones = document.querySelectorAll(".stone-card");
  
  stones.forEach(stone => {
    const btn = stone.querySelector(".btn-stone-activate");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const color = stone.dataset.color;
      audioEngine.play("magic");

      document.documentElement.style.setProperty("--primary-accent", color);
      document.documentElement.style.setProperty("--accent-glow", `${color}99`);

      if (window.particleEngine) {
        window.particleEngine.setParticleColor(color);
      }

      gsap.fromTo("body", { opacity: 0.8 }, { opacity: 1, duration: 0.5 });
      btn.innerText = "ACTIVE ENERGY";
      
      stones.forEach(s => {
        if (s !== stone) s.querySelector(".btn-stone-activate").innerText = "HARNESS ENERGY";
      });
    });
  });
}

// 11. HERO MODAL ENGINE
function openHeroModal(heroId) {
  const hero = MARVEL_DATABASE.find(h => h.id === heroId);
  if (!hero) return;

  const modal = document.getElementById("detail-modal");
  const modalBody = document.getElementById("modal-body-content");
  
  audioEngine.play(hero.sfx);

  modalBody.innerHTML = `
    <div class="modal-left">
      <div class="modal-avatar-frame" style="border-color: ${hero.color}; box-shadow: 0 0 30px ${hero.glowColor}">
        <img class="modal-avatar-img" src="images/${hero.id}.jpg" alt="${hero.name}" onerror="this.onerror=null; this.parentElement.innerHTML=getHeroSVG('${hero.id}', '${hero.color}');" />
      </div>
      <button class="btn btn-primary" onclick="audioEngine.play('${hero.sfx}')">⚡ PLAY POWER SOUND</button>
    </div>

    <div class="modal-right">
      <span class="badge-team" style="border-color: ${hero.color}; color: ${hero.color}">${hero.team}</span>
      <h2>${hero.name}</h2>
      <div class="modal-alias">${hero.alias.toUpperCase()} • "${hero.quote}"</div>
      
      <p class="modal-bio">${hero.bio}</p>

      <h4 style="font-family: var(--font-tech); font-size: 0.8rem; margin-bottom: 0.6rem; color: var(--marvel-gold);">KEY ABILITIES & POWERS</h4>
      <div class="modal-powers-list">
        ${hero.powers.map(p => `<span class="power-tag">${p}</span>`).join('')}
      </div>

      <h4 style="font-family: var(--font-tech); font-size: 0.8rem; margin-bottom: 0.6rem; color: var(--marvel-gold);">POWER MATRIX RATING</h4>
      <div class="stat-bars">
        <div class="stat-row"><span class="stat-name">STRENGTH</span><div class="bar-bg"><div class="bar-fill" style="width: ${hero.stats.strength}%"></div></div></div>
        <div class="stat-row"><span class="stat-name">SPEED</span><div class="bar-bg"><div class="bar-fill" style="width: ${hero.stats.speed}%"></div></div></div>
        <div class="stat-row"><span class="stat-name">ENERGY</span><div class="bar-bg"><div class="bar-fill" style="width: ${hero.stats.energy}%"></div></div></div>
        <div class="stat-row"><span class="stat-name">COMBAT</span><div class="bar-bg"><div class="bar-fill" style="width: ${hero.stats.combat}%"></div></div></div>
      </div>
    </div>
  `;

  modal.classList.add("active");
}

function setupModalClose() {
  const modal = document.getElementById("detail-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
}

// 12. CANVAS BACKGROUND PARTICLE SYSTEM
class ParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.color = "rgba(230, 36, 41, ";
    this.resize();
    this.init();
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  setParticleColor(hexColor) {
    let r = parseInt(hexColor.slice(1, 3), 16) || 230;
    let g = parseInt(hexColor.slice(3, 5), 16) || 36;
    let b = parseInt(hexColor.slice(5, 7), 16) || 41;
    this.color = `rgba(${r}, ${g}, ${b}, `;
  }

  init() {
    this.particles = [];
    const count = Math.min(Math.floor(window.innerWidth / 15), 80);
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 2.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        alpha: Math.random() * 0.6 + 0.2
      });
    }
    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = this.color + p.alpha + ")";
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = this.color + "0.8)";
      this.ctx.fill();
    });

    requestAnimationFrame(() => this.animate());
  }
}

// 13. THANOS SNAP DISINTEGRATION EASTER EGG
function setupThanosSnap() {
  const snapBtn = document.getElementById("snap-all-btn");
  if (!snapBtn) return;

  snapBtn.addEventListener("click", () => {
    audioEngine.play("snap");
    
    const cards = document.querySelectorAll(".hero-card");
    cards.forEach(card => {
      if (Math.random() > 0.5) {
        gsap.to(card, {
          opacity: 0,
          scale: 0.8,
          filter: "blur(10px)",
          duration: 1.2,
          ease: "power2.out"
        });
      }
    });

    setTimeout(() => {
      cards.forEach(card => {
        gsap.to(card, { opacity: 1, scale: 1, filter: "none", duration: 0.8, clearProps: "opacity,scale,filter,transform" });
      });
    }, 3500);
  });
}

// 14. INITIALIZATION ON DOM READY
document.addEventListener("DOMContentLoaded", () => {
  window.particleEngine = new ParticleEngine("hero-canvas");

  renderRosterGrid(MARVEL_DATABASE);
  updateShowcaseCard(0);

  const prevBtn = document.getElementById("showcase-prev-btn");
  const nextBtn = document.getElementById("showcase-next-btn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentShowcaseIdx = (currentShowcaseIdx - 1 + MARVEL_DATABASE.length) % MARVEL_DATABASE.length;
      updateShowcaseCard(currentShowcaseIdx);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentShowcaseIdx = (currentShowcaseIdx + 1) % MARVEL_DATABASE.length;
      updateShowcaseCard(currentShowcaseIdx);
    });
  }

  const audioToggle = document.getElementById("audio-toggle");
  const audioStatusText = document.getElementById("audio-status-text");
  if (audioToggle) {
    audioToggle.addEventListener("click", () => {
      audioEngine.enabled = !audioEngine.enabled;
      audioStatusText.innerText = audioEngine.enabled ? "SFX ON" : "SFX OFF";
      audioToggle.style.opacity = audioEngine.enabled ? "1" : "0.5";
    });
  }

  setupNavigationHighlight();
  setupMarvelAnthemPlayer();
  setupRosterFilters();
  setupBattleArena();
  setupInfinityStones();
  setupModalClose();
  setupThanosSnap();

  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (nav) {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    }
  });

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.timeline-node').forEach(node => {
      gsap.from(node, {
        scrollTrigger: {
          trigger: node,
          start: "top 80%"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });
  }
});
