const items = [
  {developer: "Valve", publisher: "Valve", name: "Portal", cover: "images/portal.jpg", genre: "Action", releaseDate: "Oct 10, 2007", description: `Portal™ is a new single player game from Valve. Set in the mysterious Aperture Science Laboratories, Portal has been called one of the most innovative new games on the horizon and will offer gamers hours of unique gameplay. The game is designed to change the way players approach, manipulate, and surmise the possibilities in a given environment; similar to how Half-Life® 2's Gravity Gun innovated new ways to leverage an object in any given situation. Players must solve physical puzzles and challenges by opening portals to maneuvering objects, and themselves, through space.` },
  {developer: "Valve", publisher: "Valve", name: "Portal 2", cover: "images/portal2.jpg", genre: "Action", releaseDate: "Apr 19, 2011", description: `Portal 2 draws from the award-winning formula of innovative gameplay, story, and music that earned the original Portal over 70 industry accolades and created a cult following. The single-player portion of Portal 2 introduces a cast of dynamic new characters, a host of fresh puzzle elements, and a much larger set of devious test chambers. Players will explore never-before-seen areas of the Aperture Science Labs and be reunited with GLaDOS, the occasionally murderous computer companion who guided them through the original game. The game’s two-player cooperative mode features its own entirely separate campaign with a unique story, test chambers, and two new player characters. This new mode forces players to reconsider everything they thought they knew about portals. Success will require them to not just act cooperatively, but to think cooperatively.` },
  {developer: "Valve", publisher: "Valve", name: "Half Life", cover: "images/Half_Life.jpg", genre: "Action", releaseDate: "Nov 19, 1998", description: "Classic FPS" },
  {developer: "Valve", publisher: "Valve", name: "Half Life 2", cover: "images/half_life2.jpg", genre: "Action", releaseDate: "Nov 16, 2004", description: "Reawakened from stasis in the occupied metropolis of City 17, Gordon Freeman joins Alyx Vance to lead a desperate human resistance. Experience the landmark first-person shooter packed with immersive world-building, boundary-pushing physics, and exhilarating combat." },
  {developer: "Valve", publisher: "Valve", name: "Team Fortress 2", cover: "images/team_fortress.jpg", genre: "Free to Play", releaseDate: "Oct 10, 2007", description: "Nine distinct classes provide a broad range of tactical abilities and personalities. Constantly updated with new game modes, maps, equipment and, most importantly, hats!" },
  {developer: "Westwood Studios", publisher: "Electronic Arts", name: "Command & Conquer - Red Alert", cover: "images/redalert.jpg", genre: "Real-time strategy", releaseDate: "Nov 22, 1996", description: "The second game in the Command & Conquer series, Red Alert lets players command Allied or Soviet forces in an alternate-history conflict. Known for its fast-paced RTS gameplay and iconic FMV cutscenes." },
  {developer: "ConcernedApe", publisher: "ConcernedApe", name: "Stardew Valley", cover: "images/stardew_valley.jpg", genre: "Simulation", releaseDate: "Feb 26, 2016", description: "You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?" },
  {developer: "Flashbulb Games", publisher: "Flashbulb Games", name: "Trailmakers", cover: "images/trailmakers.jpg", genre: "Adventure", releaseDate: "Sep 18, 2019", description: "Build the ultimate vehicle and explore a vast open world filled with challenges and adventure. Play solo or team up with friends in multiplayer to conquer the toughest obstacles. With a thrilling campaign mode and endless creative possibilities, Trailmakers is the ultimate sandbox for adventurers." },
  {developer: "Maxis", publisher: "Electronic Arts", name: "The Sims 4", cover: "images/sims4.jpg", genre: "Simulation", releaseDate: "Sep 2, 2014", description: "Play with life and discover the possibilities. Unleash your imagination and create a world of Sims that’s wholly unique. Explore and customize every detail from Sims to homes—and much more." },
  {developer: "Ubisoft Nadeo", publisher: "Ubisoft", name: "Trackmania", cover: "images/trackmania.jpg", genre: "Racing", releaseDate: "Jul 1, 2020", description: "Trackmania combines easy-to-learn, hard-to-master racing with a fresh look and creative direction. A remake of Trackmania Nations, it features a free-to-play base game, track editor, online events, and car customization." },
  {developer: "Christian Whitehead, Headcannon, PagodaWest Games", publisher: "SEGA", name: "Sonic Mania", cover: "images/sonic_mania.jpg", genre: "Action", releaseDate: "Aug 15, 2017", description: "Sonic Mania is an all-new adventure with Sonic, Tails, and Knuckles full of unique bosses, rolling 2D landscapes, and fun classic gameplay." },
  {developer: "Team17", publisher: "Team17", name: "Worms Armageddon", cover: "images/worms_armageddon.jpg", genre: "Strategy", releaseDate: "Nov 19, 1999", description: "Those intrepid invertebrates return with a vengeance in the much-loved Worms™ Armageddon. It’s a whole new can of worms! It’s hilarious fun that you can enjoy on your own or with all your friends." },
  {developer: "Sonic Team", publisher: "SEGA", name: "Sonic Racing: Crossworlds", cover: "images/sonic_crossworlds.jpg", genre: "Racing", releaseDate: "Sep 25, 2025", description: "Sonic Racing: CrossWorlds is a 2025 kart racing game developed by Sonic Team and published by SEGA. A spinoff in the Sonic the Hedgehog series, it incorporates characters and features from previous Sonic racing games, with new courses, customization, and crossover content." },
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

    const addGameBox = document.createElement('div');
    addGameBox.className = 'add-game-item';
    const plusSign = document.createElement('span');
    plusSign.className = 'plus-sign';
    plusSign.textContent = '+';
    addGameBox.appendChild(plusSign);
    grid.appendChild(addGameBox);
}


if (detailsDiv) {
    const gameIndex = new URLSearchParams(window.location.search).get('game');
    const game = items[gameIndex];
    document.getElementById('gameImage').src = game.cover;
    document.getElementById('gameName').textContent = game.name;
    document.getElementById('gamePublisher').textContent = "Publisher: " + (game.publisher || 'N/A'); // Added label and default
    document.getElementById('gameDeveloper').textContent = "Developer: " + (game.developer || 'N/A'); // Added label and default
    document.getElementById('gameGenre').textContent = "Genre: " + (game.genre || 'N/A'); // New
    document.getElementById('gameReleaseDate').textContent = "Released: " + (game.releaseDate || 'N/A'); // New
    document.getElementById('gameDescription').textContent = game.description;

}