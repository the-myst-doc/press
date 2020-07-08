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

let loaded = 0;

$(document).ready(() => {
    const pageContent$ = $('#page-content');
    const rand$ = $('#img-rand');
    const robyn$ = $('#img-robyn');
    const philip$ = $('#img-philip');

    pageContent$.html(PageContent.join('<p>'));
    const bottomLink$ = pageContent$.find('a').last();

    function updateSpacers() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        const heightDelta = bottomLink$.position().top - rand$.position().top;
        $('.spacer.dynamic').css('height', heightDelta / 2 - 410);
    }

    $(window)
        .on('resize focus', () => { if (loaded === 3) updateSpacers() })

    const onLoad = () => {
        loaded += 1;
        if (loaded === 3) { // Only after all images have loaded
            updateSpacers();
        }
    }
    [rand$, robyn$, philip$].map((img$) => img$.on('load', onLoad));

    loadAsset($('#logo'), MystLogo);
    loadAsset($('#typewriter'), Typewriter);
    loadAsset(rand$, Rand);
    loadAsset(robyn$, Robyn);
    loadAsset(philip$, Philip);
});