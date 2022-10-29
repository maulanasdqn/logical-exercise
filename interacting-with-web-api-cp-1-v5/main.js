function task1() {
  return document.getElementById("random-number").textContent
}

function task1_1() {
  return document.getElementById("random-number-class").textContent
}

function task2() {
  document.getElementById("task-2").textContent = 100
}

function task3() {
  document.getElementById("task-3-button").addEventListener("click", () =>  document.getElementById("task-3").textContent = 100)
}

function task3_1() {
  document.getElementById("task-3-1-button").addEventListener("click", () =>  document.getElementById("task-3-1").textContent = "")
}

console.log("Number inside random-number element is: ", task1());
console.log("Number inside random-number-class element is: ", task1_1());
task2();
task3();
task3_1();

if (typeof module !== "undefined") {
  module.exports = { task1, task1_1, task2, task3, task3_1 };
}
