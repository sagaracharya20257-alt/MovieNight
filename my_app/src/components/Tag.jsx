export default function Tag({ label, color }) {
  return (
    <span className="tag" style={{ backgroundColor: color }}>
      {label}
    </span>
  );
}
