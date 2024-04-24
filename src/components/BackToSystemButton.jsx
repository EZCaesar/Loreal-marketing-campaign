import back from '../assets/main/back.png';

export default function BackToSystemButton({ handleBackToSystemClick }) {
  return (
    <button onClick={handleBackToSystemClick} className='back-btn'>
      <img src={back} alt='返回上一頁' />
    </button>
  );
}