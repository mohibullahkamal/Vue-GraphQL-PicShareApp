const { ApolloServer, gql } = require('apollo-server');

const todos = [
  { task: 'Wash car', completed: false }, //personal added todos
  { task: 'Clean room', completed: true } //manual data added
];

//With in back-ticks we want to define type definitions
const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }

  type Mutation {
    addTodo(task: String, completed: Boolean): Todo
  }
`;

const resolvers = {
  Query: {
    getTodos: () => todos
  },
  Mutation: {
    addTodo: (_, { task, completed }) => {
      const todo = { task, completed };
      todos.push(todo);
      return todo;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
}); //We innitialize Apollo server here

server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
}); //now that we have innitialised Apollo server; we can call a method on Server
