import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [branch, setBranch] = useState('');
  const navigate = useNavigate();

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleAdminClick = () => {
    navigate(`/${branch}/admin`);
  };

  const handleClientsClick = () => {
    navigate(`/${branch}/clients`);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <label style={{
        marginBottom: '20px',
        fontSize: '20px',
        width: '100%',
        maxWidth: '600px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '10px' }}>請輸入百貨公司分店名稱</div>
        <input type="text" value={branch} onChange={handleBranchChange} style={{
          padding: '10px',
          fontSize: '18px',
          width: '100%',
          boxSizing: 'border-box'
        }} />
      </label>
      <button onClick={handleAdminClick} style={{
        marginBottom: '10px',
        padding: '10px 20px',
        fontSize: '18px',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        width: '100%',
        maxWidth: '600px'
      }}>專櫃端</button>
      <button onClick={handleClientsClick} style={{
        padding: '10px 20px',
        fontSize: '18px',
        cursor: 'pointer',
        backgroundColor: '#008CBA',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        width: '100%',
        maxWidth: '600px'
      }}>顧客端</button>
    </div>
  );
}

export default Home;