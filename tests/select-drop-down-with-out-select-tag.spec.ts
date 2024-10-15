import test from '@playwright/test'

test("test select drop down-without-select tage",async ({page})=>{
    await page.goto("https://demoqa.com/select-menu");
    const dropDownLocator=page.locator("id=withOptGroup");
    await dropDownLocator.click();
    await page.getByText("Group 1, option 2").click();
    await page.waitForTimeout(3000);
})


//setTimeout(function() {debugger; console.log(element); }, 5000)