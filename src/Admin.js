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
    fetchQueue();
  }, [fetchQueue]);

  const notifyCustomer = async (userId, phone) => {
    try {
      // 假設這裡的sendSMS是集成了發送簡訊API的函數
      await sendSMS(phone, '您的號碼已經到了，請到櫃檯處理');
      await supabase
        .from('user')
        .update({ status: 'notified' })
        .match({ userId });

      fetchQueue(); // 重新拉取資料以更新界面
    } catch (error) {
      console.error('Error sending notification', error);
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
    <div>
      <h2>客戶排隊列表</h2>
      <table>
        <thead>
          <tr>
            <th>暱稱</th>
            <th>電話</th>
            <th>狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {queue.map(({ userId, displayedName, phone, status }) => (
            <tr key={userId}>
              <td>{displayedName}</td>
              <td>{phone}</td>
              <td>{status}</td>
              <td>
                <button onClick={() => notifyCustomer(userId, phone)}>發送通知</button>
                <button onClick={() => updateStatus(userId, 'completed')}>標記完成</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
