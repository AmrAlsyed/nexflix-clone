import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prismadb = client;

export default client;
// This is a singleton pattern to ensure that only one instance of PrismaClient is created in development mode. In production, a new instance is created for each request.
// This is important for performance and to avoid connection issues with the database. The client is exported for use in other parts of the application.
// The client is created using the PrismaClient constructor from the @prisma/client package. The global variable is used to store the client instance in development mode, so that it can be reused across different modules. In production mode, a new instance is created for each request to ensure that the application can handle multiple requests concurrently without running into connection issues.
// The client is exported as the default export of the module, so that it can be imported and used in other parts of the application. This allows for easy access to the database and makes it easy to perform CRUD operations on the data.
// The client can be used to query the database, create new records, update existing records, and delete records. It can also be used to perform complex queries and transactions, making it a powerful tool for working with databases in Node.js applications.
