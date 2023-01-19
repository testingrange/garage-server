// URI string
const mongooseBaseName = 'garage'

const database = {
    // if this is a dev env the 
    development: `mongodb://localhost/${mongooseBaseName}-development`,
    test: `mongodb://localhost/${mongooseBaseName}-test`
}

const localDb = process.env.TESTENV ? database.test : database.development

const currentDb = process.env.DB_URI || localDb

module.exports = currentDb