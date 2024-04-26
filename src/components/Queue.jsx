import BackToSystemButton from "./BackToSystemButton";
import { useRef } from 'react';
import { createClient } from '@supabase/supabase-js'
import { useParams } from 'react-router-dom';
import frame from '../assets/main/frame-h380.png';
import picUp from '../assets/main/pic-up.png';

import title from '../assets/queue/queue-title.png';
import text1 from '../assets/queue/queue-text1.png';
import text2 from '../assets/queue/queue-text2.png';
import text3 from '../assets/queue/queue-text3.png';
import pic1 from '../assets/queue/queue-pic1.png';
import pic2 from '../assets/queue/queue-pic2.png';
import pic3 from '../assets/queue/queue-pic3.png';
import btn from '../assets/queue/queue-btn.png';

export default function Queue({handleBackToSystemClick}) {
  const { branch } = useParams();
  console.log(branch );
  const nameRef = useRef();
  const phoneRef = useRef();
  const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

  // Function to add a user to the queue
  const joinQueue = async (e) => {
    e.preventDefault();
    const phone = phoneRef.current.value;
    const displayedName = nameRef.current.value;
    try{
      if (!phone || !displayedName) {
        throw new Error('請填寫完整資料');
      }
      if (!/^09[0-9]{8}$/.test(phone)) {
        throw new Error('請填寫正確的手機號碼');
      }
      await supabase
      .from('user')
      .insert([{ userId: Date.now(), phone, displayedName, status: 'waiting', branch }]);
 
      alert('已成功加入排隊');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='queue'>
      <div className='frame-h380'>
        <img src={frame} alt='' />
        <div className='frame-h380-bg'></div>
      </div>

      <div className='pic-up-h380'>
        <img src={picUp} alt='' />
      </div>

      <h1 className='queue-title'>
        <img src={title} alt='請輸入資料以領取排隊號碼' />
      </h1>

      <form className='queue-form'>
        <label className='queue-label queue-input-1'>
          <div>
            <img src={text1} alt='請問如何稱呼您？' />
          </div>
          <input type="text" ref={nameRef} className='queue-input' />
        </label>

        <label className='queue-label queue-input-2'>
          <div>
            <img src={text2} alt='請問您的手機號碼？' />
          </div>
          <input type="tel" ref={phoneRef} className='queue-input' />
        </label>

        <button onClick={joinQueue} className='queue-btn'>
          <img src={btn} alt='送出資料' />
        </button>
      </form>

      <div className='queue-text3'>
        <img src={text3} alt='' />
      </div>

      <div className='queue-pic1'>
        <img src={pic1} alt='' />
      </div>

      <div className='queue-pic2'>
        <img src={pic2} alt='' />
      </div>

      <div className='queue-pic3'>
        <img src={pic3} alt='' />
      </div>

      <footer className='queue-back-btn'>
        <BackToSystemButton handleBackToSystemClick={handleBackToSystemClick} />
      </footer>
    </div>
  );
}