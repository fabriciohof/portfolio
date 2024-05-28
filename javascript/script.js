function disableAOSonMobile() {
    if (window.innerWidth < 1200) {
        AOS.init({
            disable: true
        });
    } else {
        AOS.init();
    }
}

document.addEventListener('DOMContentLoaded', disableAOSonMobile);
window.addEventListener('resize', disableAOSonMobile)