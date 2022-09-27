import PropTypes from "prop-types";

export default function Card({ children, title }) {
  return (
    <div className="card mt-3 mb-3">
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
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
}

Card.defaultProps = {
  children: null,
}

