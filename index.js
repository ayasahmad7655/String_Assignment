const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");
let productDataFolder,reviewsDataFolder;
let href,title;
async function CreateFolders(){
  productDataFolder = path.join('Extracted_Data', "Product_Data");
  reviewsDataFolder = path.join('Extracted_Data', "Reviews_Data");
  
  if (!fs.existsSync(productDataFolder)) {
    fs.mkdirSync(productDataFolder, { recursive: true });
  }
  if (!fs.existsSync(reviewsDataFolder)) {
    fs.mkdirSync(reviewsDataFolder, { recursive: true }); 
  }
  return;
}

async function SaveJsonData(newPage){
  newPage.on("response", async (response) => {
    const url = response.url();
    if (url.includes("lovesac.com/graphql")) {
      console.log(`Intercepted API Response: ${url}`);
      try {
        const json = await response.json();
        let folder;
      if (json.data?.reviews?.reviews?.length > 0) {
        folder = reviewsDataFolder;
      } else if (json.data?.products?.length > 0) {
        folder = productDataFolder;
      } else {
        console.log("No relevant data found in JSON.");
        return;
      }
      const fileName = `${title}.json`;
      const filePath = path.join(folder, fileName);
      fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
      console.log(`JSON data saved to ${filePath}`);
      return;
      } catch (error) {
        console.log("Non-JSON Response",error);
      }
    }

  });
  return;
}

async function scrapeLovesac() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await CreateFolders();

  await page.goto("https://www.lovesac.com/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(4000);
  const anchorTags = await page.locator("//a[@href and @title and contains(@class, 'button')]");
  const count = await anchorTags.count();
  console.log(`Found ${count} anchor tags.`);

  for (let i = 0; i < count; i++) {
     href = await anchorTags.nth(i).getAttribute("href");
     title = await anchorTags.nth(i).getAttribute("title");

    if (!href.startsWith("/")) {
      console.log(`Skipping external link: ${href}`);
      continue;
    }
    console.log(`Navigating to: https://www.lovesac.com${href}`);
    const newPage = await browser.newPage();
    await SaveJsonData(newPage)
    await newPage.goto(`https://www.lovesac.com${href}`);
    await newPage.waitForTimeout(30000);
    await newPage.close();
  }


  await browser.close();

  return;
}



scrapeLovesac().catch(console.error);