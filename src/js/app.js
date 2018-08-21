import "../sass/style.scss";

import 'bootstrap';

import * as f from "./modules/functions";

const APP_CONTAINER = '#app';
const APP_NAME = 'WEBPACK4_BOILERPLATE: ';

window.$ = window.jQuery = $;

class App {
    constructor(name, container) {
        this.AppName = name;
        this.AppContainer = container;
        this.rowClass = 'main col-12';
    }

    hello() {
        $('<div></div>', {
            class: this.rowClass,
            text: this.AppName + 'Hello, world!'
        }).appendTo(this.AppContainer);
    }

    whichJquery() {
        $('<div></div>', {
            class: this.rowClass,
            text: this.AppName + 'jQuery version is: ' + $.fn.jquery
        }).appendTo(this.AppContainer);
    }

    isMobile() {
        let text = '';
        if (!f.isMobile()) {
            text = this.AppName + 'This is not a mobile!';
        } else {
            text = this.AppName + 'This is a mobile!';
        }
        $('<div></div>', {
            class: this.rowClass,
            text: text
        }).appendTo(this.AppContainer);
    }
}

let APP = new App(APP_NAME, APP_CONTAINER);

f.delay(1000).then(
    () => {
        APP.hello();
    }
);
f.delay(2000).then(
    () => {
        APP.whichJquery();
    }
);
f.delay(3000).then(
    () => {
        APP.isMobile();
    }
);

$(document).ready(function ($) {

});

