const {gql} = require('apollo-server-express')
module.exports = gql`
type Restaurant {
    id:ID!
    name:String!
}
extend type Query {
    getRestaurant(category_id:ID!):[Restaurant!]!
}
extend type Query {
    allRestaurant:[Restaurant!]!
}
extend type Mutation {
    newRestaurant(restaurant_name:String! category_id:ID!):[Restaurant]
}
`