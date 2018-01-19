const diagram = document.querySelector('.diagram');

const fixRoomTooltips = roomTooltips => {
    // const roomTooltips = document.querySelectorAll('.floor__label');
    roomTooltips.forEach(fl => {
        fl.style.left = `${diagram.scrollLeft + 12}px`;
    });
};
const showHideRoomTooltips = roomTooltips => {
    roomTooltips.forEach(rt => {
        if (diagram.scrollLeft < 180) {
            rt.style.visibility = 'hidden';
            rt.style.opacity = '0';
        } else {
            rt.style.visibility = 'visible';
            rt.style.opacity = '1';
        }
    });
};
const handleTooltips = () => {
    const roomTooltips = document.querySelectorAll('.room__tooltip');
    showHideRoomTooltips(roomTooltips);
    fixRoomTooltips(roomTooltips);
};

diagram.addEventListener('scroll', handleTooltips);
// .meeting-tooltip-triangle--visible,
// .meeting-tooltip--visible
const handleMeetingClick = e => {
    if (document.body.offsetWidth >= 960) {
        return;
    }
    const allRoomMeetings = document.querySelectorAll('.js-room-meeting-busy');

    allRoomMeetings.forEach(m => {
        m
            .querySelector('.js-meeting-tooltip-triangle')
            .classList.remove('meeting-tooltip-triangle--visible');
        m
            .querySelector('.js-meeting-tooltip')
            .classList.remove('meeting-tooltip--visible');
    });
    if (e.target.classList.contains('js-room-meeting-busy')) {
        e.target
            .querySelector('.js-meeting-tooltip-triangle')
            .classList.add('meeting-tooltip-triangle--visible');
        e.target
            .querySelector('.js-meeting-tooltip')
            .classList.add('meeting-tooltip--visible');
    }
};
window.addEventListener('click', handleMeetingClick);
