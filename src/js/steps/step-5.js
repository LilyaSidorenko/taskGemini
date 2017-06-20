import {enabledButton} from '../settings/enabled-button';
import {swapSlides} from '../settings/swap-slides';

export const step5Init = () => {
    let mediaIcons = document.getElementById('js-media-items'),
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
        swapSlides(0, 0, 3);

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
                opacity: 0,
            }, {
                opacity: 1,
            });
        });
        let timeLite = new TimelineLite({paused: true});
        timeLite.set(autoIcon[0], {attr: {src: 'assets/icons/1-selected.png'}}, 1);
        timeLite.set(autoIcon[9], {attr: {src: 'assets/icons/9-selected.png'}}, 1);
        TweenLite.to(timeLite, 1.5, {progress: 1, ease: Power2.easeInOut});

    }, 500);
    enabledButton(2000);
};