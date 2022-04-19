const model = require('./model')
module.exports = {
    Query:{
        getCategory:async() => {
            return await model.category()
        }
    },
    Category:{
        id:global => global.category_id,
        name:global => global.category_name
    }
}