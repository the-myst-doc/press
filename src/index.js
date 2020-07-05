import './index.less';
import PageContent from './text.js';
import Parchment from '../img/parchment_repeating.jpg';
import MystLogo from '../img/myst_logo.png';
import Typewriter from '../img/typewriter.png';
import Rand from '../img/rand.png';
import Robyn from '../img/robyn.png';
import Philip from '../img/philip.png';

// Load assets dynamically
function loadAsset(el, asset, attr = 'src') {
    $(el).attr(attr, `./dist/${asset}`);
}

$(document).ready(() => {
    $('#page').append(PageContent.join('<p>'));

    loadAsset('#logo', MystLogo);
    loadAsset('#typewriter', Typewriter);
    loadAsset('#img-rand', Rand);
    loadAsset('#img-robyn', Robyn);
    loadAsset('#img-philip', Philip);
});