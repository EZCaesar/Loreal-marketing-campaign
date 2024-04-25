import BackToSystemButton from "./BackToSystemButton";

import frame from '../assets/main/frame-h380.png';
import picUp from '../assets/main/pic-up.png';

import title from '../assets/problems/problems-title.png';
import text1 from '../assets/problems/problems-text1.png';
import text2 from '../assets/problems/problems-text2.png';
import pic1 from '../assets/problems/problems-pic1.png';
import pic2 from '../assets/problems/problems-pic2.png';
import pic3 from '../assets/problems/problems-pic3.png';
import pic4 from '../assets/problems/problems-pic4.png';

export default function SkinProblemSets({ renderProductButtons, handleBackToSystemClick }) {
  return (
    <div className='problems'>
      <div className='frame-h380'>
        <img src={frame} alt='' />
        <div className='frame-h380-bg'></div>
      </div>

      <div className='pic-up-h380'>
        <img src={picUp} alt='' />
      </div>

      <h2 className='problems-title'>
        <img src={title} alt="歡迎光臨Kiehl’s" />
      </h2>

      <div className='problems-text1'>
        <img src={text1} alt='' />
      </div>

      {renderProductButtons()}

      <div className='problems-text2'>
        <img src={text2} alt='' />
      </div>

      <div className='problems-pic1'>
        <img src={pic1} alt='' />
      </div>

      <div className='problems-pic2'>
        <img src={pic2} alt='' />
      </div>

      <div className='problems-pic3'>
        <img src={pic3} alt='' />
      </div>

      <div className='problems-pic4'>
        <img src={pic4} alt='' />
      </div>

      <footer className='queue-back-btn'>
        <BackToSystemButton handleBackToSystemClick={handleBackToSystemClick}></BackToSystemButton>
      </footer>
    </div>
  );
}