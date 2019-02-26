const numStars = 100;

for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");
  star.className = "star";
  var xy = getRandomPosition();
  star.style.top = xy[0] + 'px';
  star.style.left = xy[1] + 'px';
  document.body.append(star);
}

function getRandomPosition() {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

async function getStartWarsAPI() {
  try {
    const res = await fetch("https://swapi.co/api/people/");
    const data = await res.text();
    const parseData = await JSON.parse(data);
    let starWarsCharacter = parseData.results;

    let tbody = document.getElementById("tbody");

    for (var i = 0; i < starWarsCharacter.length; i++) {
      let tr = "<tr>";
      tr +=
        "<td>" +
        starWarsCharacter[i].name +
        "</td>" +
        "<td>" +
        starWarsCharacter[i].height +
        "</td>" +
        "<td>" +
        starWarsCharacter[i].mass +
        "</td>" +
        "<td>" +
        starWarsCharacter[i].birth_year +
        "</td>" +
        "<td>" +
        starWarsCharacter[i].skin_color +
        "</td>" +
        "<td>" +
        starWarsCharacter[i].eye_color +
        "</td></tr>";
      tbody.innerHTML += tr;
    }
  } catch (error) {
    console.log(error);
  }
};

getStartWarsAPI();