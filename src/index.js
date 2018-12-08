'use strict';

import './scss/main.scss';
import Config from './js/config';
import Core from './js/core.js';

window.onload = () => {
    let app = new Core(Config);
};