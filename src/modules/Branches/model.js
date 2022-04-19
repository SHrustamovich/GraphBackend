const {fetch,fetchAll} = require('../../lib/postgres')

const ALL_BRANCHES =`
SELECT 
  *
FROM
  branches
`
const BRANCHES = `
SELECT 
  *
FROM
  branches
WHERE
  restaurant_id = $1
`
const NEW_BRANCH = `
INSERT INTO branches(branches_name,branches_add,restaurant_id)
VALUES ($1,$2,$3)
RETURNING *
`
const all_branches = () => fetchAll(ALL_BRANCHES)
const branches = (id) => fetchAll(BRANCHES,id)
const new_branches = (branches_name,branches_add,restaurant_id) => fetchAll(NEW_BRANCH,branches_name,branches_add,restaurant_id)
module.exports = {
    branches,
    new_branches,
    all_branches
}