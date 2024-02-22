const {Given,When,Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const { pageFixture } = require('../../hooks/pageFixture');

When('I input username as {string} and password as {string}', {timeout:60000}, async function (username, password) {
    await pageFixture.page.getByPlaceholder('Username').click();
    await pageFixture.page.getByPlaceholder('Username').fill(username);
    await pageFixture.page.getByPlaceholder('Password').click();
    await pageFixture.page.getByPlaceholder('Password').fill(password);
});

When('I click the login button',{timeout:60000}, async function () {
    await pageFixture.page.getByRole('button', { name: 'Login' }).click();
});

Then('I should be on the orange hrm home page', {timeout:60000}, async function () {
    await expect(pageFixture.page.locator('//h6[normalize-space()="Dashboard"]')).toHaveCount(1);
});
