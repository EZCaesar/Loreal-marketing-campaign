export default function ProductDetails({ product, renderProductDetails, setProduct }) {
  return (
    <div>
      {renderProductDetails(product)}
      <button onClick={() => setProduct(null)}>返回上一頁</button>
    </div>
  );
}