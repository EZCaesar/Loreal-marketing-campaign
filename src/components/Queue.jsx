import BackToSystemButton from "./BackToSystemButton";
import { useRef } from 'react';
import { createClient } from '@supabase/supabase-js'

export default function Queue({handleBackToSystemClick}) {
  const nameRef = useRef();
  const phoneRef = useRef();
  const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);

  // Function to add a user to the queue
  const joinQueue = async () => {
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
      .insert([{ userId: Date.now(), phone, displayedName, status: 'waiting' }]);
 
      alert('已成功加入排隊');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <div>
        <h2>排隊候位系統</h2>
        <label>
          <p>請問如何稱呼您?</p>
          <p>(ex: 林小姐)</p>
          <input type="text" ref={nameRef} />
        </label>
        <label>
          請問您的電話號碼?
          <input type="tel" ref={phoneRef} />
        </label>
        <button onClick={joinQueue}>送出資料</button>
        <p>契爾氏將記訊息通知您到櫃時間</p>
      </div>
      <BackToSystemButton handleBackToSystemClick={handleBackToSystemClick}></BackToSystemButton>
    </div>
  );
}