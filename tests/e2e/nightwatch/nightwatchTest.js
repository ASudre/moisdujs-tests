module.exports = {
    'step one : Add Night Watch to \'Le cabinet des curiosités\'' : function (browser) {
        browser
            .url('localhost:3000')
            .waitForElementVisible('body', 1000)
            .click('select[id=slot-column]')
            .waitForElementVisible('#slot-column option', 1000)
            .click('option[value="4"]')
            .setValue('input[id=slot-name]', 'Night Watch')
            .click('button[id=add-slot]');
    },

    'step two : Check Night Watch is in \'Le cabinet des curiosités\'' : function (browser) {
        browser
            .pause(5000)
            .assert.containsText('td[class="0-3"]', 'Night Watch')
            .end();
    }
};