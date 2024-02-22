const { Before,After, BeforeAll, AfterAll, Status} = require("@cucumber/cucumber");
const {chromium} = require('@playwright/test');
const {pageFixture} = require("./pageFixture");

let browser;
let page;
let browserContext;

BeforeAll(async function() {
    browser = await chromium.launch({headless:true});
})

//No arrow functions with hooks
Before(async function() {
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    pageFixture.page = page;
})

After(async function({pickle,result}) {
    //Screenshot on failure
    if(result?.status == Status.FAILED) {
        const image = await pageFixture.page.screenshot({path:`test-results/screenshots/${pickle.name}.png`,type:"png"})
        await this.attach(image,"image/png");
    }

    await page.close();
    await browserContext.close();    
})

AfterAll(async function() {
    await browser.close();
})
