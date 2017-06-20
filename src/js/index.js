import {step1Init} from './steps/step-1';
import {step2Init} from './steps/step-2';
import {step3Init} from './steps/step-3';
import {step4Init} from './steps/step-4';
import {step5Init} from './steps/step-5';
import {stepClose} from './steps/step-close';

const stepsAnimation = () => {
    let mainBlock = document.getElementById('js-tutorial-wrapper'),
        stepItem = document.getElementsByClassName('tutorial__item'),
        btnStep = document.getElementById('js-link-next'),
        defaultPosition = mainBlock.getBoundingClientRect().left,
        stepWidth = stepItem[0].offsetWidth,
        counter = document.getElementById('js-counter'),
        stepCount = stepItem.length,
        stepTotalWidth = stepCount * stepWidth;
        mainBlock.style.width = `${stepTotalWidth}px`;

    step1Init();

    btnStep.addEventListener('click', function () {
        let step2 = document.getElementsByClassName('step-2')[0],
            step1 = document.getElementsByClassName('step-1')[0],
            step3 = document.getElementsByClassName('step-3')[0],
            step4 = document.getElementsByClassName('step-4')[0],
            step5 = document.getElementsByClassName('step-5')[0];

        if (step1.getBoundingClientRect().left === defaultPosition) {
            step2Init();
        }
        if (step2.getBoundingClientRect().left === defaultPosition) {
            step3Init();
        }
        if (step3.getBoundingClientRect().left === defaultPosition) {
            step4Init();
        }
        if (step4.getBoundingClientRect().left === defaultPosition - 60) {
            step5Init();
        }
        if (step5.getBoundingClientRect().left === defaultPosition) {
            stepClose();
        }
    });
};
stepsAnimation();

document.getElementById('js-close').addEventListener('click', function () {
    TweenMax.to(document.getElementsByClassName('tutorial')[0], 0.6, {
        display: 'none'
    });
});




