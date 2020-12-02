#Fastify-TS-SVC-REPO-DI
This is a sample template project to quickly get you started with a Fastify project. It includes dependencies and Typings for all the necessary libraries. 

### Fastify
An efficient server implies a lower cost of the infrastructure, a better responsiveness under load and happy users. How can you efficiently handle the resources of your server, knowing that you are serving the highest number of requests possible, without sacrificing security validations and handy development?

Enter Fastify. Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we know, it is one of the fastest web frameworks in town.

##### [Fastify Docs](https://www.fastify.io/docs/latest/)

### Inversify
It uses inversion of control example by using inversifyjs

##### [Inversify Wiki](https://github.com/inversify/InversifyJS/tree/master/wiki)

#### Development
The project is setup to auto build and update when code is changed. This is achieved using TSC watch, nodemon, and concurrency. To start the development server:

```npm run dev```

A test endpoint is setup at `/ping`