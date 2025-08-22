import {test, chromium, webkit, firefox} from '@playwright/test';

test('browser support', async () => {
  // Test code goes here
  for(const browserType of [chromium, webkit, firefox]) {

    console.log(`Testing on ${browserType.name()}`);
    
    const browser = await browserType.launch();
    const page = await browser.newPage();

    await page.goto('https://example.com');
    await page.screenshot({ path: `screenshot-${browserType.name()}.png` });

    await page.close();
    await browser.close();
  }
});
