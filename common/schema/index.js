const graphql = require("graphql");
const app = require("../../server/server");
const Author = app.models.Author;
const Book = app.models.Books;

const AuthorType = new graphql.GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: graphql.GraphQLID },
    authorname: { type: graphql.GraphQLString },
    age: { type: graphql.GraphQLInt },
  }),
});

const BookType = new graphql.GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: graphql.GraphQLID },
    bookname: { type: graphql.GraphQLString },
    authorid: { type: graphql.GraphQLInt },
    author: {
      type: graphql.GraphQLList(AuthorType),
      resolve(parent, args) {
        return Author.find({ where: { id: authorid } });
      },
    },
  }),
});

const RootQuery = new graphql.GraphQLObjectType({
  name: "RootQuery",
  fields: {
    Book: {
      type: graphql.GraphQLList(BookType),
      args: { id: { type: graphql.GraphQLInt } },
      resolve(parent, args) {
        return Book.find({ where: { id: args.id } });
      },
    },
    allBooks: {
      type: graphql.GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({});
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
});
