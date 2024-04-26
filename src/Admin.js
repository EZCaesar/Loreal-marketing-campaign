import { useEffect, useState, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
import sendSMS from './service/sms.service';
import { useParams } from 'react-router-dom';
const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY);
export default function AdminQueue() {
  const { branch } = useParams();
  const [queue, setQueue] = useState([]);

  const fetchQueue = useCallback(async () => {
    let { data: user, error } = await supabase
      .from('user')
      .select('*')
      .filter('branch', 'eq', branch) // 只選擇 branch 欄位匹配的用戶
      .order('userId', { ascending: true });
    if (error) console.log('Error loading queue', error);
    else setQueue(user);
  }, [branch]);

  useEffect(() => {
    fetchQueue(); // Fetch the queue immediately on component mount
  
    const intervalId = setInterval(() => {
      fetchQueue(); // Fetch the queue every 30 seconds
    }, 30000); // 30000 milliseconds = 30 seconds
  
    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [fetchQueue]);

  const notifyCustomer = async (userId, phone) => {
    try {
      await Promise.all([
        sendSMS(phone, '來自契爾氏的訊息，您的號碼已經到了，請到櫃檯處理'),
        supabase
          .from('user')
          .update({ status: '通知已發' })
          .match({ userId })
      ]);
    } catch (error) {
      console.error('Error sending notification', error);
    } finally {
      fetchQueue(); // 重新拉取資料以更新界面
    }
  };

  const updateStatus = async (userId, newStatus) => {
    try {
      await supabase
        .from('user')
        .update({ status: newStatus })
        .match({ userId });

      fetchQueue(); // 重新拉取資料以更新界面
    } catch (error) {
      console.error('Error updating status', error);
    }
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>客戶排隊列表</h2>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #ddd', padding: '10px' }}>
          <div style={{ flex: 1, fontWeight: 'bold', marginLeft: 20 }}>暱稱</div>
          <div style={{ flex: 1, fontWeight: 'bold', marginLeft: 20 }}>電話</div>
          <div style={{ flex: 1, fontWeight: 'bold', marginLeft: 20 }}>狀態</div>
          <div style={{ flex: 1, fontWeight: 'bold', marginLeft: 20 }}>操作</div>
        </div>
        {queue.map(({ userId, displayedName, phone, status }) => (
          <div key={userId} style={{ display: 'flex', borderBottom: '1px solid #ddd', padding: '10px' }}>
            <div style={{ flex: 1, borderRight: '1px solid #ddd' }}>{displayedName}</div>
            <div style={{ flex: 1, borderRight: '1px solid #ddd' }}>{phone}</div>
            <div style={{ flex: 1, borderRight: '1px solid #ddd' }}>{status}</div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
              <button style={{ width: '30%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => notifyCustomer(userId, phone)}>發送通知</button>
              <button style={{ width: '30%', padding: '10px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={() => updateStatus(userId, '已完成')}>標記完成</button>
              <button style={{ width: '30%', padding: '10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={()=>updateStatus(userId, '時間太長未回應')}>時間太長未回應</button>
            </div>
          </div>
        ))}
      </div>
    </div>
 );
}
