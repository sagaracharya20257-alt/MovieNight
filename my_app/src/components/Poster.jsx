export default function Poster({ src, alt, size }) {
  return <img src={src} alt={alt} className={`poster-${size}`} />;
}
