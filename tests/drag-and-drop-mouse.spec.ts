import {test} from '@playwright/test'

test('drag and drop using mouse test', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const source = "#column-a";
    const destination = "#column-b";

    const sourceLocator = page.locator(source);
    const destinationLocator = page.locator(destination);

    const sourceLocatorBoundingBox = await sourceLocator.boundingBox();
    const destinationLocatorBoundingBox = await destinationLocator.boundingBox();
    await page.mouse.move(sourceLocatorBoundingBox.x+sourceLocatorBoundingBox.width/2,sourceLocatorBoundingBox.y+sourceLocatorBoundingBox.height/2);
    await page.mouse.down()
    await page.mouse.move(destinationLocatorBoundingBox.x+destinationLocatorBoundingBox.width/2,destinationLocatorBoundingBox.y+destinationLocatorBoundingBox.height/2);
    await page.mouse.up()
    await page.waitForTimeout(3000);
});