// const Start = function reverseString(str){
//     return str.split("").reverse().join("")
// }


// console.log(Start("Hello, World!"));


const display = document.querySelector("#display");
const form = document.querySelector("#exercise-form");
const input = document.querySelector("#exercise");
const darkBtn = document.querySelector("#toggle-dark");

const exercises = [];

function renderExercises() {
  display.innerHTML = `<ol>${exercises.map(ex => `<li>${ex}</li>`).join("")}</ol>`;
}

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const exerciseValue = input.value.trim();
  if (exerciseValue) {
    exercises.push(exerciseValue);
    renderExercises();
    input.value = "";
  }
});