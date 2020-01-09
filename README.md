# fastify-typeorm-boilerplate

Deploy a Node.js server very quickly with Fastify and TypeORM.

## File structure

- :file_folder: dist/
- :file_folder: node_modules/
- :open_file_folder: src/
  - :file_folder: controllers/
  - :file_folder: entities/
  - :open_file_folder: routes/
    - :page_facing_up: index.route.ts
  - :open_file_folder: services/
    - :page_facing_up: index.service.ts
    - :page_facing_up: aws.service.ts
    - :page_facing_up: emailer.service.ts
    - :page_facing_up: fastify.service.ts
    - :page_facing_up: firebase.service.ts
    - :page_facing_up: redis.service.ts
    - :page_facing_up: typeorm.service.ts
  - :page_facing_up: index.ts 
- :page_facing_up: database.sql
- :page_facing_up: example.env 
- :page_facing_up: package.json
- :page_facing_up: postman.json
- :page_facing_up: README.md
- :page_facing_up: tsconfig.json
- :page_facing_up: yarn.lock

## Run

First of all, install [**typescript**](https://www.npmjs.com/package/typescript), [**nodemon**](https://www.npmjs.com/package/nodemon) and [**typeorm-model-generator**](https://www.npmjs.com/package/typeorm-model-generator) gobally with [**yarn**](https://yarnpkg.com/lang/en/).

1. At the repository root, download the dependencies with **yarn**:
```
yarn
```
2. Rename the file *example.env* to *.env*, and edit the environment variables. Some of them are required when using Fastify and TypeORM  as ```JWT_SECRET```,```SERVER_PORT``` and ```DB\_``` ones.

3. Make sure you're running your database service. Using ```typeorm-model-generator```, export your already created database entities to TypeORM TypesScript classes inside src/entities/ folder.

```
typeorm-model-generator -h <host> -d <database> -p [port] -u <user> -x [password] -e [engine] -o ./src
```

```typeorm-model-generator``` tends to generate some incongruities. Follow the instructions to fix them:

  - Delete *ormconfig.json* and *tsconfig.json* created files inside src/.

  - Rename .ts entity class files as you want.

 - Add ```extends BaseEntity``` at the end of each .ts entity class inside src/entities/ folder.

 - Check the nullity of some reference attributes of created .ts class entities.

4. Add aditional services at *index.ts* services array, if necessary.

5. Add aditional **.route.ts* files into *index.route.ts* routes array, if necessary.

6. Run **tsc -w** at project root directory.

7. Additionally, run **nodemon** at dist/ directory.

8. Edit src/ TypeScript code with automatic reload!
