const h3Nome = document.getElementById("h3Nome");
const h3Altura = document.getElementById("h3Altura");
const h3Peso = document.getElementById("h3Peso");
const h3Homeworld= document.getElementById("h3Homeworld");
const h3listFilms = document.getElementById("h3listFilms");

const inputID = document.getElementById("inputID");
const btPesquisar = document.getElementById("btPesquisar");
const imgDog = document.getElementById("imgDog");
const pLink = document.getElementById("pLink");

const getRandomDogPicture = async () => {
  const response = await fetch("https://random.dog/woof.json");
  const data = await response.json();
  imgDog.src = data.url;
  pLink.innerHTML = data.url;
};

const handleClickBtPesquisar = async () => {
  const id = parseInt(inputID.value.trim());
  if (isNaN(id) || id <= 0) {
    alert("ID inválido! Digite um número positivo!");
    return;
  }
  localStorage.idStarWars = id;
  const response = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await response.json();
  h3Nome.innerHTML = "Nome = " + data.name + "\n";
  h3Altura.innerHTML = "Altura = " + data.height + "\n";
  h3Peso.innerHTML = "Peso = " + data.mass;
  h3Homeworld.innerHTML = "Terra Natal = " + await getPersonageHomeworld(data.homeworld);
  h3listFilms.innerHTML = "Filmes = ";
  await getFilms(data);
};

const getSavedID = () => {
  const savedID = parseInt(localStorage.idStarWars);
  if (!isNaN(savedID) && savedID > 0) {
    inputID.value = savedID;
    handleClickBtPesquisar();
  }
};

const getPersonageHomeworld = async (homeworld) => {
  const homeworldResponse = await fetch(homeworld);
  const homeworldData = await homeworldResponse.json();
  return homeworldData.name;
};

async function getFilms(data) {
  var arrayFilms = data.films;
  for (let i = 0; i < arrayFilms.length; i++) {
    let filmResponse = await fetch(arrayFilms[i]);
    let filmData = await filmResponse.json();
    let p = document.createElement("p");
    p.innerHTML = filmData.title;
    h3listFilms.appendChild(p);
  }
}

btPesquisar.onclick = handleClickBtPesquisar;

getRandomDogPicture();
getSavedID();

/*

const handleClickBtPesquisar = () => {
  const id = parseInt(inputID.value.trim());
  if (isNaN(id) || id <= 0) {
    alert("ID inválido! Digite um número positivo!");
    return;
  }
  fetch(`https://swapi.dev/api/people/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      h3Nome.innerHTML = "Nome = " + data.name;
    });
};

*/
