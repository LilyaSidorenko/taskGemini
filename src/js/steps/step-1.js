import {enabledButton} from '../settings/enabled-button';

export const step1Init = () => {
    window.onload = function() {

        let timeLite = new TimelineLite({paused: true}),
            img = document.getElementById('js-animate-logo');

        for (let source = 0; source <= 120; source++) {
            let validSource = (source < 10) ? (`00${source}`) : (source < 100) ? (`0${source}`) : source;
            timeLite.set(img, {attr: {src: `assets/animation/${validSource}.png`}}, source);
        }

        TweenLite.to(timeLite, 3, {progress: 1, ease: Power1.easeInOut});
        enabledButton(2000);
    };
};