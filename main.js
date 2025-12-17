const items = [
    {developer: "Valve", publisher: "Valve", name: "Portal", cover: "images/portal.jpg", description: "Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay. The game is designed to change the way players approach, manipulate, and surmise the possibilities in a given environment; similar to how Half-Life® 2's Gravity Gun innovated new ways to leverage an object in any given situation. Players must solve physical puzzles and challenges by opening portals to maneuvering objects, and themselves, through space." },
    {developer: "Valve", publisher: "Valve", name: "Portal 2", cover: "images/portal2.jpg", description: "Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following. The single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs and be reunited with GLaDOS, the occasionally murderous computer companion who guided them through the original game. The game’s two-player cooperative mode features its own entirely separate campaign with a unique story, test chambers, and two new player characters. This new mode forces players to reconsider everything they thought they knew about portals. Success will require them to not just act cooperatively, but to think cooperatively." },
    {developer: "Valve", publisher: "Valve", name: "Half Life", cover: "images/Half_Life.jpg", description: "Named Game of the Year by over 50 publications, Valve's debut title blends action and adventure with award-winning technology to create a frighteningly realistic world where players must think to survive. Also includes an exciting multiplayer mode that allows you to play against friends and enemies around the world." },
    {developer: "Valve", publisher: "Valve", name: "Half Life 2", cover: "images/half_life2.jpg", description: "" },
    {developer: "Valve", publisher: "Valve", name: "Team Fortress 2", cover: "images/team_fortress.jpg", description: "" },
    {developer: "Westwood Studios", publisher: "Electronic Arts", name: "Command & Conquer - Red Alert", cover: "images/redalert.jpg", description: "" },
    {developer: "", publisher: "", name: "Stardew Valley", cover: "images/stardew_valley.jpg", description: "" },
    {developer: "", publisher: "", name: "Trailmakers", cover: "images/trailmakers.jpg", description: "" },
    {developer: "", publisher: "", name: "The Sims 4", cover: "images/sims4.jpg", description: "" },
    {developer: "", publisher: "", name: "Trackmania", cover: "images/trackmania.jpg", description: "" },
    {developer: "", publisher: "", name: "Sonic Mania", cover: "images/sonic_mania.jpg", description: "" },
    {developer: "", publisher: "", name: "Worms Armageddon", cover: "images/worms_armageddon.jpg", description: "" },
    {developer: "", publisher: "", name: "Sonic Racing: Crossworlds", cover: "images/sonic_crossworlds.jpg", description: "" },

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
    document.getElementById('gamePublisher').textContent = "Published:  " + game.publisher;
    document.getElementById('gameDeveloper').textContent = "Developed:  " + game.developer;
    document.getElementById('gameName').textContent = game.name;
    document.getElementById('gameDescription').textContent = game.description;
}