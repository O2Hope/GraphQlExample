const graphql = require('graphql');

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GrapQLString},
        firstName: { type: GraphQLString} ,
        age: { type: GraphQLInt}
    }
});