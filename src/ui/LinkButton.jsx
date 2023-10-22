import { Link, useNavigate } from 'react-router-dom';

export default function LinkButton({ to, children }) {
  const navigate = useNavigate();
  const className = 'hover-underline text-sm text-blue-500 hover:text-blue-600';
  if (to === '-1') {
    return (
      <button onClick={(e) => navigate(-1)} className={className}>
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
