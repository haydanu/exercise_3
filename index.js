const numStars = 100;

const getRandomPosition = () => {
  var y = window.innerWidth;
  var x = window.innerHeight;
  var randomX = Math.floor(Math.random() * x);
  var randomY = Math.floor(Math.random() * y);
  return [randomX, randomY];
}

for (let i = 0; i < numStars; i++) {
  let star = document.createElement("div");
  star.className = "star";
  let xy = getRandomPosition();
  star.style.top = xy[0] + 'px';
  star.style.left = xy[1] + 'px';
  document.body.append(star);
}



const getStartWarsAPI = async () => {
  try {
    const res = await fetch("https://swapi.co/api/people/");
    console.log(res)
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

const filterTable = () => {
  let input = document.getElementById("myInput");
  let filter = input.value.toLowerCase();
  let rows = document.querySelector("#tbody").rows;

  for (let i = 0; i < rows.length; i++) {
    let firstColumn = rows[i].cells[0].textContent.toLowerCase();
    let secondColumn = rows[i].cells[1].textContent.toLowerCase();
    let thirdColumn = rows[i].cells[2].textContent.toLowerCase();
    let fourthColumn = rows[i].cells[3].textContent.toLowerCase();
    let fifthColumn = rows[i].cells[4].textContent.toLowerCase();
    let sixthColumn = rows[i].cells[5].textContent.toLowerCase();
    if (firstColumn.indexOf(filter) > -1 || secondColumn.indexOf(filter) > -1 || thirdColumn.indexOf(filter) > -1 || fourthColumn.indexOf(filter) > -1 || fifthColumn.indexOf(filter) > -1 || sixthColumn.indexOf(filter) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none"
    }
  }
}

document.querySelector("#myInput").addEventListener("keyup", filterTable);