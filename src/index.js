import './index.less';
import PageContent from './text.js';
import Parchment from '../img/parchment_repeating.jpg';
import MystLogo from '../img/myst_logo.png';
import Typewriter from '../img/typewriter.png';
import Rand from '../img/rand.png';
import Robyn from '../img/robyn.png';
import Philip from '../img/philip.png';

// Load assets dynamically
function loadAsset(el$, asset, attr = 'src') {
    el$.attr(attr, `./dist/${asset}`);
}

let loaded = false;

$(document).ready(() => {
    const page$ = $('#page');
    const rand$ = $('#img-rand');
    const robyn$ = $('#img-robyn');
    const philip$ = $('#img-philip');

    page$.append(PageContent.join('<p>'));
    const bottomLink$ = page$.find('a').last();

    function updateSpacers() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        const heightDelta = bottomLink$.position().top - rand$.position().top;
        $('.spacer.dynamic').css('height', heightDelta / 2 - 410);

    }

    $(window)
        .on('resize focus', () => { if (loaded) updateSpacers() })
        .on('orientationchange', () => window.location.reload());

    philip$.on('load', () => {
        loaded = true;
        updateSpacers();
    });

    loadAsset($('#logo'), MystLogo);
    loadAsset($('#typewriter'), Typewriter);
    loadAsset(rand$, Rand);
    loadAsset(robyn$, Robyn);
    loadAsset(philip$, Philip);
});