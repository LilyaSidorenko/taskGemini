import {enabledButton} from '../settings/enabled-button';
import {swapSlides} from '../settings/swap-slides';

export const step3Init = () => {
    enabledButton(2000);

    let shadowElems = document.getElementById('js-image-shadow'),
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
                y: -480 - (i * 80)
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
        swapSlides(0, 0, 1);

    }, 1500);
};