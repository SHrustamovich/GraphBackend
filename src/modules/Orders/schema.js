const {gql} = require('apollo-server-express')
module.exports = gql`
type Orders {
    id:ID!
    product:String!
    count:Int!
    name:String!
    add:String!
    phone:String!
    order_time:String!
}
extend type Query {
    getOrders:[Orders!]!
}
extend type Mutation {
    newOrder(
        product:String!
        count:Int!
        name:String!
        add:String!
        phone:String!):[Orders]
}
`