import {test} from '@playwright/test'
test('file upload with attr type=file test',async function ({page}){
    const file='./testdata/testdata.json'
    await page.goto("https://the-internet.herokuapp.com/upload");
    await page.locator("id=file-upload").setInputFiles(file);
    await page.waitForTimeout(5000);
})