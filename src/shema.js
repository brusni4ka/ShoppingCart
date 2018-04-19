const typeDefenition =  `
   type Product {
      id: ID!
      name: String!
      description: String!
      image: String!
   }
   
   type Order {
      id: ID!
      status: Int
      products: [Product]!
   }
   
   input OrderInput {
      products: [Product]!
   }
   
   type RootQuery {
      products: [Product]          # Corresponds to GET /api/products
      orders: [Order]              # Corresponds to GET /api/orders
      projects: [Project]          # Corresponds to GET /api/projects
      task(id: ID!): Task          # Corresponds to GET /api/tasks/:id
      tasks: [Task]                # Corresponds to GET /api/tasks
   }
    
   type RootMutation {
       createOrder(input: OrderInput!): Order
       removeOrder(id: ID!): Order
   }
   
   schema {
       query: RootQuery
       mutation: RootMutation
    }
   
`;

export default typeDefinitions;
