export const stepClose = () => {
    let autoselect = document.getElementById('js-autoselect'),
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