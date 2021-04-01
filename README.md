# Browser Technologies

![iPhone 8 White Mockup](https://user-images.githubusercontent.com/35265583/113159948-4f897180-923d-11eb-8e41-d027800e620d.png)![iPad Pro (12 9 Inch) Mockup](https://user-images.githubusercontent.com/35265583/113159943-4ef0db00-923d-11eb-96dc-7fbafd71bba1.png)![Macbook Pro Tilted Screen Mockup](https://user-images.githubusercontent.com/35265583/113159950-4f897180-923d-11eb-953d-fc9fae99b4fc.png)

_by Veerle Prins_

## :black_nib: Short Description

During the course _browser technologies_ within the CMD minor Web Design & Development, we learn to code using browser techniques with **Progressive Enhancement** in mind. It explains what progressive enhancement entails and how this way of thinking can be applied while building any application. Furthermore, a number of cases were given in which one specific case was chosen to get started with self-selected browser techniques that would match the case.

This repository shows a progressive enhanced web application based on the case: **Designing a geek T-shirt**.

The live link to my web application can be found below:

[Nerd Shirt](https://get-nerdy.herokuapp.com/)

## :page_with_curl: Case & Browser API

In the case: Designing a geek t-shirt, there was a specific job story:

> I want to be able to design my own t-shirt with geek text, save it, order it, and use it next time I visit the site.

There were a number of requirements that had to be incorporated into the application:

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Criteria</summary>

- The maker's details (name, phone number, email address).
- Color t-shirt.
- Size t-shirt.
- Text t-shirt.
- Fitting (M / F).
- Pick up where you left off / revise design.
- Validation: everything must be completed. Provide clear error messages.
- User must be able to create and revise multiple t-shirts, so must have an overview page.
- Order page to buy a design and have it made.
</details>

After this, the intention was to choose at least one browser API that would fit the case. [MDN: Web API](https://developer.mozilla.org/en-US/docs/Web/API) contains a whole list of web APIs from which to choose for the case.

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Chosen Browser API</summary>

Based on the case description, a Web API was looked at that would fit in with the design and ordering of a Nerdy T-shirt. Ultimately, the **localStorage** was chosen for the form.

_Localstorage_ is a mechanism to store user data in the browser using value pairs. This is possible because browsers use the [Web Storage API](https://blog.logrocket.com/localstorage-javascript-complete-guide/) - a set of two mechanisms; sessionStorage and localStorage. LocalStorage is somewhat like a sessionStorage, only the difference is that with localStorage these value pairs are stored after the browser is closed.

</details>

## :large_blue_diamond: Progressive enhancement

_**Progressive enhancement** is an approach where the core functionality is accessible to everyone, but where the experience can be improved layer by layer_. So in other words: The core functionality can always be used, but the newer layers that can provide a better experience are not necessary to use the core functionality. According to Aaron Walter, there are different layers within progressive enhancement to see what the needs of the user are, namely: **functional layer**, **reliable layer**, **usable layer** & **pleasurable layer**.

In the case of the Nerdy T-shirt, it is important to first have the goal of the user in mind because this goal must be accessible to everyone. In this case, the goal of the user is:

> Designing and ordering a nerdy T-shirt.

With the user's goal in mind, it is now possible to describe for each layer how the goal is achieved and how the user will experience this.

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Functional layer</summary>

In the functional layer it is important that **the user can achieve his goal with the least possible**: A page with only basic _HTML_ to design and order a nerdy t-shirt.

- The HTML is structured based on the HTML5 semantics.
- To create or order a design, there must be forms that work with HTML only (and a server).
- The user can achieve their goal to design and order a nerdy T-shirt, but it is not the most pleasant and enjoyable experience.
</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Reliable layer</summary>

In the reliable layer it is important that the user can achieve his goal, but that this is also **reliable**. At this stage we are still with the HTML. In fact, almost the same points are important with the functional layer as with the reliable layer. Only it must be taken into account that when the steps have to be performed again, they always work the same and therefore could not deviate.

- If the user were to design and order multiple t-shirts, it should always be the same reliable process.
- The user experience is still not enjoyable, but it is reliable.

</details>
<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Usable layer</summary>

In the usable layer, the experience is already greatly improved. This is the layer in which it becomes **easier for the user to design and order a t-shirt** because of the use of _CSS_.

- It is easier for the user to read the forms as the styling allows for more white spaces.
- It is easier for the user to fill in the forms because the styling provides a better layout of the form.
- It is easier for the user to go through the process of designing & order a Nerdy T-shirt due to the styling.

</details>
<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Pleasurable layer</summary>

In the pleasurable layer, the user experience is the **best experience you can experience on the website**. This layer is intended to let the user experience an experience in a fun and personal way. This layer is all about both the _CSS_ and the _JavaScript_ that make the user experience more enjoyable.

- LocalStorage allows the user to design a T-shirt, exit halfway through the page, and retrieve the modified parts again.
- Through the live input, the user immediately sees his T-shirt being created according to the design he has in mind.
</details>

## :wavy_dash: Flow

A simple sketch has been made to visualize what the flow of the user would be.

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Flow sketch</summary>

<img width="600" alt="Drawn flow of the application." src="https://user-images.githubusercontent.com/35265583/112224970-5d7f3700-8c2c-11eb-9b55-4034a6f8f9c0.jpg">
</details>

## :exclamation: Feature detection

Since not every browser supports a certain feature, it is important to add a feature detection within the code. This ensures that the user still has a good experience if a certain part would not work in his browser. Creating a feature detection in code differs for CSS and JavaScript:

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">CSS feature detection</summary>

In CSS there are actually three ways to check whether a certain feature is supported in the browser, namely:

**1. Write fallback code & overwrite fallback code:**

```CSS
article {
  display: flex;
  display: grid;
}
```

**2. Overwrite fallback code in @supports:**

```CSS
article {
  display: flex;
}

@supports (display: grid) {
  article {
    display: grid;
  }
}
```

**3. Write everything in @supports:**

```CSS
@supports not (display: grid) {
  article {
    display: grid;
  }
}

@supports (display: grid) {
  article {
    display: grid;
  }
}
```

[Source Feature detection CSS](https://zellwk.com/blog/calendar-flexbox-fallback/)

In fact, these ways of feature detection can also be placed exactly in the order in which they are: The first is the best method and the third the worst. This has to do with the fact that in most cases @supports is supported even less often than the feature you place in it.

The use case of course depends on the browsers in which you want to test. But to really code with the progressive enhanced way of thinking, the best way is number 1: Write fallback code & overwrite fallback code.

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">JS feature detection</summary>

In JavaScript it is actually much easier to add a feature detection. You can do this by writing a try catch or if else statement. So to check if for example _sessionStorage_ is supported in the browser:

```javascript
if (window.sessionStorage) {
  // Code for sessionStorage here
} else {
  console.log("Your browser is outdated OR you have your cookies turned off.");
}
```

What is important to remember here is that an if else statement must be written per feature and not check different features in one if else. It is possible that a user supports everything but has 1 part switched off. This would also stop the other features from working.

</details>

The website [canIUse.com](https://caniuse.com/) was used to find out which browser supports a particular feature.

## :mag: Browser tests

For this assignment it was decided to test the application in four different browsers, two for desktop and two for mobile. I decided to test the browsers below:

- Chrome (Desktop)
- Firefox (Desktop)
- Safari iOs mobile (Mobile)
- Android Chrome (Mobile)

I performed these tests using [lambdatest.com](https://app.lambdatest.com/). While testing these browsers, I looked at the points below:

- The layout of the website (with emphasis on the layout of the form).
- Web API: localStorage.
- Live user input.
- ES6 (ECMAScript 2015).

> :exclamation: Disclaimer: Since my first code was not properly built at all with the various feature detections, it is true that the tests did not run that smoothly. These tests are listed below:

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Chrome (Desktop)</summary>

### Chrome 84

First I did my test in _Chrome version 84_. Since this is a fairly new version of Chrome, it is expected that everything will work as intended.

#### Results:

![Screenshot homepage on 2021-04-01 at 11 12 6](https://user-images.githubusercontent.com/35265583/113280350-70f16880-92e4-11eb-914a-ea10b1bdaf7f.png)
![Screenshot begin design page on 2021-04-01 at 11 12 5](https://user-images.githubusercontent.com/35265583/113280347-7058d200-92e4-11eb-9138-3443c0614881.png)
![Screenshot end design page on 2021-04-01 at 11 13 4](https://user-images.githubusercontent.com/35265583/113280353-72229580-92e4-11eb-8acd-d1b064321ed3.png)
![Screenshot saved designs on 2021-04-01 at 11 13 3](https://user-images.githubusercontent.com/35265583/113280352-72229580-92e4-11eb-9e36-eda9febe4c48.png)
![Screenshot cart page on 2021-04-01 at 11 13 1](https://user-images.githubusercontent.com/35265583/113280351-7189ff00-92e4-11eb-869c-661dbb584bb3.png)

The test photos show that everything actually works as it should. For example, the layout on each page is exactly as it should be, the live input when the user types a print is visible in the right place on the shirt and the localStorage works when the page is closed and reopened. The only thing that is noticeable and does not work as it should is the length of the input fields on the design page. These should have the full width. Strangely enough, those of the shopping cart page do work, so chances are I made a mistake myself and that it has nothing to do with the specific browser.

#### Conclusion:

Because Chrome version 84 is a newer version (release date: July 2020), everything works as it should with the newer features.

### Chrome 50

After this, I decided to grab a slightly older version of Chrome desktop, namely _version 50_.

#### Results:

![Screenshot 2021-04-01 at 11 48](https://user-images.githubusercontent.com/35265583/113317318-8def6100-930f-11eb-8ce4-2696b2e52907.png)
![Screenshot 2021-04-01 at 11 48-1](https://user-images.githubusercontent.com/35265583/113318409-baf04380-9310-11eb-9356-782e07052406.png)
![Screenshot 2021-04-01 at 11 48-3](https://user-images.githubusercontent.com/35265583/113318473-cc395000-9310-11eb-9310-07b4301fce3e.png)
![Screenshot 2021-04-01 at 11 49-1](https://user-images.githubusercontent.com/35265583/113318549-db200280-9310-11eb-8f85-21c3364d32eb.png)
![Screenshot 2021-04-01 at 11 49-2](https://user-images.githubusercontent.com/35265583/113318585-e2471080-9310-11eb-9e41-6b07076940cc.png)

On the basis of the photos you can see that a number of small points do not work as they should for this browser version. Actually, those dots are not a disaster, except for one.

The most important point is that the live input works, but that it is not visible on the T-shirt itself. This text is placed next to the SVG, halfway between the form. After doing some research, it turns out that this is due to the position absolute on a flex child element. [Caniuse.com - position:absolute](https://caniuse.com/?search=position%3A%20absolute) also states that this does not work. The tricky part is that I have not taken this into account, which means that the live input itself works (even if the user makes the text white), which means that this text is shown crazy or not even on the screen. This could be solved by simply placing the live input below the svg so that it is still visible, even though the user would like it to be white.

In addition, there is a small error where the input fields on the design page do not occupy the full width of the parent. But in itself this is not a disaster as the user can still achieve his goal on this page: Designing a T-shirt.

##### Conclusion:

Based on the results, it is clear that there are still a number of small errors in the code. Especially the point of position absolute on the live input text, really should be adjusted to improve the user experience.

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Firefox (Desktop)</summary>

After this I started testing _Firefox for Desktop in version 49_.

##### Results:

![Screenshot 2021-04-01 at 11 50](https://user-images.githubusercontent.com/35265583/113313625-b5dcc580-930b-11eb-8f54-c0597d6c9e68.png)![Screenshot 2021-04-01 at 11 50-1](https://user-images.githubusercontent.com/35265583/113313649-bc6b3d00-930b-11eb-80b9-d2f9a942e970.png)
![Screenshot 2021-04-01 at 11 50-2](https://user-images.githubusercontent.com/35265583/113313729-d278fd80-930b-11eb-8fe4-4abf6c11ec11.png)
![Screenshot 2021-04-01 at 11 49](https://user-images.githubusercontent.com/35265583/113313858-f63c4380-930b-11eb-8ec8-8dccf3003f0a.png)
![Screenshot 2021-04-01 at 11 51-2](https://user-images.githubusercontent.com/35265583/113313905-03f1c900-930c-11eb-888b-0b8c97b0da50.png)

The photos show that the browser in itself works reasonably well as it should, but that a number of small points do not work properly.

First you can see that the heart in the 'save' button does not work in this older browser. Fortunately, this is not a disaster as the text 'save' has already been added, so that the user still knows what the button is for.

Then the live input of the user works, but it turns out that the CSS position absolute does not work. From [caniuse.com - position: absolute](https://caniuse.com/?search=position%3A%20absolute), it turns out that this is because position absolute doesn't work on flex children. This is also the reason that the text will still be placed 'next to' the element. This is something I hadn't taken into account in my code. The main point is that when the user wants to make a white color as a print, the text also disappears completely because the live input does work. The best way to fix this is to put the text below the SVG so that it is still visible to the user and the live input still works, just not visible on the T-shirt itself.

Finally, it can be seen that the layout is not quite visible on the design page. In retrospect, this is not because the browser does not support it, but because I myself forgot something in my code (namely adding space-between). According to [caniuse.com - space-between](https://caniuse.com/?search=space-between), this is also simply supported in this browser.

##### Conclusion:

There are a number of minor code errors that I made that prevented this test from working properly. The most important is the position absolute that will be placed next to the element instead of over it. With those other flaws it is not a disaster to go through the process, but with the live input the experience for the user actually deteriorates.

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Safari iOs mobile (Mobile)</summary>

After testing in the browsers on desktop, I decided to take a look at the mobile browsers. First I looked at _Safari iOS mobile version 9.0_.

##### Results:

![Screenshot 2021-04-01 at 11 44](https://user-images.githubusercontent.com/35265583/113284553-16f3a180-92ea-11eb-9ad8-0d50a7a5dce7.png)![Screenshot 2021-04-01 at 11 46-3](https://user-images.githubusercontent.com/35265583/113284563-18bd6500-92ea-11eb-96ff-9fe7d0c2e8e4.png)![Screenshot 2021-04-01 at 11 44-1](https://user-images.githubusercontent.com/35265583/113285025-bd3fa700-92ea-11eb-8c8c-a420d881255f.png)![Screenshot 2021-04-01 at 11 45-1](https://user-images.githubusercontent.com/35265583/113284554-178c3800-92ea-11eb-9086-4df90d847800.png)![Screenshot 2021-04-01 at 11 45](https://user-images.githubusercontent.com/35265583/113284556-1824ce80-92ea-11eb-9d6a-ec98ebf9a45b.png)![Screenshot 2021-04-01 at 11 46](https://user-images.githubusercontent.com/35265583/113284566-1955fb80-92ea-11eb-8851-8ee98288957d.png)![Screenshot 2021-04-01 at 11 46-1](https://user-images.githubusercontent.com/35265583/113284558-1824ce80-92ea-11eb-9722-2b3762958c5f.png)![Screenshot 2021-04-01 at 11 46-2](https://user-images.githubusercontent.com/35265583/113284559-18bd6500-92ea-11eb-812d-c518e6c4009e.png)

The photos show that a lot more goes wrong with safari iOS mobile. First you can see that the SVG files are not available on the home page. At first thought that is crazy since they are available on the design page. In addition, [caniuse.com - SVG](https://caniuse.com/?search=svg) states that basic SVG files should be available in safari on iOS version 9.0. After some research, this turns out to be because I am using _aria role img_ on the SVG's on the home page. This normally ensures that screen readers do not have to go through the entire path but can simply read the aria label. The thing is, this is not supported within every version of Safari iOS. The advantage is that there is an h3 present, so in principle it does not matter here that the SVG is not present. It would have been better to use images, especially because a svg within an img tag is better supported. But the disadvantage is that if someone has images switched off, this image is of course not visible to the user.

In addition, there is another point that stands out: the localStorage & live input both do not work. According to [caniuse.com - localStorage](https://caniuse.com/?search=localstorage), localStorage & the querySelector should work. After some research, this was because ES6 is not fully supported within this and older versions of safari on iOS mobile. This problem could be solved by, for example, checking if var would work. The only disadvantage is that on [caniuse.com - var](https://caniuse.com/?search=var) it is not known whether var would work, so it should be tested first.

##### Conclusion:

The conclusion that can be drawn from this is to pay particular attention to the consistency of how I write code (with the SVG's) and perhaps add it as images with alt text anyway. This so that it is still accessible to relatively more people.

In addition, I do believe that 'const' is largely supported. Also, I personally believe that it would be less bad if this enhancement would not work: The user can still achieve his goal as those points are in the pleasurable layer.

</details>

<details style="margin: 1em 0;">
  <summary style="margin: 1em 0;">Android Chrome (Mobile)</summary>

The last browser test I ran is the browser test in _chrome for android version 8.0_.

##### Results:

![Screenshot 2021-04-01 at 16 15](https://user-images.githubusercontent.com/35265583/113311741-e91e5500-9309-11eb-99e9-0d1928584aac.png)![Screenshot 2021-04-01 at 16 15-1](https://user-images.githubusercontent.com/35265583/113311782-f20f2680-9309-11eb-8aa8-5f9aa5221c77.png)![Screenshot 2021-04-01 at 16 16-1](https://user-images.githubusercontent.com/35265583/113311815-fa676180-9309-11eb-93f8-201b1630eab0.png)![Screenshot 2021-04-01 at 16 16](https://user-images.githubusercontent.com/35265583/113311854-02270600-930a-11eb-86ce-9b71ee4b0cdf.png)![Screenshot 2021-04-01 at 16 16-2](https://user-images.githubusercontent.com/35265583/113311882-094e1400-930a-11eb-80e3-ce1b9369b736.png)![Screenshot 2021-04-01 at 16 16-3](https://user-images.githubusercontent.com/35265583/113311899-0d7a3180-930a-11eb-8b08-3a71e5f4f7a5.png)![Screenshot 2021-04-01 at 16 17](https://user-images.githubusercontent.com/35265583/113311915-10752200-930a-11eb-87b9-975e85839733.png)

The photos show that everything works as intended. Even the input fields on the design page are full width. But localStorage is also present and the live input works when the user adjusts something to the design.

##### Conclusion:

Despite the fact that this browser is not yet extremely old (release date: 2017), chrome for Android is already quite a lot supported.

</details>

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
 -->
