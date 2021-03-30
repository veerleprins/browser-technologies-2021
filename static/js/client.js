const body = document.querySelector("body");
const designPage = window.location.pathname.includes("/designs/");
const designs = window.location.pathname.endsWith("/designs");
const cartPage = window.location.pathname.endsWith("/cart");

if (designPage && document.querySelector) {
  // Getting the elements:
  const textInput = document.querySelector("#textInput");
  const selectInput = document.querySelector("#color");
  const selectInputText = document.querySelector("#textColor");
  const shirt = document.querySelector(".shirt");
  const paragraph = document.querySelector("#liveInput");

  // Adding classes:
  paragraph.classList.add("onShirt");

  // Adding events:
  selectInputText.addEventListener("change", (e) => {
    let userInput = e.target.value;
    removeClasses(["colorBlack", "colorWhite"], paragraph);
    checkShirtColor(userInput, paragraph);
  });

  selectInput.addEventListener("change", (e) => {
    let userInput = e.target.value;
    removeClasses(
      ["colorOlive", "colorWhite", "colorBlack", "colorNavy"],
      shirt
    );
    checkShirtColor(userInput, shirt);
  });

  textInput.onkeyup = function () {
    paragraph.innerHTML = this.value;
  };
}

if (designPage && document.querySelector && localStorage && location) {
  // localStorage.clear();
  console.log(localStorage);
  // Getting the elements:
  const shirt = document.querySelector(".shirt");
  const paragraph = document.querySelector("#liveInput");
  const size = document.querySelector("#size");
  const shirtColor = document.querySelector("#color");
  const inputText = document.querySelector("#textInput");
  const textColor = document.querySelector("#textColor");
  const key = location.pathname.replace("/designs/", "");

  if (localStorage.getItem(`${key}`)) {
    console.log("Does exist.");
    let retrievedObject = JSON.parse(localStorage.getItem(`${key}`));
    size.value = retrievedObject.size;
    inputText.value = retrievedObject.inputText;
    shirtColor.value = retrievedObject.shirtColor;
    textColor.value = retrievedObject.textColor;
    checkShirtColor(shirtColor.value, shirt);
    checkShirtColor(textColor.value, paragraph);
    paragraph.innerHTML = retrievedObject.inputText;
  } else {
    console.log("Does not exist.");
    const object = createObject(
      size.value,
      shirtColor.value,
      inputText.value,
      textColor.value
    );
    // Put the object into storage
    localStorage.setItem(`${key}`, JSON.stringify(object));
  }
  // console.log(localStorage);
  // localStorage.clear();

  // Event listeners:
  size.addEventListener("change", function (e) {
    // Get user input:
    let userInput = e.target.value;
    // Add user input to object in localStorage:
    let obj = JSON.parse(localStorage.getItem(`${key}`));
    obj.size = userInput;
    localStorage.setItem(`${key}`, JSON.stringify(obj));
    // Update DOM:
    let getObj = JSON.parse(localStorage.getItem(`${key}`));
    size.value = getObj.size;
  });

  shirtColor.addEventListener("change", function (e) {
    // Get user input:
    let userInput = e.target.value;
    // Add user input to object in localStorage:
    let obj = JSON.parse(localStorage.getItem(`${key}`));
    obj.shirtColor = userInput;
    localStorage.setItem(`${key}`, JSON.stringify(obj));
    // Update DOM:
    let getObj = JSON.parse(localStorage.getItem(`${key}`));
    shirtColor.value = getObj.shirtColor;
  });

  textColor.addEventListener("change", function (e) {
    // Get user input:
    let userInput = e.target.value;
    // Add user input to object in localStorage:
    let obj = JSON.parse(localStorage.getItem(`${key}`));
    obj.textColor = userInput;
    localStorage.setItem(`${key}`, JSON.stringify(obj));
    // Update DOM:
    let getObj = JSON.parse(localStorage.getItem(`${key}`));
    textColor.value = getObj.textColor;
  });

  inputText.addEventListener("change", function (e) {
    // Get user input:
    let userInput = e.target.value;
    // Add user input to object in localStorage:
    let obj = JSON.parse(localStorage.getItem(`${key}`));
    obj.inputText = userInput;
    localStorage.setItem(`${key}`, JSON.stringify(obj));
    // Update DOM:
    let getObj = JSON.parse(localStorage.getItem(`${key}`));
    inputText.value = getObj.inputText;
    paragraph.innerHTML = getObj.inputText;
  });
}

if (cartPage && document.querySelector && localStorage) {
  const keys = document.querySelectorAll(".keys");
  const keysList = Array.from(keys);
  keysList.forEach((input) => {
    let key = input.value;
    let obj = JSON.parse(localStorage.getItem(`${key}`));
    localStorage.removeItem(`${key}`, JSON.stringify(obj));
  });
}

// Creates a new object:
function createObject(size, shirtColor, inputText, textColor) {
  return {
    size: size,
    shirtColor: shirtColor,
    inputText: inputText,
    textColor: textColor,
  };
}

// Checks the color of a shirt and adds a specific class to it:
function checkShirtColor(input, element) {
  if (input === "olive") {
    element.classList.add("colorOlive");
  } else if (input === "#ffffff" || input === "white") {
    element.classList.add("colorWhite");
  } else if (input === "#383838" || input === "black") {
    element.classList.add("colorBlack");
  } else if (input === "#253095") {
    element.classList.add("colorNavy");
  }
}

// Removes all the classes from a specific element:
function removeClasses(arrayList, element) {
  arrayList.forEach((item) => {
    element.classList.remove(item);
  });
}
