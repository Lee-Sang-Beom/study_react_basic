### 0. public/index.html
 - React App을 브라우저에서 열면, 제일 먼저 가져오는 파일이 index.html
 - index.html을 가져오고, react 관련 코드들이 아래에 담긴다.
 ```
 <div id='root'>
     <!-- 여기 -->
 </div>
 ```

### 1. import React from "React"
 - 리액트 관련 Core function 보유

### 2. import ReactDOM from "react-dom"
 - 공식 문서에는 React 모델 외부로 나갈 수 있는 탈출구로 사용할 수 있는 DOM 관련 메서드를 제공한다고 기술된다.
 - 즉, React와 브라우저 DOM과 연결시켜주는 역할
 - ReactDOM을 이용해 원하는 컴포넌트를 렌더링한다.
 - React 요소를 렌더링하려면 먼저 DOM 요소를 ReactDOM.createRoot()에 전달한 후, 다음 React 요소를 root.render()에 전달한다.
 - 아래 예제에서, 하나의 root DOM 노드가 있다. 이제, 이 root 안에 들어가는 모든 엘리먼트를 React DOM에서 관리하게 된다.

    ```
    const root = ReactDOM.createRoot( 
    document.getElementById('root')
    );
    const element = <h1>Hello, world</h1>;
    root.render(element);
    ```

 - 실제로는 index.js에서 아래와 같은 코드를 볼 수 있다.
 - 이것은 App이라는 컴포넌트를 불러와, 이것을 index.html 상의 'root' id를 가지는 요소 안에 렌더하라는 의미이다.
 - 이는 ```<div id = "root"></div> ``` 내부를 의미한다.
    ```
    import App from './App';

    ...

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    );
    ```


### 3. Strict 모드
 - 애플리케이션의 잠재적 문제를 알아내기 위한 도구 (개발 모드에서만 활성화)
 - 아래 예제에서, Header와 Footer는 Strict 모드 검사가 이루어지지 않는다.
 - ComponentOne,Two에 대해서는 자손들에 대한 부가적 검사와 경고를 활성화한다.
 - Use Strict은 예상치 못한 부작용을 검사하거나, 안전하지 않은 생명주기 메서드를 사용하는 컴포넌트 목록을 발견하고 경고한다고 한다.
 ```
    import React from 'react';

    function ExampleApplication() {
    return (
        <div>
        <Header />
        <React.StrictMode>
            <div>
                <ComponentOne />
                <ComponentTwo />
            </div>
        </React.StrictMode>
        <Footer />
        </div>
    );
 ```

### 4. JSX
 - 자바스크립트 확장 문법
 - 하나의 파일에 자바스크립트와 HTML을 동시에 작성할 수 있도록 해주고, 브라우저에서 실행되기 전 바벨을 사용해 일반 자바스크립트 형태의 코드로 변환된다.
 - JSX는 Virtual DOM에서 컴포넌트 변화를 감지할 때 효율적으로 비교해야 하기 때문에, 컴포넌트 내부는 하나의 DOM트리 구조로 이루어져 있어야한다. 즉, 하나의 부모요소가 감싸는 형식으로 구성되어야합니다.
 - JSX는 CSS 병행작업 시, 시각적으로 도움이 되고, 개발하며 React가 우리에게 직관적으로 도움이 되는 경고 및 에러메시지를 발생시킨다.


### 5. Event Example
 - onClick : 클릭 시 발생
 - onKeyUp : 키 입력 후, 눌린 키가 올라올 때 발생
    ```
    function App() {

    const onSubmit = (e) => {
        alert('submit');
    }

    const onKeyUp = (e) =>{
        if (e.keyCode === 13){ // event.keyCode가 Enter key(13) 를 감지할 경우를 의미
            onSubmit(); 
        }
    }

    return (
        <React.Fragment>
        <Reset />
        <div>
            <input onKeyUp={onKeyUp}/>
            <button onClick={onSubmit}>SUBMIT</button>
        </div>
        </React.Fragment>
    );
    }
    ```

### 6. Component
 - 과거에는 클래스형 컴포넌트를 주로 사용했다.
 - react v16.8(2019)부터는 함수형 컴포넌트와 리액트 훅을 지원한다.

 - 함수형 컴포넌트는 클래스형 컴포넌트보다 선언하기가 좀 더 편하고, 메모리 자원을 덜 사용한다는 장점이 있다. 
 - 과거에는 함수형 컴포넌트에서 state와 LifeCycle API를 사용할 수 없다는 단점이 있었는데, 이러한 단점은 앞서 언급한 것처럼 리액트 훅이 도입되면서 해결되었다. 

 - 함수형 컴포넌트는 일반적인 함수 선언방식이 있고, ES6의 화살표 함수가 있다.
 - 둘의 차이는 this와 관련이 있다.
    > 일반 함수는 자신이 종속된 객체를 this로 가리킨다.

    > 일반 함수는 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니고, 함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.

    > 화살표 함수는 자신이 종속된 인스턴스를 가리킨다.

    > 화살표 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정된다. 화살표 함수의 this는 언제나 상위 스코프의 this(렉시컬 this)를 가리킨다

    ```
    function BlackDog() {
        this.name = '흰둥이';
            return {
                name: '검둥이',
                bark: function() {
                console.log(this.name + ': 멍멍!');
                }
        }
    }

    const blackDog = new Blackdog();
    blackDog.bark(); // 검둥이: 멍멍!

    function WhiteDog() {
        this.name = '흰둥이';
        return {
                name: '검둥이',
                bark: () => {
                console.log(this.name + ': 멍멍!');
            }
        }
    }

    const whiteDog = new Whitedog();
    whiteDog.bark(); // 흰둥이: 멍멍!
    ```


### 7. Fragment
 - JSX는 return 시 하나의 태그로 감싸진 상태로 return되어야 한다.
 - React의 Virtual DOM이 변경사항을 쉽게 관리하도록 하기 위함이다.
 - 하지만, 하나로 감싸는 과정에서 불필요한 기능, 스타일링에 곤란한 상황이 발생할 수 있다.
 - 따라서, 코드를 간결하게 하기 위해 React Fragment를 사용할 수 있다.
 - <></> 혹은 <React.Fragment></React.Fragment> 등으로 사용한다.
 - <></>에는 key를 지정할 수 없다.

### 8. useState
 - React Hooks가 나오기 전에는 컴포넌트의 상태 관리를 하려면 클래스 기반 React 컴포넌트를 사용했어야 했다.
 - 함수형 컴포넌트에서도 상태를 관리할 수 있게 할 수 있도록 만들어진 React Hooks이다.
 
 - setState는 비동기적으로 작동한다. 즉, setState로 변경한 state값은 즉시 적용되지 않는다는 의미이다.
 - setState로 상태 값을 여러번 변경하려고 할 때마다 React에서는 즉각적으로 state에 변경된 상태값을 적용시키지 않는다. 만약 상태값이 변경 될 때 마다 렌더링을 시켜주는 React에서 매번 상태값을 즉각적으로 변경시킬때 마다 렌더링이 된다면 매우 비효율적이지 않을까?

 - 그래서 사용 시 주의해야 할 점이 아래와 같다. 아래의 예제는 버튼 클릭 시, number값을 2배로 늘려주고, number값을 출력하는 예제이다. 
    ```
    const [number,setNumber] = useState(1);
    const double = () => {
        setNumber(number*2);
        console.log(number);
    }
    return (
            <React.Fragment>
            <Reset />
            <div>
                <div>
                {number}
                </div>
                <button onClick={double}>update</button>

            </div>
            </React.Fragment>
        );
    }
    ```

 - 위에서, 최초 state값이 1인 상태에서 버튼을 클릭할 경우, 콘솔에 2가 찍힐 것 같으나 1이 찍힌다.
 - 이유는, 컴포넌트의 리렌더링 과정에서 발생하는 모습이, 리렌더링 전에 state를 한번에 업데이트하고 리렌더링하기 때문이다.
   즉, state를 업데이트하고 그 다음에 바로 리렌더링 한다는 의미이다.

 - 만약, 버튼을 눌렀을 때 아래와 같은 코드를 수행한다고 치자.
    ```
    const double = () => {
        setNumber(number*2);
        setNumber2(number2*2);
        setNumber3(number3*2);
    }
    ```
- 만약, setNumber로 state를 변경했다고 해서 렌더링을 바로 수행해버리면, setNumber2, setNumber3까지 수행할 경우, 렌더링 과정이 총 3회 이루어진다. 이는 비효율적이다.

- 그래서, setState를 수행해 준 후, 리렌더링되기 직전에 state를 모두 바꿔버림으로써 총 렌더링을 1회만 수행하게 한다.
  따라서, 위 예제에서의 console.log() 결과가 1인 것이다.

- 만약, console.log()결과로 원하는 값을 출력하려면 아래와 같이 사용하여야 한다.
    ```
    const double = () => {
        const doubledNumber= number*2;
        setNumber(doubledNumber);
        console.log(doubledNumber);
    }
    ```

### 9. useState - prevState
 - setState에서 prevState라는 것을 사용할 수도 있다. 이는 setState으로 미리 변경된 상태값을 바로 땡겨와서 변경될 state에 적용시키는 방법이다. 아래 예제를 살펴보자.
 - 아래 예제에서는, number*2*2 값을 출력하고 싶지만, 리렌더링 직전에 state 변경이 반영되기 때문에 원하는대로 state값이 변하지 않는다.
    ```
    const double = () => {
        // number*2*2한 값을 출력하고 싶음
        setNumber(number*2); // state가 setNumber를 한다고해서 바로 반영되지 않음. 리렌더링 직전에 반영
        setNumber(number*2); // 따라서, 리렌더링 직전에 state를 변경함. 이 줄의 setNumber만 수행됨
    }
    ```

 - 하지만, setState의 prevState를 인자로하는 콜백함수를 사용하면 정상적으로 수행되는 것을 확인할 수 있다.
 - prevState는 말 그대로 이전상태를 의미한다.
    ```
    const double = () => {
        setNumber((prevState) => {
            return prevState*2; // 1->2
        })
        setNumber((prevState) => {
            return prevState*2; // 2->4
        })
    }
    ```


### 10. GET, POST, PUT, PATCH, DELETE
 - GET : 클라이언트에서 서버로부터 리소스 정보를 요청하기 위해 사용
 ```
    axios.get('https://localhost:3000/login/user')
    .then((Response)=>{console.log(Response.data)})
    .catch((Error)=>{console.log(Error)})
 ```

 - POST : 클라이언트에서 서버로 리소스를 생성하거나 업데이트하기 위해 데이터를 보낼 때 사용
 ```
 1) 예시 1
    axios.post( 'url', 
    {
        contact: 'JungHo',
        email: 'wjdgh0727@gmail.com'
    },
    {
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        }
    ) 
    .then((response) => {console.log(response.data); })
    .catch((response) => {console.log('Error!') });

2) 예시2 : 전송되는 프로퍼티와 값 이름이 같으면 아래처럼 생략해서 사용가능 
    axios.post('http://localhost:3000/posts',{
      // title: title,
      // body: body
      title, 
      body
    })
 ```



 - PUT : 데이터 전체를 업데이트 할 때 사용
 - PATCH : 데이터 부분을 업데이트 할 때 사용
 - DELETE : 데이터를 삭제할 때 사용
    


### 11. axios
 - Axios는 브라우저, Node.js를 위해서 만들어진 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.
 - Axios는 운영환경에 따라서 브라우저간 XMLHttpRequest 객체 또는 Node.js의 HTTP API를 사용한다.
 - Promise(ES6) API를 사용하고, 요청(Request) 응답 (reply)을 JSON 형태로 자동 변경한다.

### 12. React-router
 - npm install react-router-dom
 - import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom" 등으로 사용

 - Router(BrowserRouter)가 감싸는 형태로시작
 - Link to는 해당 위치로 이동할 a태그라고 생각
 - ```<Routes>``` 안에, ```<Route path="">```로 Link to에 작성한 path로 이동 시 출력할 내용을 구성
 - 출력할 내용은 컴포넌트 식으로 element={}에 작성

 ```
<Router>
    <div>
        {/*이동 a태그*/}
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
    </div>
    <Routes>
        <Route path="/" exact element={<Home/>}>
        {/* 위 Link to = "/"로 맞춘 부분으로 사용자가 접근하면 이 부분을 보여줌 */}
        </Route>
        <Route path="/blogs" element= {<Blogs/>}>
        {/* 위 Link to = "/blogs"로 맞춘 부분으로 사용자가 접근하면 이 부분을 보여줌 */}
        </Route>
    </Routes>
</Router>
 ```
 - 리액트는 첫 화면으로 이동할 때, 메인화면 뿐 아니라 다른페이지 정보까지(컴포넌트까지) 모두 미리받아옴
 - 그래서 navbar 클릭시, 서버에 요청을 보내지 않고 부드럽고 빠르게 페이지가 전환됨 (main.chunk.js확인)
 - 페이지 변경 시, 렌더링은 변화된 부분만 이루어진다 (HTML 코드가 변화된 일부분만 변경됨)

 - React router는 내부적으로 a태그 사용
 - 만약, 다른페이지를 요청해서 정보를 받아오고자 한다면, 
   React router가 서버로 요청보내는 것을 중간에 가로채고 html history API를 통해 원하는 데이터를 ```<Route>``` 가 가지고 있는지 확인하고, 
   가지고 있으면 해당 컴포넌트를 반환한다.

 - 처음 실행 시, index.html을 한번만 받아오고, 그 html 안에서 js를 통해 페이지를 전환하기 때문에 여전히 하나의 페이지이다. 따라서 SPA

 - 만약, URL에 id를 부가한 라우트를 구현할 경우, 아래와 같이 콜론(:)을 붙여 수행
 ```
    const routes = [
    
    {
        path: "/blogs/:id",
        component: <EditPage />,
    },
    
    ];

 ```


### 13. Component Chlidren
 - Card라는 컴포넌트 내부에 ```<div>``` 태그가 다음과 같이 있는 경우
 ```
    <Card title={post.title} body={post.body} key={post.id}>
        <div className="d-flex justify-content-between">
            <div>{post.title}</div>
            <button></button>
        </div>
    </Card>
 ```

 - 내부의 ```<div>``` 컨텐츠가 Card 컴포넌트의 {children} 영역으로 이동
 ```
    export default function Card({ children }) {
        return (
            <div className="card mt-3 mb-3">
                <div className="card-body">
                    {children}
                </div>
            </div>
        );
    }
 ```

### 14. props-type
 - props 전달 시, type을 한정짓기 위해 사용
 - 잘못된 type 전달 시, warning을 발생시킴
 ```
    import PropTypes from "prop-types"; // import

    export default function Card({ children, title }) {
    return (
    );
    }

    Card.propTypes = { // 전달받는 title props는 string값
        title: PropTypes.string, // PropTypes.string.isRequired : 무조건 보내도록 함
        children: PropTypes.element, // props 전달 시, 무조건 element 타입 1개를 전달해야함. (ex: <h1>, <p>) 
    }

    Card.defaultProps = { // props를 전달받지 않은 경우, default값 설정
        title: 'Title',

    }
 ```

 ### 15. useHistory | useNavigate
 - history instance에 접근 후, history.push(path)로 페이지 이동이 가능하다.
 - useHistory Hook은 react-router 5버전까지 사용할 수 있다. 최근에 나온 6버전에서는 useNavigate로 변경되었다.

 ```  
    const navigate = useNavigate(); // 인스턴스 생성
    onClick={()=>navigate('/blogs/edit')} // 인스턴스(이동할 path)
 ```

 ### 16. event bubbling

 - 이벤트 버블링은 이벤트가 발생한 가장 안쪽의 요소인 target요소의 이벤트 핸들러가 동작하고, 
가장 최상단 조상요소 (document 객체, 몇몇은 window객체)를 만날 때까지 부모 요소의 핸들러가 순차적으로 동작하는 흐름을 의미
 - 이벤트 객체의 메서드인 event.stopPropagation()를 통해 핸들러에게 이벤트를 처리하도록 한 후, 버블링을 중단하도록 명령 가능
 - 아래 에제는 버튼 클릭시 console.log('del') 수행 뿐 아니라, 부모요소의 navigate()까지 실행됨

 ```
    <Card key={post.id} title={post.title} onClick={()=>navigate('/blogs/edit')}>
        <button className="btn btn-danger btn-sm" onClick={()=>{console.log('del')}}> 
            Delete 
        </button>
    </Card>

    <button className="btn btn-danger btn-sm" onClick={(e)=>{
        console.log('del');
        e.stopPropagation(); // event객체의 메소드인 stopPropagation()사용 시, target 부모요소로의 버블링이 중단
    }}> Delete </button>
 ```


  ### 17. useParams
 - react-router에 의해 이동 완료된 페이지에서 import가능하며, 사용은 아래와 같다.
```
    const { id } = useParams(); // route에 전달해준 값과 같은 이름으로 정해야함
```
 - route URL에 path값으로 전달한 id값과 같은 콜론과 연결되어 있는 값을 불러올 때 사용한다.