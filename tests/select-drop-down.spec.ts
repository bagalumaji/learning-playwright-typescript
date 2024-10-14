import {test} from '@playwright/test';

test("select single drop down test",async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    const oldSelect=await page.locator("id=oldSelectMenu");
    await oldSelect.selectOption("4");
    await page.waitForTimeout(2000);
    await oldSelect.selectOption("Black");
    await page.waitForTimeout(2000);
    await oldSelect.selectOption({index:6});
    await page.waitForTimeout(3000)
})
