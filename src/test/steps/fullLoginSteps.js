const {Given,When,Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const { pageFixture } = require('../../hooks/pageFixture');

Given('I am at google', async function () {
    await pageFixture.page.goto('http://google.com/');  
});

When('I input search term as {string}', async function (searchTerm) {
    await pageFixture.page.locator('#APjFqb').fill(searchTerm);
});

When('I click the google search button', async function () {
    await pageFixture.page.locator("body_1 > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b").click();
});

Then('I should see moon h3 header with text {string}', async function (text) {
    await expect(pageFixture.page.locator('#rso > div:nth-child(1) > div > div > div > div.kb0PBd.cvP2Ce.jGGQ5e.ieodic > div > div > span > a > h3')).toHaveText(text);
});
