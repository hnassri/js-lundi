// Partie Footer
let footer = document.getElementsByTagName("footer")[0];


let x = 1;
let foot = function(){
  this.textContent = "clique numéro " + x++;
}

footer.addEventListener("click", foot);
// Partie Navbar
let navbar = document.getElementById("navbarHeader");

let button = document.getElementsByClassName("navbar-toggler")[0];

button.addEventListener("click", function() {

  if (navbar.className === "collapse bg-dark"){
    navbar.setAttribute("class", "bg-dark")
  }else{
    navbar.setAttribute("class", "collapse bg-dark")
  }

});
//Première carte
let card1 = document.getElementsByClassName("btn-group")[0].childNodes[3];
console.log(card1)
card1.addEventListener("click", function(){
  document.getElementsByClassName("card-body")[0].style.color = "red";
  
})
// Deuxième carte
let card2 = document.getElementsByClassName("btn-group")[1].childNodes[3];
console.log(card2)
let toggle = false;
card2.addEventListener("click", function(){
  if (toggle === false){
    document.getElementsByClassName("card-body")[1].style.color = "green";
    toggle = true;
  }else {
    document.getElementsByClassName("card-body")[1].style.color = "";
    toggle = false;
  }
})

// disparition du css

let remBoot = document.getElementsByTagName("header")[0];

let del = true;
remBoot.addEventListener("dblclick", function(){
  let bootstrap = document.getElementsByTagName("link")[0];
  if (del){
    bootstrap.remove()
    del = false;
  }else {
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet")  
    link.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css", integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T")
    link.setAttribute("crossorigin", "anonymous")
    let title = document.getElementsByTagName("title")[0];
    document.head.insertBefore(link, title);
    del = true;
  }
})