### 1. import React from "React"
 - 리액트 관련 Core function 보유

### 2. import ReactDOM from "react-dom"
 - React와 브라우저 DOM과 연결시켜주는 역할
 - ReactDOM을 이용해 원하는 컴포넌트를 렌더링함
 - React 요소를 렌더링하려면 먼저 DOM 요소를 ReactDOM.createRoot()에 전달한 후, 다음 React 요소를 root.render()에 전달한다.
 - 아래 예제에서, 하나의 root DOM 노드가 있다. 이제, 이 root 안에 들어가는 모든 엘리먼트를 React DOM에서 관리하게 된다.

    ```
    const root = ReactDOM.createRoot( 
    document.getElementById('root')
    );
    const element = <h1>Hello, world</h1>;
    root.render(element);
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