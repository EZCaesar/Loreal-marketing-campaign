import frame from '../assets/main/frame-h380.png';
import picUp from '../assets/main/pic-up.png';

import title from '../assets/selection/selection-title.png';
import text from '../assets/selection/selection-text.png';
import pic1 from '../assets/selection/selection-pic1.png';
import pic2 from '../assets/selection/selection-pic2.png';
import pic3 from '../assets/selection/selection-pic3.png';
import btn1 from '../assets/selection/selection-btn1.png';
// import btn2 from '../assets/selection/selection-btn2.png';

export default function SystemSelection({ handleSystemClick }) {
  return (
    <div className='selection'>
      <div className='frame-h380'>
        <img src={frame} alt='' />
        <div className='frame-h380-bg'></div>
      </div>

      <div className='pic-up-h380'>
        <img src={picUp} alt='' />
      </div>

      <h1 className='selection-title'>
        <img src={title} alt='契爾氏排隊候位系統' />
      </h1>

      <div className='selection-text'>
        <img src={text} alt='' />
      </div>

      <div className='selection-pic1'>
        <img src={pic1} alt='' />
      </div>
      
      <button onClick={() => handleSystemClick('skinProblemSets')} className='selection-btn1'>
        <img src={btn1} alt='點選此按鈕 了解肌膚問題並領取禮物' />
      </button>
      
      {/* <button onClick={() => handleSystemClick('queue')} className='selection-btn2'>
        <img src={btn2} alt='點選此按鈕 領取排隊號碼牌' />
      </button> */}

      <div className='selection-pic2'>
        <img src={pic2} alt='' />
      </div>

      <div className='selection-pic3'>
        <img src={pic3} alt='' />
      </div>
    </div>
  );
}