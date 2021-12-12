const fs = require('fs')
const path = require('path')

const folders = fs.readdirSync(path.join(__dirname, './questions'))

for (let i = 0; i < folders.length; i++) {
  const folder = folders[i]

  const basePath = path.join(__dirname, `./questions/${folder}`)
  const questionPath = path.join(basePath, `/questions/${folder}/questions.ts`)

  if (!fs.existsSync(questionPath)) {
    const templateContents = fs.readFileSync(path.join(basePath, './template.ts'), 'utf8')

    const testCaseContent = fs.readFileSync(path.join(basePath, './test-cases.ts'), 'utf8')

    const splits = '\'@type-challenges/utils\''
    const contents = testCaseContent.split(splits)

    const questionContent = `${contents[0]}${splits}\n\n${templateContents.replace('\n', '')}${contents[1]}`

    fs.writeFileSync(questionPath, questionContent)
  }
}
