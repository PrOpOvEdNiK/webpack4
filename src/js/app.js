import "../sass/style.scss";

import * as f from "./modules/functions";

const APP = 'WEBPACK4_BOILERPLATE: ';

window.$ = window.jQuery = $;

$(document).ready(function ($) {
    if (!f.isMobile()) {
        f.delay(500).then(
            () => {
                $('<div></div>', {
                    class: 'main',
                    text: APP + 'This is not a mobile!'
                }).appendTo('#app');
            }
        );
    }

    console.log($.fn.jquery);
});

