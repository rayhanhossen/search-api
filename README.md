
## Description

ShareTrip NodeJs assessment test build using NestJs and Typescript with MySQL DB.

## Project Structure
```
├── src
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── main.ts
│   └── modules
│       ├── post
│       │   ├── dto
│       │   │   ├── create-post.dto.ts
│       │   │   └── update-post.dto.ts
│       │   ├── entities
│       │   │   └── post.entity.ts
│       │   ├── post.controller.spec.ts
│       │   ├── post.controller.ts
│       │   ├── post.module.ts
│       │   ├── post.repository.ts
│       │   ├── post.service.spec.ts
│       │   └── post.service.ts
│       └── user-search
│           ├── dto
│           │   ├── create-user-search.dto.ts
│           │   └── update-user-search.dto.ts
│           ├── entities
│           │   └── user-search.entity.ts
│           ├── user-search.controller.spec.ts
│           ├── user-search.controller.ts
│           ├── user-search.module.ts
│           ├── user-search.repository.ts
│           ├── user-search.service.spec.ts
│           └── user-search.service.ts
|
└── ...
```

## Installation

```bash
$ npm install
```


## Database Connection

To connect the database, please copy the **.env.example** file content, create a **.env** file, paste the copied content, and change the credentials based on your local DB settings. 

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
