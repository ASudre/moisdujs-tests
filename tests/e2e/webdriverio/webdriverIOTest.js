var webdriverio = require('webdriverio');
var assert = require('assert');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

describe('Programme du Mois du js', function() {
    it('should add Night Watch to \'Le cabinet des curiosités\'', function () {
        webdriverio
            .remote(options)
            .init()
            .url('localhost:3000')
            .click('select[id=slot-column]')
            .click('option[value="4"]')
            .setValue('input[id=slot-name]', 'WebdriverIO')
            .click('button[id=add-slot]')
            .element('td[class="0-3"]').then((res) => {
                assert.equal(res.value, 'WebdrerIO');
            })
            .end();
    });
});