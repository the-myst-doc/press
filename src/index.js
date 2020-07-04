import './index.less';
import PageContent from './text.js';
import Parchment from '../img/parchment_repeating.jpg';

$(document).ready(() => {
    $('#page').append(PageContent.join('<p>'));
});