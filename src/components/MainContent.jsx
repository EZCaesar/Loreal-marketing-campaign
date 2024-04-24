import React, { useState } from 'react';
import SystemSelection from './SystemSelection';
import SkinProblemSets from './SkinProblemSets';
import ProductDetails from './ProductDetails';
import Queue from './Queue'

import bg from '../assets/bg.jpg';

import frame from '../assets/main/frame-h427.png';
import picUp from '../assets/main/pic-up.png';

import problemsBtn1 from '../assets/problems/problems-btn1.png';
import problemsBtn2 from '../assets/problems/problems-btn2.png';
import problemsBtn3 from '../assets/problems/problems-btn3.png';
import problemsBtn4 from '../assets/problems/problems-btn4.png';

import title2 from '../assets/product/product-title-2.png'
import text from '../assets/product/product-text.png';
import circle from '../assets/product/product-circle.png';
import btn from '../assets/product/product-btn.png';
import productATitle from '../assets/product/product-a-title.png';
import productAName from '../assets/product/product-a-name.png';
import productAImage from '../assets/product/A醇全能新生抗痕精華30ml.png';
import productBImage from '../assets/product/激光極淨白淡斑精華30ml.png';
import productCImage from '../assets/product/亞馬遜白泥淨緻毛孔面膜125ML.png';
import productDImage from '../assets/product/金盞花植物精華化妝水250ML.png';

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
        <button onClick={() => handleProductClick('抗老撫紋')} className='problems-btn1'><img src={problemsBtn1} alt='抗老撫紋' /></button>
        <button onClick={() => handleProductClick('美白淡斑')} className='problems-btn2'><img src={problemsBtn2} alt='美白淡斑' /></button>
        <button onClick={() => handleProductClick('粉刺毛孔')} className='problems-btn2'><img src={problemsBtn3} alt='粉刺毛孔' /></button>
        <button onClick={() => handleProductClick('保濕補水')} className='problems-btn1'><img src={problemsBtn4} alt='保濕補水' /></button>
      </div>
    );
  }

  function renderProductDetails(product) {
    switch (product) {
      case '抗老撫紋': // Anti-aging
        return (
          <div className='product-details'>
            <div className='frame-h427'><img src={frame} alt='' /><div className='frame-h427-bg'></div></div>
            <div className='pic-up-h427'><img src={picUp} alt='' /></div>

            <section className='product-sec-recommend'>
              <h2 className='product-title'>
                <img src={productATitle} alt='想要抗老撫紋?契爾氏推薦你' />
              </h2>

              <div className='product-image'>
                <img className='product-image-circle' src={circle} alt='' />
                <img src={productAImage} style={{ height: 90 }} alt='A醇全能新生抗痕精華' className='product-image-shadow' />
              </div>

              <div className='product-name'>
                <img src={productAName} style={{ width: 120 }} alt='NO.1 醇全能新生抗痕精華' />
              </div>

              <div className='product-btn'>
                <button>
                  <img src={btn} alt='領獎時間' />
                </button>
              </div>
            </section>

            <section className='product-sec-video'>
              <h2 className='video-title'>
                <img src={title2} alt='請問現在最流行的保養法是?' />
              </h2>

              <div className='video-text'>
                <img src={text} alt='看完15秒影片，找Skin Pro回答問題，即可獲得試用包乙包，答對4題立即升等旅行瓶乙瓶' />
              </div>

              <iframe
                width="98"
                height="174"
                src="https://www.youtube.com/embed/wzJKzvcUQhA?feature=shared"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='video-iframe'>
              </iframe>
            </section>
          </div>
          )
      case '美白淡斑': // Whitening and lightening
        return (
          <div className='product-details'>
            <div className='frame-h427'><img src={frame} alt='' /><div className='frame-h427-bg'></div></div>
            <div className='pic-up-h427'><img src={picUp} alt='' /></div>

            <section className='product-sec-recommend'>
              <h2 className='product-title'>
                <img src={''} alt='想要美白淡斑?契爾氏推薦你' />
              </h2>

              <div className='product-image'>
                <img className='product-image-circle' src={circle} alt='' />
                <img src={productBImage} style={{ height: 90 }} alt='NO.1 淡斑精華' className='product-image-shadow' />
              </div>

              <div className='product-name'>
                <img src={''} style={{ width: 120 }} alt='NO.1 淡斑精華' />
              </div>

              <div className='product-btn'>
                <button>
                  <img src={btn} alt='領獎時間' />
                </button>
              </div>
            </section>

            <section className='product-sec-video'>
              <h2 className='video-title'>
                <img src={title2} alt='請問現在最流行的保養法是?' />
              </h2>

              <div className='video-text'>
                <img src={text} alt='看完15秒影片，找Skin Pro回答問題，即可獲得試用包乙包，答對4題立即升等旅行瓶乙瓶' />
              </div>

              <iframe
                width="98"
                height="174"
                src="https://www.youtube.com/embed/VMxBjeAwc7Q?feature=shared"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='video-iframe'>
              </iframe>
            </section>
          </div>
          )
      case '粉刺毛孔': // Dark spots
        return (
          <div className='product-details'>
            <div className='frame-h427'><img src={frame} alt='' /><div className='frame-h427-bg'></div></div>
            <div className='pic-up-h427'><img src={picUp} alt='' /></div>

            <section className='product-sec-recommend'>
              <h2 className='product-title'>
                <img src={''} alt='想要粉刺毛孔?契爾氏推薦你' />
              </h2>

              <div className='product-image'>
                <img className='product-image-circle' src={circle} alt='' />
                <img src={productCImage} style={{ height: 60 }} alt='NO.1 白泥面膜' className='product-image-shadow' />
              </div>

              <div className='product-name'>
                <img src={''} style={{ width: 120 }} alt='NO.1 白泥面膜' />
              </div>

              <div className='product-btn'>
                <button>
                  <img src={btn} alt='領獎時間' />
                </button>
              </div>
            </section>

            <section className='product-sec-video'>
              <h2 className='video-title'>
                <img src={title2} alt='請問現在最流行的保養法是?' />
              </h2>

              <div className='video-text'>
                <img src={text} alt='看完15秒影片，找Skin Pro回答問題，即可獲得試用包乙包，答對4題立即升等旅行瓶乙瓶' />
              </div>

              <iframe
                width="98"
                height="174"
                src="https://www.youtube.com/embed/_50o2Dqn44M?feature=shared"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='video-iframe'>
              </iframe>
            </section>
          </div>
        )
      case '保濕補水': // Hydration
        return (
          <div className='product-details'>
            <div className='frame-h427'><img src={frame} alt='' /><div className='frame-h427-bg'></div></div>
            <div className='pic-up-h427'><img src={picUp} alt='' /></div>

            <section className='product-sec-recommend'>
              <h2 className='product-title'>
                <img src={''} alt='想要保濕補水?契爾氏推薦你' />
              </h2>

              <div className='product-image'>
                <img className='product-image-circle' src={circle} alt='' />
                <img src={productDImage} style={{ height: 90 }} alt='NO.1 金盞花化妝水、保濕霜' className='product-image-shadow' />
              </div>

              <div className='product-name'>
                <img src={''} style={{ width: 120 }} alt='NO.1 金盞花化妝水、保濕霜' />
              </div>

              <div className='product-btn'>
                <button>
                  <img src={btn} alt='領獎時間' />
                </button>
              </div>
            </section>

            <section className='product-sec-video'>
              <h2 className='video-title'>
                <img src={title2} alt='請問現在最流行的保養法是?' />
              </h2>

              <div className='video-text'>
                <img src={text} alt='看完15秒影片，找Skin Pro回答問題，即可獲得試用包乙包，答對4題立即升等旅行瓶乙瓶' />
              </div>

              <iframe
                width="98"
                height="174"
                src="https://www.youtube.com/embed/lMwbqiyoEzk?feature=shared"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className='video-iframe'>
              </iframe>
            </section>
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
      {/* Background image */}
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
