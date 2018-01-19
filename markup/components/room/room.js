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
