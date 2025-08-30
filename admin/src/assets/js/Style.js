const dropdown = document.querySelectorAll(".drop-item");
console.log(dropdown);
function myFunction() {
  console.log("hello");
}
dropdown.forEach((item) => {
  item.addEventListener("mouseover", myFunction);
});
