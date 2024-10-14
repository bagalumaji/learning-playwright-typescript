import {test} from '@playwright/test';

test("select single drop down test",async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    const oldSelect= page.locator("id=oldSelectMenu");
    await oldSelect.selectOption("4");
    await page.waitForTimeout(2000);
    await oldSelect.selectOption("Black");
    await page.waitForTimeout(2000);
    await oldSelect.selectOption({index:6});
    await page.waitForTimeout(3000)
})
test.only("multi select drop down test",async ({page})=>{
    await page.goto("https://demoqa.com/select-menu");
    const multiSelectDropDown=page.locator("id=cars");
    await multiSelectDropDown.selectOption([{index:0},{value:"saab"},{label:"Audi"}])
    await page.waitForTimeout(2000);
    await multiSelectDropDown.selectOption([]);
    await page.waitForTimeout(5000);


    //multi select using labels

    const labels=["Opel","Audi"];
    await multiSelectDropDown.selectOption(labels);
    await page.waitForTimeout(3000);

    //select by using values
    const values=["volvo","saab"];
    await multiSelectDropDown.selectOption(values);

    await page.waitForTimeout(3000);

})
