// 1
const ash = document.querySelector("h3");
ash.innerText = "potato";

// 2
// with id
const home = document.getElementById("home");
home.innerHTML = "Start";

// 3
// with id
const contact = document.getElementById("contact");
contact.innerHTML = "Mail Us";

// 4
const info = document.querySelector(".art-2 > p:nth-child(4)");
info.innerText = "Changed this information!";

// 5
const button = document.querySelector("button");
button.style.color = "green";
button.style.backgroundColor = "darkgrey";

// solution 2
let buttonRef = document.querySelector(".art-3>button");
/* buttonRef.setAttribute('style', 'color: blue;');
buttonRef.setAttribute('style', 'background-color: darkgrey; color: blue;'); */
buttonRef.style.color = "blue";
buttonRef.style.backgroundColor = "darkgrey";
// 6
const product = document.querySelector(".art-3");
product.style.backgroundColor = "blue";

// 7
const address = document.querySelector(
  "body > footer:nth-child(3) > section:nth-child(1) > article:nth-child(2) > p:nth-child(2)"
);
address.innerHTML = "Sinus skateboards <br> Storgatan 3 <br> 123 22 Staden";

// solution 2
/* let addressRef = document.querySelector("footer>section>article:nth-child(2)>p");
addressRef.innerHTML = "Jesper Nyberg <br> Anjalagatan 5 <br> 664 34 Grums"; */

// 8
const allP = document.querySelectorAll("p");
allP.forEach((element) => (element.style.color = "red"));

// solution 2
/* let pRefs = document.querySelectorAll("p");
pRefs.forEach((pRef) => {
  pRef.style.color = "blue";
}); */

// 9
const allBtn = document.querySelectorAll("button");
allBtn.forEach((element) => (element.innerText = "add to cart"));

// document.querySelectorAll('button').forEach(button => button.textContent = 'Add To Cart');

// 10
home.classList.add("active");

// 11
const logo = document.querySelector(".logo");
logo.classList.remove("logo");

/* let logoRef = document.querySelector(".logo");
logoRef.classList.remove("logo"); */

// 12
const nav = document.querySelector("nav");
let menuItem = document.createElement("a"); // skapa ett a element i nav
menuItem.innerText = "Click me!";
menuItem.setAttribute("href", "#");
nav.appendChild(menuItem); // förankra menu item

// 13
const main = document.querySelector("main");
const productDesc = `        <article class="art-4">
            <figure><img src="img/hoodie-ash.png" alt="hoodie"></figure>
            <h2>Sinus Hoodie</h2>
            <h3>Ash</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>
            <button>buy</button>
        </article>`;
main.insertAdjacentHTML("beforeend", productDesc);

// 14
const logo2 = document.querySelector("body > header:nth-child(1) > img:nth-child(1)");
logo.addEventListener("click", (event) => {
  console.log("found you!");
});

// 15
const allProducts = document.querySelectorAll("main > article");

allProducts.forEach((product) =>
  product.addEventListener("click", (e) => {
    const name = product.querySelector("h3");
    console.log(`Hi, I'm article ${name.innerText}`);
  })
);
