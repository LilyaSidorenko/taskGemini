export const enabledButton = (val) => {
    document.getElementById('js-link-next').classList.add('tutorial__link_disabled');
    setTimeout(function () {
        document.getElementById('js-link-next').classList.remove('tutorial__link_disabled');
    }, val);
};