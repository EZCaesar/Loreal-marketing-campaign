
export default async function sendSms(phone, text) {
  const smsEndpoint = `http://api.twsms.com/json/sms_send.php?username=${process.env.REACT_APP_SMS_USERNAME}&password=${
    process.env.REACT_APP_SMS_PASSWORD
  }&mobile=${phone}&message=${encodeURI(text)}`;
  const response = await fetch(smsEndpoint);
  const jsonRet = await response.json();
  const retCode = jsonRet.code;
  if (retCode === '00000') {
    console.log('Sms sent successfully');
  } else {
    let errorMessage = '';
    // see https://www.twsms.com/dl/TwSMS_SMS_API_4.0.pdf for more details
    switch (retCode) {
      case '00100': // 手機號碼格式錯誤
        errorMessage = 'Phone number format error.';
        break;
      case '00110': // 沒有簡訊內容
        errorMessage = 'No sms content.';
        break;
      case '00031': // 限制發送國際門號
        errorMessage = 'Sending to international phone number is restricted.';
        break;
      case '00120': // 長簡訊不支援國際門號
        errorMessage = 'Long sms does not support international phone number.';
        break;
      case '00130': // 簡訊內容超過長度
        errorMessage = 'Sms content exceeds length.';
        break;
      case '00180': // 簡訊內容帶有 Emoji 圖形
        errorMessage = 'Sms content contains emoji.';
        break;
      case '00001': // 狀態尚未回復
        errorMessage = 'Sending status not received yet.';
        break;
      case '99998': // 資料處理異常，請重新發送
        errorMessage = 'Data processing error, please resend.';
        break;
      case '99999': // 系統錯誤，請通知系統廠商
        errorMessage = 'System error, please notify system vendor.';
        break;
      case '00050': // sendtime 格式錯誤
        errorMessage = 'Sendtime format error.';
        break;
      case '00060': // expirytime 格式錯誤
        errorMessage = 'Expirytime format error.';
        break;
      default:
        errorMessage = 'Other unknown error on vendor side.';
    }
    // throw new CustomError(responseCode, errorCode, errorMessage);
    throw new Error(errorMessage);
  }
};