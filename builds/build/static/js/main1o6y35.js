'use strict';

// if (window.NodeList && !NodeList.prototype.forEach) {
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (let i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }
var diagram = document.querySelector('.diagram');
var setVerticalBarsHeigth = function setVerticalBarsHeigth() {
    var floorsBlock = document.querySelector('.floors');
    var floorsBlockHeight = parseInt(window.getComputedStyle(floorsBlock).height, 10);
    var currHourLabelVerticalOffset = document.body.offsetWidth < 960 ? 8 : 16;
    var hoursBarStyle = document.createElement('style');
    hoursBarStyle.innerHTML = '.hours__bar {height: ' + floorsBlockHeight + 'px;} .diagram__curr-time-label::after { height: ' + (floorsBlockHeight + currHourLabelVerticalOffset) + 'px;}';
    document.body.appendChild(hoursBarStyle);
};
var fixFloorLabels = function fixFloorLabels() {
    if (document.body.offsetWidth >= 960) {
        return;
    }
    var floorLabels = document.querySelectorAll('.floor__label');
    floorLabels.forEach(function (fl) {
        fl.style.left = diagram.scrollLeft + 16 + 'px';
    });
};
diagram.addEventListener('scroll', fixFloorLabels);
window.addEventListener('resize', setVerticalBarsHeigth);
document.addEventListener('DOMContentLoaded', setVerticalBarsHeigth);

// fix  vertical bars heights on diagram change
var observer = new MutationObserver(setVerticalBarsHeigth);
observer.observe(diagram, { childList: true });
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
"use strict";
'use strict';

var diagram = document.querySelector('.diagram');

var fixRoomTooltips = function fixRoomTooltips(roomTooltips) {
    // const roomTooltips = document.querySelectorAll('.floor__label');
    roomTooltips.forEach(function (fl) {
        fl.style.left = diagram.scrollLeft + 12 + 'px';
    });
};
var showHideRoomTooltips = function showHideRoomTooltips(roomTooltips) {
    roomTooltips.forEach(function (rt) {
        if (diagram.scrollLeft < 180) {
            rt.style.visibility = 'hidden';
            rt.style.opacity = '0';
        } else {
            rt.style.visibility = 'visible';
            rt.style.opacity = '1';
        }
    });
};
var handleTooltips = function handleTooltips() {
    var roomTooltips = document.querySelectorAll('.room__tooltip');
    showHideRoomTooltips(roomTooltips);
    fixRoomTooltips(roomTooltips);
};

diagram.addEventListener('scroll', handleTooltips);
// .meeting-tooltip-triangle--visible,
// .meeting-tooltip--visible
var handleMeetingClick = function handleMeetingClick(e) {
    if (document.body.offsetWidth >= 960) {
        return;
    }
    var allRoomMeetings = document.querySelectorAll('.js-room-meeting-busy');

    allRoomMeetings.forEach(function (m) {
        m.querySelector('.js-meeting-tooltip-triangle').classList.remove('meeting-tooltip-triangle--visible');
        m.querySelector('.js-meeting-tooltip').classList.remove('meeting-tooltip--visible');
    });
    if (e.target.classList.contains('js-room-meeting-busy')) {
        e.target.querySelector('.js-meeting-tooltip-triangle').classList.add('meeting-tooltip-triangle--visible');
        e.target.querySelector('.js-meeting-tooltip').classList.add('meeting-tooltip--visible');
    }
};
window.addEventListener('click', handleMeetingClick);