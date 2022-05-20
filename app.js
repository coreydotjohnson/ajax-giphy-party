console.log("Let's get this party started!");

const key = "svrRnIHCkMQBlQQzvpw9qPDF5qMDEVtq";

const removeBtn = document.querySelector("#remove-btn");
removeBtn.addEventListener("click", () => {
  let gifContainer = document.querySelector("#gif-main-container");
  gifContainer.innerHTML = "";
});

const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-btn");
searchBtn.addEventListener("click", () => searchGif(key, searchBox.value));

async function searchGif(key, query) {
  if (!query) return;
  let res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { api_key: key, q: query },
  });
  addGif(res);
}

function addGif(res) {
  console.log("addGif function");
  let resLength = res.data.data.length;
  let rndIdx = Math.floor(Math.random() * resLength);
  let rndImg = res.data.data[rndIdx].images.original.url;

  let newImg = document.createElement("img");
  newImg.src = rndImg;
  document.querySelector("#gif-main-container").append(newImg);
}
