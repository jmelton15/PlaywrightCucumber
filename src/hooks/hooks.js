const { Before,After, BeforeAll, AfterAll, Status} = require("@cucumber/cucumber");
const {chromium} = require('@playwright/test');
const {pageFixture} = require("./pageFixture");
const fs = require('fs').promises;

let browser;
let page;
let browserContext;

async function createJSON() {
    const inside = JSON.stringify({"test":"test"});
    try {
        await fs.writeFile(`testjsonfile.json`,inside, 'utf8', (err) => {
            if (err) {
              console.error(`Error writing to file: ${err.message}`);
            } else {
              console.log(`Object successfully saved to ${this.jsonFileName}`); 
            }
        });
    } catch(err) {
        console.error(err)
    }
}

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
    await createJSON();
    await browser.close();
})
