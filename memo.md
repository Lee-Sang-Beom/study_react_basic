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