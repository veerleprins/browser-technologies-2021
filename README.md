# Browser Technologies

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

The following browser technologies have been chosen for this web application:

-
-

### :link: Browser API's

The APIs used for this are:

- localStorage
- Validation

### :link: Browser tests

The browsers used for this are:

**Browser Desktop:**

- Brave
- Firefox

**Browser Mobile:**

- Safari iOs mobile
- Android Chrome

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

Now you can open http://localhost:<PORT>/ in your browser (with the port that is being given) to view the application! :raised_hands:

## :books: Sources

The sources I've used to create this application:

### Frontend code:

-

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

This repo is licensed as [MIT]() by :copyright: [Veerle Prins](https://github.com/veerleprins), 2020

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->
