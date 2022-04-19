const {fetch,fetchAll} = require('../../lib/postgres')
 
const ORDERS = `
SELECT
 *
FROM
  orders
`
const NEW_ORDER = `
INSERT INTO orders(order_product,order_p_count,client_name,client_add,client_phone)
VALUES($1,$2,$3,$4,$5)
RETURNING *
`
const orders = () => fetchAll(ORDERS)
const new_order = (order_product,order_p_count,client_name,client_add,client_phone) =>fetchAll(NEW_ORDER,order_product,order_p_count,client_name,client_add,client_phone)
module.exports = {
    orders,
    new_order
}