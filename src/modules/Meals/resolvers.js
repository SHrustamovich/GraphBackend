const model = require('./model')

module.exports = {
    Query:{
        getMeals:async(_,{branches_id}) => {
            return await model.meals(branches_id)
        }
    },
    Mutation:{
        newMeal:async(_,{meal_name,price,url,branches_id}) => {
            return await model.new_meal(meal_name,price,url,branches_id)
        },
        deleteMeal:async(_,{meal_id}) => {
         return await model.delete_meal(meal_id)
        }
    },
    Meals:{
        id:global => global.meal_id,
        name:global => global.meal_name,
        price:global => global.price
    }
}