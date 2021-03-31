# Browser Technologies

![iPhone 8 White Mockup](https://user-images.githubusercontent.com/35265583/113010211-f3f5b000-9178-11eb-90e3-89d18b2c9e7c.png) ![iPad Pro (12 9 Inch) Mockup](https://user-images.githubusercontent.com/35265583/113010208-f35d1980-9178-11eb-9cec-39f0c3e707da.png)
![Macbook Pro Tilted Screen Mockup](https://user-images.githubusercontent.com/35265583/113010791-69618080-9179-11eb-8e78-3b6bfb833f66.png)

## :black_nib: Short Description

During the course _browser technologies_ within the CMD minor Web Design & Development, we learn to code using browser techniques with progressive enhancement in mind. It explains what progressive enhancement entails and how this way of thinking can be applied while building any application. Furthermore, a number of cases were given in which one specific case was chosen to get started with self-selected browser techniques that would match the case.

This repository shows a progressive enhanced web application based on the case: **Designing a geek t-shirt**.

### Table of contents

- [Case](#page_with_curl-case)
- [Live Link](#globe_with_meridians-live-link)
- [Flow](#wavy_dash-flow)
- [Browser Technologies](#small_orange_diamond-browser-technologies)
- [Install](#arrow_down-install)
- [Sources](#books-sources)

## :page_with_curl: Case

In the case: Designing a geek t-shirt, there was a specific job story:

> I want to be able to design my own t-shirt with geek text, save it, order it, and use it next time I visit the site.

There were a number of requirements that had to be incorporated into the application:

- The maker's details (name, phone number, email address).
- Color t-shirt.
- Size t-shirt.
- Text t-shirt.
- Fitting (M / F).
- Pick up where you left off / revise design.
- Validation: everything must be completed. Provide clear error messages.
- User must be able to create and revise multiple t-shirts, so must have an overview page.
- Order page to buy a design and have it made.

## :globe_with_meridians: Live link

The live link to my web application can be found below:

https://get-nerdy.herokuapp.com/

## :wavy_dash: Flow

First, a wireflow was drawn to see how the application would work in the 'perfect' environment:
<img width="600" alt="Drawn flow of the application." src="https://user-images.githubusercontent.com/35265583/112224970-5d7f3700-8c2c-11eb-9b55-4034a6f8f9c0.jpg">

## :small_orange_diamond: Browser Technologies

### Progressive enhancement

The purpose of the user:

> Designing and ordering a nerdy T-shirt.

**Functional:**

- The forms work through the server.
- Structured HTML according to HTML5 semantics.
- The user can achieve their goal, but it is not the most pleasant and enjoyable experience.

**Reliable:**

- Basic validation via the server works.
- The user cannot make small mistakes while filling in the form.

**Usable:**

- The CSS makes it easier for the user to fill in the form.
- It is easier for the user to see the designed shirts through the design layout.

**Pleasurable:**

- The user immediately sees what the shirt will look like because the text & print is displayed on the shirt while designing.
- The user input is saved in between so that the user can exit the page and come back again.

### :link: Browser API's

The APIs used for this are:

- localStorage
- Validation

### :link: Browser tests

The browsers used for this are:

- Brave (Desktop)
- Firefox (Desktop)
- Safari iOs mobile (Mobile)
- Android Chrome (Mobile)

## :arrow_down: Install

### 1. Install npm :computer:

Before getting started, you need to install nvm. nvm can be installed by typing the following line of code in terminal and pressing enter:

`curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh `

If nvm has been successfully installed, you can check the version by typing the following line of code in the terminal and pressing enter:

`nvm --version`

### 2. :open_file_folder: Clone folder

Then you need to download this project and open it with your code editor. To do this, open your terminal with the correct path in which you want this repository. **Example**:

`cd/Desktop/Repos`

Then type the following line of code into your terminal:

`git clone https://github.com/veerleprins/browser-technologies-2021.git`

With this line of code, you've successfully downloaded the repository to your desired location.

### 3. Install all the Node packages :bookmark_tabs:

Then type the code below into your terminal:

`npm i`

With this line of code, you download all the node packages you need for this repo.

### 4. :white_check_mark: Start and run the code

Go to the repository in the terminal and add the following line of code below:

`node server.js`

Now you can open http://localhost:PORT/ in your browser (with the port that is being given) to view the application! :raised_hands:

## :books: Sources

The sources I've used to create this application:

### Frontend code:

- Oriol. (2014, 5 mei). Check if string contains only letters in javascript [StackOverflow post]. Stack Overflow. https://stackoverflow.com/questions/23476532/check-if-string-contains-only-letters-in-javascript
- MDN. (2021, 19 februari). String.prototype.endsWith() - JavaScript | MDN. MDN Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
- Salvadó, C. C. [christian-c-salvadó]. (2010, 6 januari). Storing Objects in HTML5 localStorage [StackOverflow post]. Stack Overflow. https://stackoverflow.com/questions/2010892/storing-objects-in-html5-localstorage
- MDN. (2021b, februari 19). Window.localStorage - Web APIs | MDN. MDN Docs. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- MDN. (2021a, februari 19). Array.from() - JavaScript | MDN. MDN Docs. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
- fsymbols. (z.d.). ♡ ♥💕❤😘 Heart Symbol - copy love emoji. Geraadpleegd op 29 maart 2021, van https://fsymbols.com/heart/#apple
- Copes, F. (2019, 27 mei). How to uppercase the first letter of a string in JavaScript. Flaviocopes. https://flaviocopes.com/how-to-uppercase-first-letter-javascript/

- <!--
  https://www.youtube.com/watch?v=k8yJCeuP6I8&t=371s
  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_oninput
  https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection
  https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
  https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  https://stackoverflow.com/questions/4230375/whats-the-easiest-way-to-remove-fieldset-border-lines/4230381
  https://css-tricks.com/accessible-svgs/
  https://stackoverflow.com/questions/2918707/turn-off-iphone-safari-input-element-rounding
  https://css-tricks.com/separate-form-submit-buttons-go-different-urls/
  https://www.w3schools.com/tags/att_input_type_hidden.asp
   -->

### Backend code:

#### Packages:

- express-ejs-layouts (2.5.0). (2018). [Layout support for ejs in express.]. npmjs. https://www.npmjs.com/package/express-ejs-layouts
- express (4.17.1). (2019). [Fast, unopinionated, minimalist web framework for node.]. npmjs. https://www.npmjs.com/package/express
- ejs (3.1.6). (2021). [Embedded JavaScript template ejs.]. npmjs. https://www.npmjs.com/package/ejs
- body-parser (1.19.0). (2019). [Parse incoming request bodies in a middleware before your handlers, available under the req.body property.]. npmjs. https://www.npmjs.com/package/body-parser
- nodemon (2.0.7). (2021). [Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.]. npmjs. https://www.npmjs.com/package/nodemon

#### Saving data:

- The Coding Train. (2016, 18 november). 8.5: Saving Data to JSON File with Node.js - Programming with Text [Video]. YouTube. https://www.youtube.com/watch?v=6iZiqQZBQJY

## :lock: License

This repo is licensed as [MIT](https://github.com/veerleprins/browser-technologies-2021/blob/master/LICENSE) by :copyright: [Veerle Prins](https://github.com/veerleprins), 2020

<!--
https://www.freecodecamp.org/news/check-if-javascript-array-is-empty-or-not-with-length/#:~:text=To%20check%20if%20an%20array,it%20is%20empty%20or%20not.

https://github.com/cmda-minor-web/browser-technologies-2021/blob/master/course/Eindopdracht.md#criteria

https://github.com/Coenmathijssen/browser-technologies-1920
 -->
