const {fetch,fetchAll} = require('../../lib/postgres')

const CATEGORY = `
SELECT 
  *
FROM
  category
`
const category = () => fetchAll(CATEGORY)
module.exports = {
    category
}