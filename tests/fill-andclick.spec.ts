import {test, expect, Locator} from "@playwright/test";
import {urlLambdaTestPlayground} from "../constants/testconstants";

test.describe("fill and click", () => {
    test("fill and click button test", async ({page}) => {
        await page.goto(urlLambdaTestPlayground);
        await page.getByRole('link',{name:"Ajax Form Submit"}).click()
        await expect(page.getByRole('heading',{name:'Form Submit Demo'})).toBeVisible({timeout:15000});
        const textBoxTitle=page.locator("id=title");
        const textBoxDescription=page.locator("id=description");
        await  textBoxTitle.fill("sayaji");
        await  textBoxDescription.fill("sharannya");
        const titleValue = await textBoxTitle.inputValue();
        const descriptionValue = await textBoxDescription.inputValue();
        console.log(titleValue);
        console.log(descriptionValue);
        await page.getByRole("button",{name:"submit"}).click()
        await expect(page.locator("id=submit-control")).toContainText("Ajax Request is Processing!");
    })
})
