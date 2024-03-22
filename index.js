const openSidebar = document.querySelector("#openSidebar");
const closeSidebar = document.querySelector("#closeSidebar");
const sidebar = document.querySelector(".sidebar");

openSidebar.addEventListener("click", (event) => {
  sidebar.style.display = "flex";
});
closeSidebar.addEventListener("click", (event) => {
  sidebar.style.display = "none";
});

const lists = document.querySelector("li");
