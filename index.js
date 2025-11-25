const STAR_COUNT = 12;
const sky = document.getElementById("sky");
const lines = document.getElementById("lines");
const infoCard = document.getElementById("info-card");
// done
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}


const descriptions = {
  "Andromeda": "Greek Princess",
  "Antlia": "Air pump",
  "Apus": "Bird of paradise",
  "Aquarius": "Water-bearer and wine waiter to the gods",
  "Aquila": "Eagle, retriever of Zeus thunderbolts",
  "Cancer": "Crab that bit Herculus foot",
  "Carina": "Keel of the Argo",
  "Carpicornus": "Sea goat Associated with god of the countryside",
  "Gemini": "Mythical twins Castor and Pollux",
  "Corvus": "Crow sent by Appollo in search of water",
  "Virgo": "Goddess of Justice",
  "Draco": "Dragon that guards the golden apple tree",
};
const images = {
"Andromeda": "https://imgs.search.brave.com/2z1g7CYTHaSbroWK7rM9Nb22X91WwgTvthSzgVq-fPI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/MTc5NTc4MS9waG90/by9tYXJzLWFuZC1w/bGVpYWRlcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YkpP/cVJFLWp0Z0FRMjJ4/U2duOURQbnJDX0dZ/UWVMNTRhMHlqcWJK/VmRsND0",
"Antlia": "https://imgs.search.brave.com/WxuavrF8gGuENSnsw71gqhfrkXlih7uK0fVpis6reVk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzU4LzA3LzE3/LzM2MF9GXzM1ODA3/MTc2M19YeUwxNDJj/THM0OW0xbW9jMWZl/SkNHN3M0M1R2dFVk/SC5qcGc",
"Apus": "https://imgs.search.brave.com/ligQJeEUBo_IZ4I-3oRJgkttDrz7kWs8T3Tmn-uKoCA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNlLzNm/L2Y1LzNlM2ZmNWE3/ZmUxYTc3YjI3MWRh/NjA0ZmFkZDAyY2Ey/LmpwZw",
"Aquarius": "https://imgs.search.brave.com/uoItqsUwMfIuJmf2GXsZbWwBKzAz8wKVYb27PLNU-zM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTY1/OTU5OTA2L3ZlY3Rv/ci9jb25zdGVsbGF0/aW9uLWFxdWFyaXVz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1SRHBJSXd1SzZX/R2M5aE91bmtiOFEw/RzBUbWtKRm5hMTI0/QktFZ1F1cHlzPQ",
"Aquila": "https://imgs.search.brave.com/Zb4Hl9EMoQ4HyZAMX3pCuIH6T7OPyMBPGJOwtjuGIFo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzE5/MzUvNDM3MS9maWxl/cy9BcXVpbGFfYzY3/OTlhNDgtMjUzZi00/NWExLTgyNWMtYjdh/OWU0YjkzNjhkXzI0/MHgyNDAuanBnP3Y9/MTcxNzU0MTQ0MQ",
"Cancer": "https://imgs.search.brave.com/3DqoXvZArztpbP5mjm5aBdt1lfshp3MY815XOdtVn5E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE3LzQyLzYwLzg3/LzM2MF9GXzE3NDI2/MDg3MjlfMDc4ZHBO/bHpvUlBSTFRicE5L/ME9mWHo4UHJHODdB/UnAuanBn",
"Carina": "https://imgs.search.brave.com/PpKOEODEq-1Sl67sc_sKW-6uTmP7KpCUmuBST4AEwdI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvY2FyaW5h/LXRoZS1rZWVsLWNv/bnN0ZWxsYXRpb24t/dmVjdG9yLTI2MG53/LTEyNjQ3OTAwMDIu/anBn",
"Carpicornus": "https://imgs.search.brave.com/QlV_5gJjuTxBLOz8Rye2QdNBLzey4cJ5zwAbfAiXpHc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uaW5l/cGxhbmV0cy5vcmcv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDgvS25vdy15b3Vy/LWNvbnN0ZWxsYXRp/b25zX0NhcHJpY29y/bnVzLnBuZw",
"Gemini": "https://imgs.search.brave.com/Hw2KRsyAKJMlCO7FXbGY9jGV1ADlpONyURMFBtd6-r0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3Rhci1yZWdpc3Ry/YXRpb24uY29tL2Nk/bi9zaG9wL2FydGlj/bGVzLzg4X1p3aWxs/aW5nZV9iMTBlOGY1/Ni1iM2Y2LTQ2Mjct/ODc4Yi0wOGIyMzMy/MGY4OGQuanBnP3Y9/MTc0ODA2NDA5NCZ3/aWR0aD0xMDAw",
"Corvus": "https://imgs.search.brave.com/NUcgkOMd8iaK0kQjm1SQdMXhuII6gAxfxcHwkIWvl3w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Ry/b2xvZ3lraW5nLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvY29y/dnVzLWNvbnN0ZWxs/YXRpb24tMS04MDB4/NDYyLmpwZw",
"Virgo": "https://imgs.search.brave.com/AoL3gHIBUlgoV3h_0-tPioQgzIEUh9aE5Mly-2J1RbQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c3Rhci1yZWdpc3Ry/YXRpb24uY29tL2Nk/bi9zaG9wL2FydGlj/bGVzLzMxX0p1bmdm/cmF1XzU4MDAwY2Q5/LTMzOGMtNDMxNS05/ZDRiLTliMTM1NWE0/ZmI2MC5qcGc_dj0x/NzQ4MDY0OTc1Jndp/ZHRoPTEwMDA",
"Draco": "https://imgs.search.brave.com/qhU6dEWW9JDm9CMLNQ8a_wtCcDpbIjFah7ujJXi6fRQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jb25z/dGVsbGF0aW9uLW5p/Z2h0LXN0YXJyeS1z/a3ktZHJhY28tZHJh/Z29uLXZlY3Rvci1p/bGx1c3RyYXRpb24t/ODg2MzgzNzMuanBn",
};


function randomRange(min, max) {
return Math.random() * (max - min) + min;
}


function generateStarData() {
const names = Object.keys(descriptions);
const name = names[Math.floor(Math.random() * names.length)];
return {
  name,
  brightness: randomRange(0.1, 2.5).toFixed(2),
  distance: Math.floor(randomRange(5, 500)) + " light years",
  temperature: Math.floor(randomRange(3000, 15000)) + "K",
  description: descriptions[name],
  image: images[name]
};
}



function generateStars() {
    const stars = [];

    for (let i = 0; i < STAR_COUNT; i++) {
        const x = randomRange(45, 95);
        const y = randomRange(5, 95);

        const starEl = document.createElement("div");
        starEl.classList.add("star");
        starEl.style.left = x + "%";
        starEl.style.top = y + "%";

        const data = generateStarData();

        starEl.dataset.name = data.name;
        starEl.dataset.brightness = data.brightness;
        starEl.dataset.distance = data.distance;
        starEl.dataset.temperature = data.temperature;
        starEl.dataset.img = data.image;
        starEl.dataset.description = data.description;

        starEl.addEventListener("mouseenter", e => showInfo(e, starEl));
        starEl.addEventListener("mouseleave", hideInfo);

        sky.appendChild(starEl);

        stars.push({ x, y, el: starEl });
    }

    connectNearest(stars);
}

function connectNearest(stars) {
    lines.innerHTML = "";

    for (let i = 0; i < stars.length; i++) {
        let nearest = null;
        let nearestDist = Infinity;

        for (let j = 0; j < stars.length; j++) {
            if (i === j) continue;

            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const dist = dx * dx + dy * dy;

            if (dist < nearestDist) {
                nearestDist = dist;
                nearest = stars[j];
            }
        }

        if (nearest) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", stars[i].x + "%");
            line.setAttribute("y1", stars[i].y + "%");
            line.setAttribute("x2", nearest.x + "%");
            line.setAttribute("y2", nearest.y + "%");
            line.setAttribute("stroke", "rgba(255,255,255,0.5)");
            line.setAttribute("stroke-width", "2");
            lines.appendChild(line);
        }
    }
}

// Info card
function showInfo(e, starEl) {
    infoCard.style.display = "block";
    infoCard.style.left = (e.clientX + 15) + "px";
    infoCard.style.top = (e.clientY + 15) + "px";

    infoCard.innerHTML = `
        <strong>${starEl.dataset.name}</strong><br>
        <img class="infoCard" src=${starEl.dataset.img} alt=${starEl.dataset.name}></img>
        <p><i>${starEl.dataset.description}</i></p>   
        Brightness: ${starEl.dataset.brightness}<br>
        Distance: ${starEl.dataset.distance}<br>
        Temperature: ${starEl.dataset.temperature}
        

    `;
}

function hideInfo() {
    infoCard.style.display = "none";
}

function randomBlink() {
  document.querySelectorAll(".star").forEach(star => {
    star.style.animationDelay = `${Math.random() * 50}s`;
    star.style.animationDuration = `${1 + Math.random()}s`;
});
}

generateStars();
randomBlink();
