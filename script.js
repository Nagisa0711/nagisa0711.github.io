const sounds = [
  {
    title: "Write",
    category: "Pen",
    file: "./audio/stationery/pen/write.wav"
  },
  {
    title: "Write 2",
    category: "Pen",
    file: "./audio/stationery/pen/write2.wav"
  },
  {
    title: "Pen Clicking",
    category: "Pen",
    file: "./audio/stationery/pen/pen clicking.wav"
  },
  {
    title: "Pen Clicking 2",
    category: "Pen",
    file: "./audio/stationery/pen/pen clicking2.wav"
  },

  {
    title: "Turn the Page",
    category: "Paper",
    file: "./audio/stationery/paper/rurn the page.wav"
  },
  {
    title: "Turn the Page 2",
    category: "Paper",
    file: "./audio/stationery/paper/turn the page2.wav"
  },
  {
    title: "Tear Paper",
    category: "Paper",
    file: "./audio/stationery/paper/tear paper.wav"
  },
  {
    title: "Tear Paper 2",
    category: "Paper",
    file: "./audio/stationery/paper/tear paper2.wav"
  },
  {
    title: "Tear Paper 3",
    category: "Paper",
    file: "./audio/stationery/paper/tear paper3.wav"
  },
  {
    title: "Roll Up the Paper",
    category: "Paper",
    file: "./audio/stationery/paper/role up the paper.wav"
  },

  {
    title: "Diggin for a Pen",
    category: "Other",
    file: "./audio/stationery/other/diggin for a pen.wav"
  },
  {
    title: "Diggin for a Pen 2",
    category: "Other",
    file: "./audio/stationery/other/diggin for a pen2.wav"
  }
];

const library = document.getElementById("soundLibrary");
const searchInput = document.getElementById("searchInput");

function createAudioCard(sound) {
  return `
    <article class="sound-card">
      <h3 class="sound-name">${sound.title}</h3>
      <p class="sound-meta">${sound.category}</p>

      <audio controls preload="none">
        <source src="${sound.file}" type="audio/wav">
        Your browser does not support the audio element.
      </audio>

      <a class="download-button" href="${sound.file}" download>
        Download
      </a>
    </article>
  `;
}

function renderSounds(filterText = "") {
  const keyword = filterText.trim().toLowerCase();

  const filtered = sounds.filter((sound) => {
    return (
      sound.title.toLowerCase().includes(keyword) ||
      sound.category.toLowerCase().includes(keyword) ||
      sound.file.toLowerCase().includes(keyword)
    );
  });

  if (filtered.length === 0) {
    library.innerHTML = `
      <div class="empty-message">
        No sounds found.
      </div>
    `;
    return;
  }

  const categories = ["Pen", "Paper", "Other"];

  library.innerHTML = categories
    .map((category) => {
      const categorySounds = filtered.filter(
        (sound) => sound.category === category
      );

      if (categorySounds.length === 0) return "";

      return `
        <section class="category-section">
          <h2 class="category-title">${category}</h2>
          <div class="sound-grid">
            ${categorySounds.map(createAudioCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

searchInput.addEventListener("input", (e) => {
  renderSounds(e.target.value);
});

renderSounds();
