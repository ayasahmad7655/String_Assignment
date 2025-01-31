# String Assignment - README

## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Code Explanation](#code-explanation)
- [Contact](#contact)

## Project Overview
# String Assignment - README

## Table of Contents
- [Project Overview](#project-overview)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Code Explanation](#code-explanation)
- [Additional Information](#additional-information)
- [Contact](#contact)

## Project Overview

I have written a Node.js script that extracts all product data from the Lovesac website, including store details and product reviews. The extracted data is organized within the Extracted_Data directory, which contains two subfolders:

Products – Stores all extracted product information in JSON format. 

Reviews – Contains JSON files with collected product reviews.
## Installation
1. **Download the Project Files**: Clone or download the repository to your local machine.
   
2. **Install Node Modules**: Navigate to the project directory and run the following command:
   ```bash
   npm i

## Running the Tests
To execute the test script, use the following command:

```bash
node index.js
```

## Code Explanation
The `index.js` file contains three main functions:  

1. **`scrapeLovesac()`** – The primary function that extracts all navigation links from the Lovesac website and iterates through each section to scrape data.  
2. **`createFolders()`** – Ensures the necessary directories exist by creating folders for storing JSON files if they are not already available.  
3. **`saveJsonData(newPage)`** – Saves the extracted response data, including all relevant information from the Lovesac website, into structured JSON format and stores it in the appropriate folder.  

### **Workflow**  
- The script starts by calling `createFolders()` to prepare the storage structure.  
- `scrapeLovesac()` retrieves all navigation links and loops through them to extract data.  
- Extracted data is passed to `saveJsonData()`, which formats and saves it as JSON files.  

This script ensures organized data storage and maintains structured JSON output for further processing.  

### Key Features:
- The assignment requested validation of the news page articles, but additional tests were included for:
  - **Job Page**: Ensures that the first 100 jobs are sorted from newest to oldest.
  - **Comments Page**: Ensures that the first 100 comments are sorted from newest to oldest.
  - **News Page Sorting**: Ensures that the first 100 articles are sorted from newest to oldest.


## Contact
For any questions or clarifications, feel free to reach out:

**Ayas Ahmad**  
Full Stack Developer  
Email: ayasahmad65@gmail.com

[Resume Link](https://drive.google.com/file/d/1ZSTY4k4dHrr3qYXSrb9pxP4T-d9jQWV7/view)

