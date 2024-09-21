import {test, expect} from '@playwright/test'
import {urlLambdaTestPlayground} from "../constants/testconstants";

test.describe('check box and radio button', () => {
    test('radio button test', async ({page}) => {
        await page.goto(urlLambdaTestPlayground);
        await page.getByRole("link", {name: "Radio Buttons Demo"}).click();
        await expect(page.getByRole("heading", {name: "Radio button Demo"})).toBeVisible({timeout: 2000});
        const maleRadio = page.locator("//input[@name='optradio' and @value='Male']");
        await maleRadio.check();
        await expect(maleRadio).toBeChecked();
    })

})