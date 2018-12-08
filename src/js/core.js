'use strict';

const loopObj = (obj, callback) => {
    Object.keys(obj).forEach(function (key) {
        callback(obj[key], key);
    });
};

const FIELDS = 'photo_50,city,verified';

export default class Core {
    constructor(config) {
        this._getUrlParams();

        VK.init(() => {
            this.app = new Vue({
                el: '#app',
                data: config
            });

            VK.api('friends.get', {
                user_id: this.params.viewer_id
            }, (data) => {
                debugger;
                VK.api('users.get', {
                    user_ids: data.response.items.join(','),
                    fields: FIELDS
                }, (response) => {
                    debugger;
                })
            });
        }, () => {}, '5.92');
    }

    _getUrlParams() {
        let queryParams = location.search;

        queryParams = queryParams.substr(1).split('&');

        this.params = {};

        loopObj(queryParams, (value) => {
            let split = value.split('=');

            this.params[split[0]] = split[1];
        });
    }
}