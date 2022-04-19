const model = require('./model')

module.exports = {
    Query:{
        allRestaurant:async() => {
          return await model.allRestaurant()
        },
        getRestaurant:async(_,{category_id}) => {
            return await model.restaurant(category_id)
        }
    },
    Mutation:{
        newRestaurant:async(_,{restaurant_name,category_id}) => {
            return await model.new_restaurant(restaurant_name,category_id)
        }
    },
    Restaurant:{
        id:global => global.restaurant_id,
        name:global => global.restaurant_name
    }
}