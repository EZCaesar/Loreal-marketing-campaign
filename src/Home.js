import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate('/admin')}>Go to Admin</button>
      <button onClick={() => navigate('/clients')}>Go to Clients</button>
    </div>
  );
}

export default Home;