const { ApolloServer } = require('apollo-server');

const todos = [
  { task: 'Wash car', completed: false }, //personal added todos
  { task: 'Clean room', completed: true } //manual data added
];

const typeDefs = gql, //we tell our data


type Todo {
    task: String,
    completed: Boolean
}


const server = new ApolloServer({
    typeDefs: typek
}); //We innitialize Apollo server here

server.listen(4000).then(({ url } ) => {
    console.log('Server listening');
}); //now that we have innitialised Apollo server; we can call a method on Server