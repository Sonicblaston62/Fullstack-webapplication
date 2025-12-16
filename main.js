const items = [
    { name: "Portal", cover: "images/portal.jpg", description: "" },
    { name: "Portal 2", cover: "images/portal2.jpg", description: "" },
    { name: "Half Life", cover: "images/Half_Life.jpg", description: "" },
    { name: "Half Life 2", cover: "images/half_life2.jpg", description: "" },
    { name: "Team Fortress 2", cover: "images/team_fortress.jpg", description: "" },
    { name: "Command & Conquer - Red Alert", cover: "images/redalert.jpg", description: "" },
    { name: "Stardew Valley", cover: "images/stardew_valley.jpg", description: "" },
    { name: "Trailmakers", cover: "images/trailmakers.jpg", description: "" },
    { name: "The Sims 4", cover: "images/sims4.jpg", description: "" },
    { name: "Trackmania", cover: "images/trackmania.jpg", description: "" },
    { name: "Sonic Mania", cover: "images/sonic_mania.jpg", description: "" },
    { name: "Worms Armageddon", cover: "images/worms_armageddon.jpg", description: "" },
    { name: "Sonic Racing: Crossworlds", cover: "images/sonic_crossworlds.jpg", description: "" },

];

const grid = document.getElementById("grid");

items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = 
    `<img src="${item.cover}" alt="${item.name}" style="width: 100%;">
    <div class="item-title-overlay">${item.name}</div>`;
    grid.appendChild(div);
    
    
});