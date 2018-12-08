'use strict';

const loopObj = (obj, callback) => {
    Object.keys(obj).forEach(function (key) {
        callback(obj[key], key);
    });
};

const FIELDS = `
    first_name,
    last_name,
    age,
    photo_50,
    city
`;

Vue.component('app-user', {
    props: ['img', 'name', 'age'],
    template: `
        <div class="app-user-ava"><img src="{{ img }}"></div>
        <div class="app-user-name">{{ name }}</div>
        <div class="user-age">{{ age }} лет</div>
    `
});

export default class Core {
    constructor(config) {
        this._getUrlParams();

        VK.init(() => {
            VK.api('friends.get', {
                user_id: this.params.viewer_id
            }, (data = {}) => {
                VK.api('users.get', {
                    user_ids: data.response.items.join(','),
                    fields: FIELDS
                }, (response = {}) => {
                    if (response.error) {
                        return false;
                    }

                    if (response && response.response) {
                        this.app = new Vue({
                            el: '#app',
                            data: {
                                users: response.response
                            }
                        });
                    }
                })
            });
        }, () => {
        }, '5.92');
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