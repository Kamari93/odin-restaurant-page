/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n\n    const phoneNumber = document.createElement('p');\n    phoneNumber.textContent = '📞 (111)-235-81321';\n\n    const address = document.createElement('p')\n    address.textContent = '🏠 37112, Travis Ave, Houston TX';\n\n    // const restaurantLocation = document.createElement('p');\n    // restaurantLocation.textContent = <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.3542295070497!2d-95.38297748941245!3d29.73845977497515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf6e31da40df%3A0xe8f8a11e6640abf5!2s3711%20Travis%20St%2C%20Houston%2C%20TX%2077002!5e0!3m2!1sen!2sus!4v1698159040086!5m2!1sen!2sus\" width=\"400\" height=\"300\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>;\n    const restaurantLocation = document.createElement('img');\n    restaurantLocation.src = 'images/location.png';\n    restaurantLocation.alt = 'LOFI & FLAPJACKS restaurant location';\n\n    contact.appendChild(phoneNumber)\n    contact.appendChild(address)\n    contact.appendChild(restaurantLocation)\n\n    return contact;\n};\n\nfunction loadContact() {\n    const main = document.getElementById('main')\n    main.textContent = ''\n    main.appendChild(createContact())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n    const home = document.createElement('div');\n    home.classList.add('home');\n\n    const homeImage = document.createElement('img');\n    homeImage.src = 'images/horn.png';\n    homeImage.alt = 'Blueberry pancakes';\n\n    home.appendChild(createParagraph(`Don't Panic It's Organic!`));\n    home.appendChild(createParagraph(' A delicous assortment of freshly made to order pancakes topped with your choice of organically grown fruit and coupled with relaxing live music.'));\n    home.appendChild(homeImage);\n    home.appendChild(createParagraph(\"Order online or visit us!\"));\n\n    return home;\n};\n\nfunction createHeaderOne(text) {\n    const header = document.createElement('h1');\n    header.textContent = text;\n    return header;\n};\n\nfunction createParagraph(text) {\n    const paragraph = document.createElement('p');\n    paragraph.textContent = text;\n    return paragraph;\n};\n\nfunction loadHome() {\n    // the main var will change later id content -> main\n    const main = document.getElementById('main');\n    main.textContent = '';\n    main.appendChild(createHome());\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\nconsole.log(\"Keep Going 🍊 🌊...\")\n;\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"menu\");\n\n    menu.append(createMenuItem(\n        'Blueberry Coconut',\n        `Dive into a tropical paradise with our Blueberry Coconut Buttermilk Pancakes.`\n    ));\n    menu.append(createMenuItem(\n        'Banana Nut Fudge',\n        `Experience the perfect fusion of sweet, ripe bananas and rich, nutty peanut fudge in every bite.`\n    ));\n    menu.append(createMenuItem(\n        `Blackberry Buttermilk`,\n        `A delightful blend of tangy blackberries and fluffy buttermilk pancakes. A burst of berry goodness in every bite!`\n    ));\n    menu.append(createMenuItem(\n        'Buttermilk Classic',\n        `These golden gems are light, airy, and absolutely timeless.`\n    ));\n    menu.append(createMenuItem(\n        'Mixedberry Buttermilk',\n        `Our fluffy buttermilk pancakes are generously studded with a medley of sweet and tart mixed berries.`\n    ));\n    menu.append(createMenuItem(\n        `Orange Marmalade`,\n        `Our light, fluffy pancakes are crowned with a zesty orange topping and a dollop of citrusy marmalad.`\n    ));\n    menu.append(createMenuItem(\n        `Apple Caramel Nut`,\n        `These pancakes are a warm, comforting indulgence featuring tender apples, gooey caramel, a hint of cinnamon, and a satisfying crunch of walnuts.`\n    ));\n    menu.append(createMenuItem(\n        `Walnut Buttermilk`,\n        `These golden, fluffy pancakes are generously sprinkled with crunchy walnuts.`\n    ));\n    menu.append(createMenuItem(\n        `Wildberry Buttermilk`,\n        `Each stack features our signature fluffy buttermilk pancakes loaded with a vibrant mix of wildberries, creating a sweet and tangy symphony in every mouthful.`\n    ));\n    menu.append(createMenuItem(\n        `Strawberry Hazelnut`,\n        `Our fluffy pancakes are lavishly adorned with succulent strawberries and a sprinkle of toasted hazelnuts.`\n    ));\n\n    return menu;\n};\n\nfunction createMenuItem(name, description) {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n\n    const foodName = document.createElement(\"h6\");\n    foodName.textContent = name;\n\n    const foodDescription = document.createElement(\"p\");\n    foodDescription.textContent = description;\n\n    const imageContainer = document.createElement('div')\n    const foodImage = document.createElement(\"img\");\n    // split the original string at the space character (' ') using split(' '), which returns an array containing both parts. Then, we select the first element (index 0)\n    foodImage.src = `images/pancakes/${name.split(' ')[0].toLowerCase()}.png`;\n    foodImage.alt = `${name}`;\n    // imageContainer.appendChild(foodImage);\n\n    menuItem.appendChild(foodImage);\n    // menuItem.appendChild(imageContainer);\n    menuItem.appendChild(foodName);\n    menuItem.appendChild(foodDescription);\n\n    return menuItem;\n};\n\nfunction loadMenu() {\n    const main = document.getElementById(\"main\");\n    main.textContent = \"\";\n    main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n\n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.classList.add(\"restaurant-name\");\n    restaurantName.textContent = `LOFI & FLAPJACKS`;\n\n    header.appendChild(restaurantName);\n    header.appendChild(createNav());\n\n    return header;\n};\n\nfunction createNav() {\n    const nav = document.createElement(\"nav\");\n\n    // home tab\n    const homeButton = document.createElement(\"button\");\n    homeButton.classList.add(\"button-nav\");\n    homeButton.textContent = \"Home\";\n\n    homeButton.addEventListener(\"click\", (e) => {\n        // If the button is already \"active,\" no action is taken since alrdy rendered.\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(homeButton);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    // menu tab\n    const menuButton = document.createElement(\"button\");\n    menuButton.classList.add(\"button-nav\");\n    menuButton.textContent = \"Menu\";\n\n    menuButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(menuButton);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    // contact tab\n    const contactButton = document.createElement(\"button\");\n    contactButton.classList.add(\"button-nav\");\n    contactButton.textContent = \"Contact\";\n\n    contactButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(contactButton);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n\n    nav.appendChild(homeButton);\n    nav.appendChild(menuButton);\n    nav.appendChild(contactButton);\n    return nav;\n};\n\nfunction setActiveButton(button) {\n    // select all btns (tabs)\n    const buttons = document.querySelectorAll(\".button-nav\");\n\n    // for all unselected btns (tabs) remove the active class\n    buttons.forEach((button) => {\n        if (button !== this) {\n            button.classList.remove(\"active\");\n        }\n    });\n\n    // add the active class to the selected btn (tab)\n    button.classList.add(\"active\");\n}\n\nfunction createMain() {\n    const main = document.createElement(\"main\");\n    main.classList.add(\"main\");\n    main.setAttribute(\"id\", \"main\");\n    return main;\n};\n\nfunction createFooter() {\n    const footer = document.createElement(\"footer\");\n    footer.classList.add(\"footer\");\n\n    const copyright = document.createElement(\"p\");\n    copyright.textContent = `Copyright © ${new Date().getFullYear()} Kamari93`;\n\n    const githubLink = document.createElement(\"a\");\n    githubLink.href = 'https://github.com/Kamari93';\n\n    const githubIcon = document.createElement(\"i\");\n    githubIcon.classList.add(\"fab\");\n    githubIcon.classList.add(\"fa-github\");\n\n    githubLink.appendChild(githubIcon);\n    footer.appendChild(copyright);\n    footer.appendChild(githubLink);\n\n    return footer;\n}\n\nfunction initializeWebsite() {\n    const content = document.getElementById(\"content\");\n\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    setActiveButton(document.querySelector(\".button-nav\"));\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://odin-restaurant-page/./src/website.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;