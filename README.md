#Fastify-TypeORM-TS-Template
This is a sample template project to quickly get you started with a Fastify project. It includes dependencies and Typings for all the necessary libraries. 

### Fastify
An efficient server implies a lower cost of the infrastructure, a better responsiveness under load and happy users. How can you efficiently handle the resources of your server, knowing that you are serving the highest number of requests possible, without sacrificing security validations and handy development?

Enter Fastify. Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we know, it is one of the fastest web frameworks in town.

##### [Fastify Docs](https://www.fastify.io/docs/latest/)

### TypeORM
TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8). Its goal is to always support the latest JavaScript features and provide additional features that help you to develop any kind of application that uses databases - from small applications with a few tables to large scale enterprise applications with multiple databases.

TypeORM supports both Active Record and Data Mapper patterns, unlike all other JavaScript ORMs currently in existence, which means you can write high quality, loosely coupled, scalable, maintainable applications the most productive way.

##### [TypeORM Getting Started](https://typeorm.io/#/)

#### Development
The project is setup to auto build and update when code is changed. This is achieved using TSC watch, nodemon, and concurrency. To start the development server:

```npm run dev```

A test endpoint is setup at `/ping`

Please update the `ormconfig.json` as per your database and environment. A mysql default sample is added. Hence `mysql` database driver is in dependency but you can remove it and add another db provider.