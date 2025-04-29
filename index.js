const apps = [
  {
    name: "Super Game",
    description: "Exciting action game.",
    category: "Games",
    image: "https://via.placeholder.com/300x150.png?text=Super+Game"
  },
  {
    name: "Photo Editor Pro",
    description: "Edit your photos like a pro.",
    category: "Apps",
    image: "https://via.placeholder.com/300x150.png?text=Photo+Editor+Pro"
  },
  {
    name: "Movie Hub",
    description: "Stream latest movies.",
    category: "Movies",
    image: "https://via.placeholder.com/300x150.png?text=Movie+Hub"
  },
  {
    name: "Book Reader",
    description: "Read millions of books.",
    category: "Books",
    image: "https://via.placeholder.com/300x150.png?text=Book+Reader"
  }
];

function loadApps(filter = "All") {
  const container = document.getElementById("main-content");
  container.innerHTML = "";

  const filteredApps = filter === "All" ? apps : apps.filter(app => app.category === filter);

  filteredApps.forEach(app => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${app.image}" alt="${app.name}" />
      <div class="card-body">
        <h3>${app.name}</h3>
        <p>${app.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function filterCategory(cat) {
  loadApps(cat);
}

document.getElementById("search").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const container = document.getElementById("main-content");
  container.innerHTML = "";

  apps
    .filter(app => app.name.toLowerCase().includes(searchTerm))
    .forEach(app => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${app.image}" alt="${app.name}" />
        <div class="card-body">
          <h3>${app.name}</h3>
          <p>${app.description}</p>
        </div>
      `;
      container.appendChild(card);
    });
});

window.onload = () => loadApps();
