// if (window.NodeList && !NodeList.prototype.forEach) {
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (let i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }

const diagram = document.querySelector('.diagram');
const floorsBlock = document.querySelector('.floors');
const floorsBlockHeight = parseInt(
    window.getComputedStyle(floorsBlock).height,
    10
);
const hoursBarStyle = document.createElement('style');
hoursBarStyle.innerHTML = `.hours__bar {height: ${floorsBlockHeight}px;} .diagram__curr-time-label::after { height: ${floorsBlockHeight +
    8}px;}`;
document.body.appendChild(hoursBarStyle);

const fixFloorLabels = () => {
    const floorLabels = document.querySelectorAll('.floor__label');
    floorLabels.forEach(fl => {
        fl.style.left = `${diagram.scrollLeft + 16}px`;
    });
};
diagram.addEventListener('scroll', fixFloorLabels);
