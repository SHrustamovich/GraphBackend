const moment = require('moment')
const model = require('./model')
module.exports = {
    Query:{
        getOrders:async() => {
            return await model.orders()
        }
    },
    Mutation:{
        newOrder:async(_,{product,count,name,add,phone}) => {
            return await model.new_order(product,count,name,add,phone)
        }
    },
    Orders:{
        id:global => global.order_id,
        product:global => global.order_product,
        count:global => global.order_p_count,
        name:global => global.client_name,
        add:global => global.client_add,
        phone:global => global.client_phone
    }
}