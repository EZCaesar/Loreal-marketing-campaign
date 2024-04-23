import BackToSystemButton from "./BackToSystemButton";

export default function SkinProblemSets({ renderProductButtons, handleBackToSystemClick }) {
  return (
    <>
    <div>
      <h2>歡迎光臨Kiehl's</h2>
      <p>您有什麼肌膚問題想要解決呢</p>
      {renderProductButtons()}
      <p>禮物就藏在"按鈕"裡!</p>
      <p>請點選領取</p>
    </div>
    <BackToSystemButton handleBackToSystemClick={handleBackToSystemClick}></BackToSystemButton>
    </>
  );
}