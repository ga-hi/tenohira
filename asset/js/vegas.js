jQuery(function ($) {
    $('.slider').vegas({
        transitionDuration: 5000,
        animationDuration: 14000,
        delay: 6000,
        timer: false,
        animation: 'random',
        overlay: 'asset/js/vegas/overlays/07.png',
        shuffle: true,
        slides: [
            { src: 'asset/images/top/massage_fix.jpg' },
            { src: 'asset/images/top/massage002_fix.jpg' },
            { src: 'asset/images/top/massage003_fix.jpg' },
            { src: 'asset/images/top/massage004_fix.jpg' },
            { src: 'asset/images/top/neko_fix.jpg' }
        ]
    });
});