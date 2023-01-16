Project - React Post
======================

## 1. 프로젝트 계획 이유
- React를 사용하며 거치게 되는 개념적인 내용을 프로젝트로 수행하며 다시 공부하기 위해 계획하였습니다.
- 예전에 보았던 강의 내용을 기반으로 하는 프로젝트입니다. 하지만 이번엔 그 때 진행했던 주제에 대해 다시 한 번 리마인드해 본 후, 강의를 다시 보고 따라하는 것 보다, 스스로 생각하고 작성해보는 것에 집중했습니다. 

- 무작정 클론코딩하는 태도는 옳지 않다고 생각하기에 진행한 프로젝트이고, 개선할 수 있을 만한 점은 어떤 점이 있는지 고민하며 코드를 작성하였습니다. 

### - 제공기능
	1. POST 작성, 삭제, 확인 기능

***

## 2. Install

### 2.1. Install Node.js
 - Node.js를 설치해야, React Project를 생성하고, 사용할 수 있습니다.
 - Node.js 설치는 아래명령어로 확인할 수 있습니다.
    ```
    node -v
    ```

 - npm 설치를 확인합니다.
    ```
    npm -v
    ```
    
### 2.2. Install & Run React
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

### 2.3. Bootstrap
 - public/index.html에 아래의 코드를 삽입하여 사용합니다.
   ```
    <!-- BOOTSTRAP -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
   ```

### 2.4. Json-server
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

### 2.5. Axios
 - install axios
   ```
   npm install axios
   ```

### 2.6 React Router dom
 - install react-router-dom
   ```
   npm install react-router-dom
   ```

### 2.7 React typeit
 - install typeit(ract)
   ```
   npm i typeit-react
   ```

### 2.8 FontAwesome
 - install 
   ```
   npm i --save @fortawesome/fontawesome-svg-core
   npm install --save @fortawesome/free-solid-svg-icons
   npm install --save @fortawesome/react-fontawesome
   ```
 - use : https://hymndev.tistory.com/47

### 2.9 Prop-types
 - install 
   ```
   npm install prop-types
   ```

### 2.10 history
 - react-router에서, history가 사라졌으니, 라이브러리를 따로 설치합니다.
   ```
   npm install history
   ```

## 3. 느낀 점

### 3.1. route-route-dom version update

- 예전에 강의를 보고 진행했을 때는 ```<Switch>``` 내부에 ```<Route>```를 사용하는 방식으로 진행하였었는데, 업데이트에 따라 사용법이 바뀐 것 때문에 route 구현부에 대해 고민을 많이 하였습니다.

- 이를 통해 개발자가 지속적으로 공부해야 하는 이유에 대해 다시 한 번 자각할 수 있었습니다.

### 3.2. css

 - 이 부분은 개선사항인데, 예전에는 react 문법 자체를 좇느라 css부분에서 아쉬운 설계를 진행했었습니다.
 - 이번에는, 다시 프로젝트를 만들면서 좀 더 심미적인 화면을 만들고자 노력하였습니다.
 - reset.css, fontAwesome, 최근에 알게 된 애니메이션 라이브러리(Typeit)를 HTML에서만 적용해보았는데, 이번에 React에 직접 적용해보는 과정을 거쳤습니다.  