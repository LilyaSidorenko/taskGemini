/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var enabledButton = exports.enabledButton = function enabledButton(val) {
    document.getElementById('js-link-next').classList.add('tutorial__link_disabled');
    setTimeout(function () {
        document.getElementById('js-link-next').classList.remove('tutorial__link_disabled');
    }, val);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var swapSlides = exports.swapSlides = function swapSlides(number, speed, count) {
    var mainBlock = document.getElementById('js-tutorial-wrapper'),
        stepItem = document.getElementsByClassName('tutorial__item'),
        generalWrap = document.getElementsByClassName('tutorial')[0],
        btnStep = document.getElementById('js-link-next'),
        defaultPosition = mainBlock.getBoundingClientRect().left,
        stepWidth = stepItem[0].offsetWidth,
        counter = document.getElementById('js-counter'),
        stepCount = stepItem.length,
        stepTotalWidth = stepCount * stepWidth;
    count < stepCount - 1 ? count++ : count = 0;
    TweenMax.to(mainBlock, speed, { x: '-' + (stepWidth * count + number) });
    counter.innerHTML = (++count).toString();
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.step1Init = undefined;

var _enabledButton = __webpack_require__(0);

var step1Init = exports.step1Init = function step1Init() {
    var timeLite = new TimelineLite({ paused: true }),
        img = document.getElementById('js-animate-logo');

    for (var source = 0; source <= 120; source++) {
        var validSource = source < 10 ? '00' + source : source < 100 ? '0' + source : source;
        timeLite.set(img, { attr: { src: 'assets/animation/' + validSource + '.png' } }, source);
    }

    TweenLite.to(timeLite, 3, { progress: 1, ease: Power1.easeInOut });
    (0, _enabledButton.enabledButton)(2000);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.step2Init = undefined;

var _enabledButton = __webpack_require__(0);

var _swapSlides = __webpack_require__(1);

var step2Init = exports.step2Init = function step2Init() {
    (0, _swapSlides.swapSlides)(0, 0.2, 0);
    (0, _enabledButton.enabledButton)(1200);

    var shadowElems = document.getElementById('js-image-shadow');
    var shadowElem = shadowElems.getElementsByClassName('step-2__shadow');

    [].forEach.call(shadowElem, function (element, i) {
        TweenMax.to(element, 1, {
            ease: Power2.easeInOut,
            y: -i * 4 + 30
        });
    });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.step3Init = undefined;

var _enabledButton = __webpack_require__(0);

var _swapSlides = __webpack_require__(1);

var step3Init = exports.step3Init = function step3Init() {
    (0, _enabledButton.enabledButton)(2000);

    var shadowElems = document.getElementById('js-image-shadow'),
        shadowElem = shadowElems.querySelectorAll('div, img'),
        shadowText = document.getElementsByClassName('step-2')[0].querySelectorAll('h1,p'),
        hideText = document.getElementById('js-appearance-text'),
        rotationPhotos = document.getElementById('js-rotate-photos'),
        rotationPhoto = rotationPhotos.querySelectorAll('img');

    TweenMax.fromTo(document.getElementById('js-changing-text'), 2, {
        opacity: 0
    }, {
        opacity: 1,
        innerHTML: 'Now it Even...'
    });

    setTimeout(function () {
        [].forEach.call(shadowElem, function (element, i) {
            TweenMax.to(element, 2, {
                ease: Power2.easeInOut,
                y: -480 - i * 80
            });
        });
        [].forEach.call(shadowText, function (element) {
            TweenMax.to(element, 2, {
                opacity: 0
            });
        });
    }, 500);

    setTimeout(function () {
        TweenMax.fromTo(hideText, 2, {
            opacity: 0
        }, {
            opacity: 1
        });
        TweenMax.fromTo(rotationPhoto[0], 1, {
            top: '-260px',
            position: 'absolute',
            left: '160px',
            rotation: -8

        }, {
            top: '30px',
            left: '-60px',
            rotation: -4
        });
        TweenMax.fromTo(rotationPhoto[1], 1, {
            top: '-260px',
            position: 'absolute',
            left: '160px',
            rotation: 18

        }, {
            top: '30px',
            left: '210px',
            rotation: 4
        });
        TweenMax.fromTo(rotationPhoto[2], 1, {
            top: '-260px',
            position: 'absolute',
            left: '160px',
            rotation: -18

        }, {
            top: '30px',
            left: '480px',
            rotation: -4
        });
        (0, _swapSlides.swapSlides)(0, 0, 1);
    }, 1500);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.step4Init = undefined;

var _enabledButton = __webpack_require__(0);

var _swapSlides = __webpack_require__(1);

var step4Init = exports.step4Init = function step4Init() {
    (0, _enabledButton.enabledButton)(1500);

    var rotationPhotos = document.getElementById('js-rotate-photos'),
        rotationPhoto = rotationPhotos.querySelectorAll('img'),
        linkText = document.getElementById('js-link-next'),
        itunesIcon = document.getElementById('js-itunes');

    linkText.classList.add('tutorial__link_light');

    setTimeout(function () {
        (0, _swapSlides.swapSlides)(60, 0.6, 2);

        TweenMax.fromTo(itunesIcon, 0.8, {
            rotation: 160
        }, {
            rotation: 0
        });
    }, 200);

    TweenMax.to(rotationPhoto[1], 1.5, {
        ease: Power2.easeInOut,
        x: -200,
        rotation: 15
    });
    TweenMax.to(rotationPhoto[2], 1.2, {
        ease: Power2.easeInOut,
        x: -450,
        rotation: 20
    });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.step5Init = undefined;

var _enabledButton = __webpack_require__(0);

var _swapSlides = __webpack_require__(1);

var step5Init = exports.step5Init = function step5Init() {
    var mediaIcons = document.getElementById('js-media-items'),
        mediaIcon = mediaIcons.querySelectorAll('img, h1, p'),
        autoselect = document.getElementById('js-autoselect'),
        mainText = document.getElementById('js-hiding-text'),
        autoIcons = document.getElementById('js-auto-icons'),
        autoIcon = autoIcons.querySelectorAll('img');

    TweenMax.to(mediaIcon[0], 1, {
        ease: Power2.easeInOut,
        opacity: 0,
        width: 120,
        x: 40
    });
    TweenMax.to(mediaIcon[1], 1, {
        ease: Power2.easeInOut,
        opacity: 0,
        width: 100,
        rotation: -100,
        x: -40
    });
    TweenMax.to(mediaIcon[2], 1, {
        ease: Power2.easeInOut,
        opacity: 0

    });
    TweenMax.to(mediaIcon[3], 1, {
        ease: Power2.easeInOut,
        opacity: 0
    });

    setTimeout(function () {
        (0, _swapSlides.swapSlides)(0, 0, 3);

        TweenMax.fromTo(autoselect, 0.5, {
            opacity: 0,
            zoom: 0.5
        }, {
            opacity: 1,
            zoom: 1.1
        });
        TweenMax.fromTo(mainText, 1, {
            opacity: 0,
            marginTop: -25
        }, {
            opacity: 1,
            marginTop: -15
        });

        [].forEach.call(autoIcon, function (element) {
            TweenMax.fromTo(element, 2, {
                opacity: 0
            }, {
                opacity: 1
            });
        });
        var timeLite = new TimelineLite({ paused: true });
        timeLite.set(autoIcon[0], { attr: { src: 'assets/icons/1-selected.png' } }, 1);
        timeLite.set(autoIcon[9], { attr: { src: 'assets/icons/9-selected.png' } }, 1);
        TweenLite.to(timeLite, 1.5, { progress: 1, ease: Power2.easeInOut });
    }, 500);
    (0, _enabledButton.enabledButton)(2000);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var stepClose = exports.stepClose = function stepClose() {
    var autoselect = document.getElementById('js-autoselect'),
        allItems = document.getElementsByClassName('step-5')[0].querySelectorAll('div'),
        generalWrap = document.getElementsByClassName('tutorial')[0];

    [].forEach.call(allItems, function (element) {
        TweenMax.to(element, 0.5, {
            opacity: 0,
            marginTop: -25
        });
    });
    TweenMax.to(autoselect, 0.5, {
        opacity: 0,
        zoom: 0.5

    });
    TweenMax.to(generalWrap, 0.5, {
        opacity: 0,
        zoom: 0
    });
};

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _step = __webpack_require__(2);

var _step2 = __webpack_require__(3);

var _step3 = __webpack_require__(4);

var _step4 = __webpack_require__(5);

var _step5 = __webpack_require__(6);

var _stepClose = __webpack_require__(7);

var stepsAnimation = function stepsAnimation() {
    var mainBlock = document.getElementById('js-tutorial-wrapper'),
        stepItem = document.getElementsByClassName('tutorial__item'),
        btnStep = document.getElementById('js-link-next'),
        defaultPosition = mainBlock.getBoundingClientRect().left,
        stepWidth = stepItem[0].offsetWidth,
        counter = document.getElementById('js-counter'),
        stepCount = stepItem.length,
        stepTotalWidth = stepCount * stepWidth;
    mainBlock.style.width = stepTotalWidth + 'px';

    (0, _step.step1Init)();

    btnStep.addEventListener('click', function () {
        var step2 = document.getElementsByClassName('step-2')[0],
            step1 = document.getElementsByClassName('step-1')[0],
            step3 = document.getElementsByClassName('step-3')[0],
            step4 = document.getElementsByClassName('step-4')[0],
            step5 = document.getElementsByClassName('step-5')[0];

        if (step1.getBoundingClientRect().left === defaultPosition) {
            (0, _step2.step2Init)();
        }
        if (step2.getBoundingClientRect().left === defaultPosition) {
            (0, _step3.step3Init)();
        }
        if (step3.getBoundingClientRect().left === defaultPosition) {
            (0, _step4.step4Init)();
        }
        if (step4.getBoundingClientRect().left === defaultPosition - 60) {
            (0, _step5.step5Init)();
        }
        if (step5.getBoundingClientRect().left === defaultPosition) {
            (0, _stepClose.stepClose)();
        }
    });
};
stepsAnimation();

document.getElementById('js-close').addEventListener('click', function () {
    TweenMax.to(document.getElementsByClassName('tutorial')[0], 0.6, {
        display: 'none'
    });
});

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map