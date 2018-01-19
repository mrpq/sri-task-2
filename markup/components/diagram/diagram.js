// if (window.NodeList && !NodeList.prototype.forEach) {
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (let i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }

const diagram = document.querySelector('.diagram');
const hoursBarStyle = document.createElement('style');
hoursBarStyle.innerHTML = `.hours__bar {height: ${
    window.getComputedStyle(diagram).height
};} .diagram__curr-time-label::after { height: ${
    window.getComputedStyle(diagram).height
};}`;
document.body.appendChild(hoursBarStyle);

const fixFloorLabels = () => {
    const floorLabels = document.querySelectorAll('.floor__label');
    floorLabels.forEach(fl => {
        fl.style.left = `${diagram.scrollLeft + 16}px`;
    });
};
diagram.addEventListener('scroll', fixFloorLabels);
