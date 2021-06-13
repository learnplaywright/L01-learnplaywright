const { chromium } = require('playwright');

(async () => {
   const browser = await chromium.launch(
       {channel:'chrome',
       headless:false
    })
   const context = await browser.newContext()
   const page = await context.newPage()
   await page.goto('http://learnplaywright.com')
   const title = await page.textContent('head > title')
   console.log("The page title is:" + title)
   await browser.close()
  })();
