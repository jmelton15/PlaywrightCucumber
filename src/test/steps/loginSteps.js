const {Given,When,Then} = require('@cucumber/cucumber');
const {expect} = require('@playwright/test');
const { pageFixture } = require('../../hooks/pageFixture');



Given('I am on the login page', async function () {
    await pageFixture.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    // await pageFixture.page.waitForTimeout(5000);
});

When('I login with valid credentials', async function () {
    await pageFixture.page.getByPlaceholder('Username').click();
    await pageFixture.page.getByPlaceholder('Username').fill('AdminWrong');
    await pageFixture.page.getByPlaceholder('Password').click();
    await pageFixture.page.getByPlaceholder('Password').fill('admin123');
    await pageFixture.page.getByRole('button', { name: 'Login' }).click();
});

When('I click on the logout button', async function () {
    await pageFixture.page.locator('.oxd-userdropdown-tab').click();
    await pageFixture.page.locator('text=Logout').click();
});

Then('I should be back on the login page', async function () {
    await expect(pageFixture.page.locator('//h5[normalize-space()="Login"]')).toHaveCount(1);
});