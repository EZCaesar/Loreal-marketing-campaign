import BackToSystemButton from "./BackToSystemButton";

export default function Queue({handleBackToSystemClick}) {
  return (
    <div>
      <div>
        <h2>排隊候位系統</h2>
        <label>
          <p>請問如何稱呼您?</p>
          <p>(ex: 林小姐)</p>
          <input type="text" />
        </label>
        <label>
          請問您的電話號碼?
          <input type="tel" />
        </label>
        <button>送出資料</button>
        <p>契爾氏將記訊息通知您到櫃時間</p>
      </div>
      <BackToSystemButton handleBackToSystemClick={handleBackToSystemClick}></BackToSystemButton>
    </div>
  );
}