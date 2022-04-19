const {gql} = require('apollo-server-express')
module.exports = gql`
type Branches {
    id:ID!
    name:String!
    add:String!
}
extend type Query {
    allBranches:[Branches!]!
}
extend type Query {
    getBranches(restaurant_id:ID!):[Branches!]!
}
extend type Mutation{
    newBranch(branches_name:String! branches_add:String! restaurant_id:ID!):[Branches]
}
`