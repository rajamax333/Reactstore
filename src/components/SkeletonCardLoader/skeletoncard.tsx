// Loader.tsx
import './skeleton.module.scss';

const Loader = () => {
  return (
    <div className="skeleton-card-container">
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="skeleton-card" key={i}>
          <div className="skeleton-image"></div>
          <div className="skeleton-text short"></div>
          <div className="skeleton-text long"></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
