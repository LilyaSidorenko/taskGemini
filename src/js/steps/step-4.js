import {enabledButton} from '../settings/enabled-button';
import {swapSlides} from '../settings/swap-slides';

export const step4Init = () => {
    enabledButton(1500);

    let rotationPhotos = document.getElementById('js-rotate-photos'),
        rotationPhoto = rotationPhotos.querySelectorAll('img'),
        linkText = document.getElementById('js-link-next'),
        itunesIcon = document.getElementById('js-itunes');

    linkText.classList.add('tutorial__link_light');

    setTimeout(function () {
        swapSlides(60, 0.6, 2);

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