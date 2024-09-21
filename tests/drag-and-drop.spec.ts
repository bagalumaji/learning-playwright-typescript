import {test} from '@playwright/test'

test('drag and drop test',async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    const source = "#column-a";
    const destination = "#column-b";
    await page.dragAndDrop(source,destination);
    await page.waitForTimeout(3000);
})
