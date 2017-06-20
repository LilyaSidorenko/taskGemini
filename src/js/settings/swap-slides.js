export const swapSlides = (number, speed, count) => {
    let mainBlock = document.getElementById('js-tutorial-wrapper'),
        stepItem = document.getElementsByClassName('tutorial__item'),
        generalWrap = document.getElementsByClassName('tutorial')[0],
        btnStep = document.getElementById('js-link-next'),
        defaultPosition = mainBlock.getBoundingClientRect().left,
        stepWidth = stepItem[0].offsetWidth,
        counter = document.getElementById('js-counter'),
        stepCount = stepItem.length,
        stepTotalWidth = stepCount * stepWidth;
    (count < ( stepCount - 1) ) ? count++ : count = 0;
    TweenMax.to(mainBlock, speed, {x: '-' + ( stepWidth * count + number)});
    counter.innerHTML = (++count).toString();
};