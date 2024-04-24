import back from '../assets/main/back.png';

export default function ProductDetails({ product, renderProductDetails, setProduct }) {
  return (
    <div>
      {renderProductDetails(product)}
      <footer className='product-footer'>
        <button onClick={() => setProduct(null)} className='back-btn'>
          <img src={back} alt='返回上一頁' />
        </button>
      </footer>
    </div>
  );
}