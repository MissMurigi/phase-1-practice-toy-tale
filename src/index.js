let addToy = false;
const url = "http://localhost:3000/toys";

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
      fetch(url)
        .then((res) => res.json())
        .then((toys) => {
          const image = document.querySelector(".toy-avatar");
          toys.forEach((toy) => {
            image.src = toy.image;
          });
        });
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});
