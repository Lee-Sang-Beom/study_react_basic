export default function Card({ title, body }) {
  return (
    <div className="card mt-3 mb-3">
      <div className="card-body">
        {title}
      </div>
    </div>
  );
}
