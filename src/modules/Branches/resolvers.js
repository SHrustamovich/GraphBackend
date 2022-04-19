const model = require('./model')

module.exports = {
    Query:{
        allBranches:async() =>{
           return await model.all_branches()
        },
        getBranches:async(_,{restaurant_id}) => {
            return await model.branches(restaurant_id)
        }
    },
    Mutation:{
        newBranch:async(_,{branches_name,branches_add,restaurant_id}) => {
            return await model.new_branches(branches_name,branches_add,restaurant_id)
        }
    },
    Branches:{
        id:global => global.branches_id,
        name:global => global.branches_name,
        add:global => global.branches_add
    }
}