import {test,expect} from "@playwright/test";
import {urlLambdaTestPlayground} from "../constants/testconstants";

test('drag-and-drop-slider test', async ({page}) => {
    await page.goto(urlLambdaTestPlayground);
    await page.getByRole("link",{name: "Drag & Drop Sliders"}).click()
    const slider= page.locator("//input[@type='range']");
    await slider.first().click();
    const valueLocator = page.locator("output#range");
    const val=60;
    let result= await valueLocator.textContent();
    console.log(result);

    while(Number(result)!==val){
        await slider.first().press("ArrowRight");
        result= await valueLocator.textContent();
        console.log(result);
        await page.waitForTimeout(300);
    }
})
test.only('slider - 2 test', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/horizontal_slider");
    const slider = page.locator("input[type='range']");
    await slider.click();
    const valueLocator = page.locator("span#range");
    let result= await valueLocator.textContent();
    const finalValue=4;
    console.log(result);
    while(Number(result)<=finalValue){
        await slider.press('ArrowRight');
        result= await valueLocator.textContent();
        console.log(result);
        await page.waitForTimeout(1000);
    }
})