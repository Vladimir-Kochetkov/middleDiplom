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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_headerModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/headerModal */ \"./src/modules/headerModal.js\");\n/* harmony import */ var _modules_servisesModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/servisesModal */ \"./src/modules/servisesModal.js\");\n/* harmony import */ var _modules_ourServices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ourServices */ \"./src/modules/ourServices.js\");\n/* harmony import */ var _modules_benefits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/benefits */ \"./src/modules/benefits.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_imgModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/imgModal */ \"./src/modules/imgModal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_headerModal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_servisesModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_ourServices__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_benefits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('25 march 2022');\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_imgModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/benefits.js":
/*!*********************************!*\
  !*** ./src/modules/benefits.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst benefits = () => {\r\n    const benefits = document.getElementById('benefits');\r\n    const benefitsItems = document.querySelectorAll('.benefits__item');\r\n\r\n    benefitsItems.forEach(item => {\r\n        item.classList.add('d-none');\r\n        item.style.maxWidth = '100%';\r\n    });\r\n\r\n    let count = 0;\r\n\r\n    if (window.screen.width < 576) {\r\n        benefitsItems[0].classList.add('service-active');\r\n        benefits.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            if (event.target.matches('[src=\"images/benefits/right-arrow.svg\"]')) {\r\n                benefitsItems[count].classList.remove('service-active');\r\n                count++;\r\n                if (count >= benefitsItems.length) {\r\n                    count = 0;\r\n                }\r\n                benefitsItems[count].classList.add('service-active');\r\n            } else if (event.target.matches('[src=\"images/benefits/left-arrow.svg\"]')) {\r\n                benefitsItems[count].classList.remove('service-active');\r\n                if (count === 0) {\r\n                    count = benefitsItems.length;\r\n                }\r\n                count--;\r\n                benefitsItems[count].classList.add('service-active');\r\n            }\r\n        });\r\n    } else if (window.screen.width > 576) {\r\n        for (let i = 0; i < 3; i++) {\r\n            benefitsItems[i].classList.add('service-active');\r\n        }\r\n        benefits.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            if (event.target.matches('[src=\"images/benefits/right-arrow.svg\"]')) {\r\n                benefitsItems[count].classList.remove('service-active');\r\n                benefitsItems[count + 1].classList.remove('service-active');\r\n                benefitsItems[count + 2].classList.remove('service-active');\r\n                count += 3;\r\n                if (count >= benefitsItems.length) {\r\n                    count = 0;\r\n                }\r\n                benefitsItems[count].classList.add('service-active');\r\n                benefitsItems[count + 1].classList.add('service-active');\r\n                benefitsItems[count + 2].classList.add('service-active');\r\n            } else if (event.target.matches('[src=\"images/benefits/left-arrow.svg\"]')) {\r\n                benefitsItems[count].classList.remove('service-active');\r\n                benefitsItems[count + 1].classList.remove('service-active');\r\n                benefitsItems[count + 2].classList.remove('service-active');\r\n                if (count <= 0) {\r\n                    count = benefitsItems.length;\r\n                }\r\n                count -= 3;\r\n                benefitsItems[count].classList.add('service-active');\r\n                benefitsItems[count + 1].classList.add('service-active');\r\n                benefitsItems[count + 2].classList.add('service-active');\r\n            }\r\n        });\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (benefits);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/benefits.js?");

/***/ }),

/***/ "./src/modules/headerModal.js":
/*!************************************!*\
  !*** ./src/modules/headerModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerModal = () => {\r\n    const modal = document.querySelector('.header-modal');\r\n    const overlay = document.querySelector('.overlay');\r\n    const btn = document.getElementsByClassName('btn')[1];\r\n    const closeBtn = document.querySelector('.header-modal__close');\r\n\r\n    btn.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        overlay.style.display = 'block';\r\n        modal.style.display = 'block';\r\n    });\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        overlay.style.display = 'none';\r\n        modal.style.display = 'none';\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerModal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/headerModal.js?");

/***/ }),

/***/ "./src/modules/imgModal.js":
/*!*********************************!*\
  !*** ./src/modules/imgModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst imgModal = () => {\r\n    const modal = document.getElementById('myModal');\r\n    const textCenter = document.querySelector('.text-center');\r\n    //const imgs = textCenter.querySelectorAll('.img-responsive'); //само изображение\r\n    let modalImg = document.getElementById(\"img01\");\r\n    const imgs = textCenter.querySelectorAll('.sertificate-document');\r\n\r\n    imgs.forEach(img => {\r\n        textCenter.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            modal.style.display = \"block\";\r\n            modalImg.src = img.href;\r\n        });\r\n    });\r\n\r\n    var span = document.getElementsByClassName(\"close\")[0];\r\n\r\n    span.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        modal.style.display = \"none\";\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imgModal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/imgModal.js?");

/***/ }),

/***/ "./src/modules/ourServices.js":
/*!************************************!*\
  !*** ./src/modules/ourServices.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ourServices = () => {\r\n    const serviceBlock = document.querySelectorAll('.service-block');\r\n    const services = document.getElementById('services');\r\n    const servicArrows = document.querySelector('.services__arrow--right');\r\n\r\n    serviceBlock.forEach(item => {\r\n        item.classList.add('d-none');\r\n    });\r\n\r\n    let count = 0;\r\n\r\n    if (window.screen.width < 576) {\r\n        serviceBlock[0].classList.add('service-active');\r\n        services.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            if (event.target.matches('[src=\"images/benefits/right-arrow.svg\"]')) {\r\n                serviceBlock[count].classList.remove('service-active');\r\n                count++;\r\n                if (count >= serviceBlock.length) {\r\n                    count = 0;\r\n                }\r\n                serviceBlock[count].classList.add('service-active');\r\n            } else if (event.target.matches('[src=\"images/benefits/left-arrow.svg\"]')) {\r\n                serviceBlock[count].classList.remove('service-active');\r\n                if (count === 0) {\r\n                    count = serviceBlock.length;\r\n                }\r\n                count--;\r\n                serviceBlock[count].classList.add('service-active');\r\n            }\r\n        });\r\n    } else if (window.screen.width > 576) {\r\n        serviceBlock[0].classList.add('service-active');\r\n        serviceBlock[1].classList.add('service-active');\r\n        services.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            if (event.target.matches('[src=\"images/benefits/right-arrow.svg\"]')) {\r\n                serviceBlock[count].classList.remove('service-active');\r\n                serviceBlock[count + 1].classList.remove('service-active');\r\n                count += 2;\r\n                if (count >= serviceBlock.length) {\r\n                    count = 0;\r\n                }\r\n                serviceBlock[count].classList.add('service-active');\r\n                serviceBlock[count + 1].classList.add('service-active');\r\n            } else if (event.target.matches('[src=\"images/benefits/left-arrow.svg\"]')) {\r\n                serviceBlock[count].classList.remove('service-active');\r\n                serviceBlock[count + 1].classList.remove('service-active');\r\n                if (count <= 0) {\r\n                    count = serviceBlock.length;\r\n                }\r\n                count -= 2;\r\n                serviceBlock[count].classList.add('service-active');\r\n                serviceBlock[count + 1].classList.add('service-active');\r\n            }\r\n        });\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ourServices);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/ourServices.js?");

/***/ }),

/***/ "./src/modules/servisesModal.js":
/*!**************************************!*\
  !*** ./src/modules/servisesModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst servisesModal = () => {\r\n    const serviceBtn = document.querySelectorAll('.service-button');\r\n    const servicesModal = document.querySelector('.services-modal');\r\n    const servicesClose = document.querySelector('.services-modal__close');\r\n    const overlay = document.querySelector('.overlay');\r\n\r\n    serviceBtn.forEach(btn => {\r\n        btn.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            overlay.style.display = 'block';\r\n            servicesModal.style.display = \"block\";\r\n        });\r\n    });\r\n\r\n    servicesClose.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        overlay.style.display = 'none';\r\n        servicesModal.style.display = \"none\";\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servisesModal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/servisesModal.js?");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n    const smoothScroll = document.querySelector('.smooth-scroll__img');\r\n\r\n    let scrollpos = window.scrollY;\r\n    const scrollChange = 560;\r\n\r\n    smoothScroll.classList.add('d-none');\r\n\r\n    window.addEventListener('scroll', function () {\r\n        scrollpos = window.scrollY;\r\n\r\n        if (scrollpos >= scrollChange) {\r\n            smoothScroll.classList.remove('d-none');\r\n        } else if (scrollpos <= scrollChange) {\r\n            smoothScroll.classList.add('d-none');\r\n        }\r\n    });\r\n\r\n    smoothScroll.addEventListener('click', () => {\r\n        window.scroll({\r\n            left: 0,\r\n            top: 0,\r\n            behavior: 'smooth'\r\n        });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/smoothScroll.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const days = document.querySelectorAll('.count_1>span');\r\n    const hours = document.querySelectorAll('.count_2>span');\r\n    const minutes = document.querySelectorAll('.count_3>span');\r\n    const seconds = document.querySelectorAll('.count_4>span');\r\n    const countdown = document.getElementsByClassName('countdown-text');\r\n\r\n    const getTimeRemaning = () => {\r\n        const addZero = elem => elem < 10 ? `0${elem}` : elem;\r\n\r\n        const dateStop = new Date(deadline).getTime();\r\n        const dateNow = new Date().getTime();\r\n        const timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n        if (dateStop <= dateNow) {\r\n            for (let i = 0; i < countdown.length; i++) {\r\n                countdown[i].childNodes[0].textContent = \"Акция закончилась!Ждите новых!!!\";\r\n            }\r\n        }\r\n\r\n        let days = addZero(Math.floor(timeRemaining / 60 / 60 / 24));\r\n        let hours = addZero(Math.floor(timeRemaining / 60 / 60) % 24);\r\n        let minutes = addZero(Math.floor((timeRemaining / 60) % 60));\r\n        let seconds = addZero(Math.floor(timeRemaining % 60));\r\n\r\n        if (dateStop < dateNow) {\r\n            days = addZero(0);\r\n            hours = addZero(0);\r\n            minutes = addZero(0);\r\n            seconds = addZero(0);\r\n            clearInterval(updateClock);\r\n        }\r\n\r\n        return { timeRemaining, days, hours, minutes, seconds };\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaning();\r\n        for (let i = 0; i < 2; i++) {\r\n            days[i].textContent = getTime.days;\r\n            hours[i].textContent = getTime.hours;\r\n            minutes[i].textContent = getTime.minutes;\r\n            seconds[i].textContent = getTime.seconds;\r\n        }\r\n        if (getTime.timeRemaining > 0) {\r\n            setTimeout(updateClock, 1000);\r\n        }\r\n    };\r\n    updateClock();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/timer.js?");

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