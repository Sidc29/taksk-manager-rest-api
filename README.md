
# Task Manager REST API

The Task Manager REST API is a web-based API that allows clients to interact with a Task Manager application over the internet. It provides a set of endpoints that can be used to manage tasks, such as creating, reading, updating, and deleting tasks. The API uses standard HTTP methods, such as GET, POST, PATCH, and DELETE, to perform these operations.

Some of the key features of the Task Manager REST API include:

* Task creation, editing, and deletion
* Task listing and search

The API documentation provides full details on how to use the API, including examples of API requests and responses.




## Demo

https://task-manager-api-hnef.onrender.com/


## API Reference

#### Get all tasks

```http
  GET /api/v1/tasks
```

#### Create a task

```http
  POST /api/v1/tasks
```


#### Get a single task

```http
  GET /api/v1/tasks/{id}
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Update a task

```http
  PATCH /api/v1/tasks/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to update |


#### Delete a task

```http
  DELETE /api/v1/tasks/{id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to delete |


## Run Locally

Clone the project

```bash
  git clone https://https://github.com/Sidc29/task-manager-rest-api.git
```

Go to the project directory

```bash
  cd task-manager-rest-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@sidc29](https://www.github.com/sidc29)


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://shiddharth-portfolio.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shiddharth-choudhari-aaa22b260/)

