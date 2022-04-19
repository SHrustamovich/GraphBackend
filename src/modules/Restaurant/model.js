const {fetch,fetchAll} = require('../../lib/postgres')

const ALL_RESTAURANT = `
SELECT
  *
FROM
  restaurant
`
const RESTAURANT = `
SELECT 
  *
FROM
  restaurant
WHERE
  category_id =$1
`
const NEW_RESTAURANT = `
INSERT INTO 
restaurant(restaurant_name,category_id)
VALUES ($1,$2)
RETURNING *
`
const allRestaurant = () => fetchAll(ALL_RESTAURANT)
const restaurant = (id) => fetchAll(RESTAURANT,id)
const new_restaurant = (restaurant_name,category_id) => fetchAll(NEW_RESTAURANT,restaurant_name,category_id)
module.exports = {
    restaurant,
    new_restaurant,
    allRestaurant
}