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