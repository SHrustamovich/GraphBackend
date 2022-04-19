const {fetch,fetchAll} = require('../../lib/postgres')

const MEALS = `
SELECT 
  *
FROM
  meals
WHERE
  branches_id= $1
`
const NEW_MEAL = `
INSERT INTO meals(meal_name,price,url,branches_id)
VALUES ($1,$2,$3,$4)
RETURNING *
`
const DELETE_MEAL =`
DELETE FROM
  meals
WHERE
  meal_id = $1
`
const meals = (id) => fetchAll(MEALS,id)
const new_meal = (meal_name,price,url,branches_id) => fetchAll(NEW_MEAL,meal_name,price,url,branches_id)
const delete_meal = (meal_id) => fetch(DELETE_MEAL,meal_id)
module.exports = {
    meals,
    new_meal,
    delete_meal
}