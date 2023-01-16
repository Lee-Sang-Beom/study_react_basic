import PropTypes from "prop-types";

export default function Card({ children, onClick, title }) {
  return (
    <div className="card mt-3 mb-3 pointer" onClick={onClick} >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
            <div>{title}</div>
            {children && <div>{children}</div>}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = { 
  title: PropTypes.string.isRequired, // string, 필수
  children: PropTypes.element, // 컴포넌트
  onClick: PropTypes.func, // 함수
}

Card.defaultProps = {  // props를 전달받지 않은 경우, default값 설정
  children: null,
  onClick: ()=>{}, // 빈 함수
}

