// if (window.NodeList && !NodeList.prototype.forEach) {
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (let i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }
const diagram = document.querySelector('.diagram');
const setVerticalBarsHeigth = () => {
    const floorsBlock = document.querySelector('.floors');
    const floorsBlockHeight = parseInt(
        window.getComputedStyle(floorsBlock).height,
        10
    );
    const currHourLabelVerticalOffset =
        document.body.offsetWidth < 960 ? 8 : 16;
    const hoursBarStyle = document.createElement('style');
    hoursBarStyle.innerHTML = `.hours__bar {height: ${floorsBlockHeight}px;} .diagram__curr-time-label::after { height: ${floorsBlockHeight +
        currHourLabelVerticalOffset}px;}`;
    document.body.appendChild(hoursBarStyle);
};
const fixFloorLabels = () => {
    if (document.body.offsetWidth >= 960) {
        return;
    }
    const floorLabels = document.querySelectorAll('.floor__label');
    floorLabels.forEach(fl => {
        fl.style.left = `${diagram.scrollLeft + 16}px`;
    });
};
diagram.addEventListener('scroll', fixFloorLabels);
window.addEventListener('resize', setVerticalBarsHeigth);
document.addEventListener('DOMContentLoaded', setVerticalBarsHeigth);

// fix  vertical bars heights on diagram change
let observer = new MutationObserver(setVerticalBarsHeigth);
observer.observe(diagram, { childList: true });
