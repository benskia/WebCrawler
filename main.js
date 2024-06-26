const { crawlPage } = require('./crawl.js')
const { printReport } = require('./report.js')

async function main() {
  if (process.argv.length < 3) {
    console.log("Too few arguments: 'npm run BASE_URL'")
    process.exit()
  }
  if (process.argv.length > 3) {
    console.log("Too many arguments: 'npm run BASE_URL'")
    process.exit()
  }
  const baseURL = process.argv[2]
  console.log(`Starting crawl at ${baseURL}`)
  const pages = await crawlPage(baseURL)
  printReport(pages)
}

main()
