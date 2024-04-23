import React, { useState } from 'react';
import SystemSelection from './SystemSelection';
import SkinProblemSets from './SkinProblemSets';
import ProductDetails from './ProductDetails';
import Queue from './Queue'

import bg from '../assets/bg.jpg';

import btn1 from '../assets/problems/problems-btn1.png';
import btn2 from '../assets/problems/problems-btn2.png';
import btn3 from '../assets/problems/problems-btn3.png';
import btn4 from '../assets/problems/problems-btn4.png';

function MainContent() {
  const [system, setSystem] = useState(null);
  const [product, setProduct] = useState(null);

  function handleSystemClick(systemName) {
    setSystem(systemName);
    setProduct(null);  // Reset product selection when changing systems
  }

  function handleProductClick(product) {
    setProduct(product);
  }

  function handleBackToSystemClick() {
    setSystem(null);
    setProduct(null);  // Reset both system and product when going back
  }

  function renderProductButtons() {
    return (
      <div className='problems-btns'>
        <button onClick={() => handleProductClick('抗老撫紋')} className='problems-btn1'><img src={btn1} alt='抗老撫紋' /></button>
        <button onClick={() => handleProductClick('美白淡斑')} className='problems-btn2'><img src={btn2} alt='美白淡斑' /></button>
        <button onClick={() => handleProductClick('粉刺毛孔')} className='problems-btn2'><img src={btn3} alt='粉刺毛孔' /></button>
        <button onClick={() => handleProductClick('保濕補水')} className='problems-btn1'><img src={btn4} alt='保濕補水' /></button>
      </div>
    );
  }

  function renderProductDetails(product) {
    switch (product) {
      case '抗老撫紋': // Anti-aging
        return (
          <div>
            <p>想要抗老撫紋?契爾氏推薦你</p>
            <p>NO.1 A醇抗老精華</p>
            <h2>請問現在最流行的保養法是?</h2>
            <p>看完15秒影片</p>
            <p>找Skin Pro回答問題</p>
            <p>即可獲得試用包乙包</p>
            <p>答對4題立即升等旅行瓶乙瓶</p>
            <img src="../../assets/A醇全能新生抗痕精華30ml.png" alt="圖片無法載入" />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/shorts/wzJKzvcUQhA?feature=shared"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          )
      case '美白淡斑': // Whitening and lightening
        return (
          <div>
            <p>想要美白淡斑?契爾氏推薦你</p>
            <p>NO.1 淡斑精華</p>
            <h2>請問現在最流行的保養法是?</h2>
            <p>看完15秒影片</p>
            <p>找Skin Pro回答問題</p>
            <p>即可獲得試用包乙包</p>
            <p>答對4題立即升等旅行瓶乙瓶</p>
            <img src="../assets/激光極淨白淡斑精華30ml.png" alt="圖片無法載入" />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/shorts/VMxBjeAwc7Q?feature=shared"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          )
      case '粉刺毛孔': // Dark spots
        return (
          <div>
            <p>想要粉刺毛孔?契爾氏推薦你</p>
            <p>NO.1 白泥面膜</p>
            <h2>請問現在最流行的保養法是?</h2>
            <p>看完15秒影片</p>
            <p>找Skin Pro回答問題</p>
            <p>即可獲得試用包乙包</p>
            <p>答對4題立即升等旅行瓶乙瓶</p>
            <img src="../assets/亞馬遜白泥淨緻毛孔面膜125ML.png" alt="圖片無法載入" />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/shorts/_50o2Dqn44M"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          )
      case '保濕補水': // Hydration
        return (
          <div>
            <p>想要保濕補水?契爾氏推薦你</p>
            <p>NO.1 金盞花化妝水、保濕霜</p>
            <h2>請問現在最流行的保養法是?</h2>
            <p>看完15秒影片</p>
            <p>找Skin Pro回答問題</p>
            <p>即可獲得試用包乙包</p>
            <p>答對4題立即升等旅行瓶乙瓶</p>
            <img src="../assets/金盞花植物精華化妝水250ML.png" alt="圖片無法載入" />
            金盞花植物精華化妝水250ML.png
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/shorts/lMwbqiyoEzk"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
          </div>
          )
      default:
        return (
          <div>
            <p>Sorry, we don't have information about this product.</p>
          </div>
          )
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '500px',
        height: 'calc(100% - 175px)',
        position: 'absolute',
        width: '100%',
        maxWidth: '500px',
        zIndex: '-5',
      }}>
      </div>
      <main className="main-content">
  {!system && <SystemSelection handleSystemClick={handleSystemClick}  />}
  {system === 'skinProblemSets' && !product && <SkinProblemSets renderProductButtons={renderProductButtons} handleBackToSystemClick={handleBackToSystemClick} />}
  {product && <ProductDetails product={product} renderProductDetails={renderProductDetails} setProduct={setProduct} />}
  {system === 'queue' && <Queue handleBackToSystemClick={handleBackToSystemClick} />}
      </main>
    </div>
  );
}

export default MainContent;
