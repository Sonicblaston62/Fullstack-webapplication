const items = [
    {developer: "Valve", publisher: "Valve", name: "Portal", cover: "images/portal.jpg", genre: "Puzzle, FPS", releaseDate: "Oct 10, 2007", description: `Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay. The game is designed to change the way players approach, manipulate, and surmise the possibilities in a given environment; similar to how Half-Life® 2's Gravity Gun innovated new ways to leverage an object in any given situation. Players must solve physical puzzles and challenges by opening portals to maneuvering objects, and themselves, through space.` },
    {developer: "Valve", publisher: "Valve", name: "Portal 2", cover: "images/portal2.jpg", genre: "Puzzle, FPS", releaseDate: "Apr 19, 2011", description: `Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following. The single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs and be reunited with GLaDOS, the occasionally murderous computer companion who guided them through the original game. The game’s two-player cooperative mode features its own entirely separate campaign with a unique story, test chambers, and two new player characters. This new mode forces players to reconsider everything they thought they knew about portals. Success will require them to not just act cooperatively, but to think cooperatively.` },
    {developer: "Valve", publisher: "Valve", name: "Half Life", cover: "images/Half_Life.jpg", genre: "FPS", releaseDate: "Nov 19, 1998", description: "Classic FPS" },
    {developer: "Valve", publisher: "Valve", name: "Half Life 2", cover: "images/half_life2.jpg", genre: "FPS", releaseDate: "Nov 16, 2004", description: "" },
    {developer: "Valve", publisher: "Valve", name: "Team Fortress 2", cover: "images/team_fortress.jpg", genre: "FPS", releaseDate: "Oct 10, 2007", description: "" },
    {developer: "Westwood Studios", publisher: "Electronic Arts", name: "Command & Conquer - Red Alert", cover: "images/redalert.jpg", genre: "Nov 22 1996", releaseDate: "Nov 22, 1996", description: "" },
    {developer: "", publisher: "", name: "Stardew Valley", cover: "images/stardew_valley.jpg", genre: "RPG, Simulation", releaseDate: "Feb 26, 2016", description: "" },
    {developer: "", publisher: "", name: "Trailmakers", cover: "images/trailmakers.jpg", genre: "Adventure, Simulation", releaseDate: "Jan 31, 2020", description: "" },
    {developer: "", publisher: "", name: "The Sims 4", cover: "images/sims4.jpg", genre: "Simulation", releaseDate: "Sep 2, 2014", description: "" },
    {developer: "", publisher: "", name: "Trackmania", cover: "images/trackmania.jpg", genre: "Racing", releaseDate: "Jul 1, 2020", description: "" },
    {developer: "", publisher: "", name: "Sonic Mania", cover: "images/sonic_mania.jpg", genre: "Platformer", releaseDate: "Aug 15, 2017", description: "" },
    {developer: "", publisher: "", name: "Worms Armageddon", cover: "images/worms_armageddon.jpg", genre: "Strategy", releaseDate: "Nov 19, 1999", description: "" },
    {developer: "", publisher: "", name: "Sonic Racing: Crossworlds", cover: "images/sonic_crossworlds.jpg", genre: "Racing", releaseDate: "sep 25 2025", description: "" },
];

const grid = document.getElementById("grid");
const detailsDiv = document.getElementById("details");


if (grid) {
    items.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `<img src="${item.cover}" alt="${item.name}"><div class="item-title-overlay">${item.name}</div>`;
        div.onclick = () => window.location.href = `details.html?game=${index}`;
        grid.appendChild(div);
    });
}

if (detailsDiv) {
    const gameIndex = new URLSearchParams(window.location.search).get('game');
    const game = items[gameIndex];
    document.getElementById('gameImage').src = game.cover;
    document.getElementById('gameName').textContent = game.name;
    document.getElementById('gamePublisher').textContent = "Publisher: " + (game.publisher || 'N/A'); // Added label and default
    document.getElementById('gameDeveloper').textContent = "Developer: " + (game.developer || 'N/A'); // Added label and default
    document.getElementById('gameGenre').textContent = "Genre: " + (game.genre || 'N/A'); // New
    document.getElementById('gameReleaseDate').textContent = "Released  : " + (game.releaseDate || 'N/A'); // New
    document.getElementById('gameDescription').textContent = game.description;

}