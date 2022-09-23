Project - MyTodoList
======================

## 1. 프로젝트 계획 이유
- React를 사용하며, state를 관리하는 방법에 대해 개념적인 내용을 다시 공부하기 위해 계획하였습니다.

### - 제공기능
	1. 
	2. 
	3. 
   4. 
   5. 

****
# 2. Install

## 2.1. Install Node.js
 - Node.js를 설치해야, React Project를 생성하고, 사용할 수 있습니다.
 - Node.js 설치는 아래명령어로 확인할 수 있습니다.
    ```
    node -v
    ```

 - npm 설치를 확인합니다.
    ```
    npm -v
    ```
    
## 2.2. Install & Run React
 - Create React App으로, React Project를 설치합니다.
    ```
    npx create-react-app [project_name]
    ```
 - 작업 폴더로 이동합니다.
    ```
    cd [project_name]
    ```
 - React Project를 실행합니다.
    ```
    npm start
    ```

## 2.3. Bootstrap
 - public/index.html에 아래의 코드를 삽입하여 사용합니다.
   ```
    <!-- BOOTSTRAP -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
   ```

## 2.4. Json-server
 - install json server
   ```
   npm install json-server
   ```

- create a [db.json] file with some data
  ```
   {
      "posts": [
         { "id": 1, "title": "json-server", "author": "typicode" }
      ],
      "comments": [
         { "id": 1, "body": "some comment", "postId": 1 }
      ],
      "profile": { "name": "typicode" }
   }
  ```

- start json server
  ```
  json-server --watch db.json
  ```

- change port
  ```
  json-server --watch db.json --port 3001
  ```

- add db script : ./package.json (npm run db)
  ```
    "scripts": {
    "db" : "json-server --watch db.json --port 3001", 
  },
  ```

## 2.5. Axios
 - install axios
   ```
   npm install axios
   ```