import {test,expect} from "@playwright/test";

test("frame test", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/iframe-demo/");
    const frameLocator = page.frameLocator("#iFrame1");
    await frameLocator.locator("//div[text()='Your content.']").fill("hello from sayaji");
    await page.waitForTimeout(5000);

})