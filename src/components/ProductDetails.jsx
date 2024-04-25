import back from '../assets/product/product-back.png';

export default function ProductDetails({ product, renderProductDetails, setProduct }) {
  return (
    <div>
      {renderProductDetails(product)}
      <footer className='product-footer'>
        <button onClick={() => setProduct(null)} className='product-back-btn'>
          <img src={back} alt='返回上一頁，回答其他題目' />
        </button>
      </footer>
    </div>
  );
}