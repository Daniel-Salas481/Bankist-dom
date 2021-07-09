"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// //Selecting and Deleting Elements

// //Selecting an element from the page
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// //returns the first element that has header
// const header = document.querySelector(".header");
// //selects all elements with 'section'
// const allSections = document.querySelectorAll(".section");
// console.log(allSections);

// document.getElementById("section--1");

// //Returns an HTML collection
// const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// //returns a live HTML collection
// console.log(document.getElementsByClassName("btn"));

// //Creating and inserting elements
// const message = document.createElement("div");
// message.classList.add("cookie-message");
// //message.textContent = "We use cookies for improved functionalty and analytics";
// message.innerHTML =
//   'We use cookies for improved functionalty and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// //We can use the prepend and append to not only insert element but also move it
// //header.prepend(message);
// header.append(message);
// //header.append(message.cloneNode(true));

// //header.before(message);
// //header.after(message);

// //Delete elements
// //This will remove the cookie message on the bottom
// //Using the .remove();
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     message.remove();
//   });

// //Styles
// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(message.style.height);
// console.log(message.style.backgroundColor);

// //contains all of the properties of the value
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// //changes the height of the message
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// //Easily change the stlye of the page
// document.documentElement.style.setProperty("--color-primary", "orangered");

// //Attributes
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = "Beautiful minimalist logo";

// //Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute("designer"));
// logo.setAttribute("company", "Bankist");

// //the absolute URL of the image
// console.log(logo.src);
// //the literal URL of the image
// console.log(logo.getAttribute("src"));

// //link attributes
// const link = document.querySelector(".twitter-link");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// //Classs
// logo.classList.add("c");
// logo.classList.remove("c");
// logo.classList.toggle("c");
// logo.classList.contains("c"); //not includes

// // Don't use
// // logo.className = "daniel";

//Smooth Scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
//getBoundingClientRect method returns a DOMRect object
// const s1coords = section1.getBoundingClientRect();
// console.log(s1coords);

// console.log(e.target.getBoundingClientRect());

// console.log("current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

//Scrolling
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

//old-school way
// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: "smooth",
// });

btnScrollTo.addEventListener("click", function (e) {
  section1.scrollIntoView({
    behavior: "smooth",
  });
});

//event listener

// const h1 = document.querySelector("h1");

// const alertH1 = function (e) {
//   alert("addEventListner: Great! you are reading the heading!");

//   //we remove the event listener here
//   h1.removeEventListener("mouseenter", alertH1);
// };

//mouseenter is an event wherever the mouse is hovered over
// h1.addEventListener("mouseenter", alertH1);

// //remove events by using the setTimeout
// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

//This is more of an old school way
// h1.onmouseenter = function (e) {
//   alert("addEventListner: Great! you are reading the heading!");
// };

// //EVENT PROPAGATION
// // rgb(255,255,255)

// //The event happens in the document root
// //and then it goes to the target
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("LINK", e.target, e.currentTarget);

//   //Stop the propagation
//   //e.stopPropagation();
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("CONTAINER", e.target, e.currentTarget);
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log("NAV", e.target, e.currentTarget);
// });
