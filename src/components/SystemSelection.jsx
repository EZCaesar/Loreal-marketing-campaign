export default function SystemSelection({ handleSystemClick }) {
  return (
    <>
      <button onClick={() => handleSystemClick('skinProblemSets')}>Skin Problem Sets</button>
      <button onClick={() => handleSystemClick('queue')}>Queue</button>
    </>
  );
}