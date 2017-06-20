import {enabledButton} from '../settings/enabled-button';
import {swapSlides} from '../settings/swap-slides';

export const step2Init = () => {
    swapSlides(0, 0.2, 0);
    enabledButton(1200);

    let shadowElems = document.getElementById('js-image-shadow');
    let shadowElem = shadowElems.getElementsByClassName('step-2__shadow');

    [].forEach.call(shadowElem, function (element, i) {
        TweenMax.to(element, 1, {
            ease: Power2.easeInOut,
            y: - i * 4 + 30
        });
    });
};