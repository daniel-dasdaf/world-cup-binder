const binder = [
    { code: "FWC", team: "FWC", stickers: Array.from({length: 12}, (_, i) => ({ id: String(i+1), owned: false })) },

    { code: "MEX", team: "Mexico", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "RSA", team: "South Africa", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "KOR", team: "Korea Republic", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "CZE", team: "Czechia", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },

    { code: "CAN", team: "Canada", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "BIH", team: "Bosnia and Herzegovina", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "QAT", team: "Qatar", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "SUI", team: "Switzerland", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },

    { code: "BRA", team: "Brazil", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "MAR", team: "Morocco", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "HAI", team: "Haiti", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "SCO", team: "Scotland", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    
    { code: "USA", team: "United States", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "PAR", team: "Paraguay", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "AUS", team: "Australia", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "TUR", team: "Türkiye", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    
    { code: "GER", team: "Germany", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "CUW", team: "Curação", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "CIV", team: "Côte d'Ivoire", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "ECU", team: "Ecuador", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    
    { code: "NED", team: "Netherlands", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "JPN", team: "Japan", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "SWE", team: "Sweden", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "TUN", team: "Tunisia", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    
    { code: "BEL", team: "Belgium", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "EGY", team: "Egypt", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "IRN", team: "Iran", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "NZL", team: "New Zealand", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },

    { code: "ESP", team: "Spain", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "CPV", team: "Cape Verde", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "KSA", team: "Saudi Arabia", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "URU", team: "Uruguay", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },

    { code: "FRA", team: "France", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "SEN", team: "Senegal", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "IRQ", team: "Iraq", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "NOR", team: "Norway", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },

    
    { code: "ARG", team: "Argentina", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "ALG", team: "Algeria", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "AUT", team: "Austria", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "JOR", team: "Jordan", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    
    { code: "POR", team: "Portugal", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "COD", team: "DR Congo", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "UZB", team: "Uzbekistan", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "COL", team: "Colombia", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    
    { code: "ENG", team: "England", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "CRO", team: "Croatia", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "GHA", team: "Ghana", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
    { code: "PAN", team: "Panama", stickers: Array.from({length: 20}, (_, i) => ({ id: String(i+1), owned: false })) },
];

let showUnownedOnly = false;
const STORAGE_KEY = "panini_2026_binder";

function loadState() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function buildState(binder) {
  const state = {};

  binder.forEach(team => {
    team.stickers.forEach(sticker => {
      state[`${team.code}${sticker.id}`] = sticker.owned;
    });
  });

  return state;
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function applyState(binder, state) {
  binder.forEach(team => {
    team.stickers.forEach(sticker => {
      const key = `${team.code}${sticker.id}`;
      if (state[key] !== undefined) {
        sticker.owned = state[key];
      }
    });
  });
}

function createCard(text, owned, onClick = () => {}) {
  const div = document.createElement("div");

  div.className = `
    min-w-[80px] h-[50px]
    flex items-center justify-center
    border rounded-md
    text-sm font-bold cursor-pointer
    transition
    flex-1
    ${owned ? "bg-[#2f6e58] text-[white]" : "opacity-40"}
  `;

  div.textContent = text;

  div.addEventListener("click", onClick);

  return div;
}

function findStickerByCode(code) {
  code = code.trim().toUpperCase();

  for (const team of binder) {
    const match = team.stickers.find(s =>
      `${team.code}${s.id}`.toUpperCase() === code
    );

    if (match) {
      return {
        sticker: match,
        team
      };
    }
  }

  return null;
}
function getMissingStickers(binder) {
  const missing = [];

  binder.forEach(team => {
    team.stickers.forEach(sticker => {
      if (!sticker.owned) {
        missing.push({
          code: `${team.code}${sticker.id}`,
          team: team.team
        });
      }
    });
  });

  return missing;
}

function renderBinder() {
    console.log('render')
    app.innerHTML = "";

    binder.forEach(team => {
        const section = document.createElement("div");
        section.className = 'p-[10px]'

        // HEADER
        const header = document.createElement("h2");

        const count = document.createElement("span");

        const updateProgress = () => {
        const owned = team.stickers.filter(s => s.owned).length;
        count.textContent = ` (${owned}/${team.stickers.length})`;
        };

        updateProgress();

        header.className = "text-[20px] font-bold mb-[10px]";
        header.textContent = `${team.team} (${team.code})`;
        header.appendChild(count);

        // GRID
        const grid = document.createElement("div");
        grid.className = "flex flex-wrap gap-[6px]";

        team.stickers.forEach(sticker => {
        const label = sticker.id; // ONLY NUMBER

        const card = createCard(label, sticker.owned, () => {

            sticker.owned = !sticker.owned;
            saveState(buildState(binder));

            // update UI only
            card.classList.toggle("opacity-40");
            card.classList.toggle("border-[#2f6e58]");
            card.classList.toggle("text-[#2f6e58]");

            updateProgress();
        });

        grid.appendChild(card);
        });

        section.appendChild(header);
        section.appendChild(grid);
        app.appendChild(section);
    });
}

const state = loadState();
applyState(binder, state);
renderBinder();