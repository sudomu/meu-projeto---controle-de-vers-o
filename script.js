let count = 0;

function interagir() {
  count++;
  document.getElementById("contador").textContent =
    "Cliques: " + count;
}