const {gql} = require('apollo-server-express')
module.exports = gql`
type Meals{
    id:ID!
    name:String!
    price:String!
    url:String!
}
extend type Query {
    getMeals(branches_id:ID!):[Meals!]!
}
extend type Mutation {
    newMeal(meal_name:String! price:String! url:String! branches_id:ID!):[Meals]
    deleteMeal(meal_id:ID!):[Meals]
}
`