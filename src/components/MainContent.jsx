import React, { useState } from 'react';
import SystemSelection from './SystemSelection';
import SkinProblemSets from './SkinProblemSets';
import ProductDetails from './ProductDetails';
import Queue from './Queue'

import bg from '../assets/bg.jpg';

import frame from '../assets/main/frame-h845.png';
import picUp from '../assets/main/pic-up.png';

import problemsBtn1 from '../assets/problems/problems-btn1.png';
import problemsBtn2 from '../assets/problems/problems-btn2.png';
import problemsBtn3 from '../assets/problems/problems-btn3.png';
import problemsBtn4 from '../assets/problems/problems-btn4.png';

import title2 from '../assets/product/product-title-2.png'
import text from '../assets/product/product-game-text.png';
import circle from '../assets/product/product-circle.png';
import pic1 from '../assets/product/product-pic1.png';
import pic2 from '../assets/product/product-pic2.png';
import pic3 from '../assets/product/product-pic3.png';
import pic4 from '../assets/product/product-pic4.png';
import star1 from '../assets/product/product-star1.png';
import star2 from '../assets/product/product-star2.png';
import productATitle from '../assets/product/product-a-title.png';
import productAName from '../assets/product/product-a-name.png';
import productAText from '../assets/product/product-a-text.png';
import productAImage from '../assets/product/A醇全能新生抗痕精華30ml.png';
import productAQ from '../assets/product/product-game-a-q.png';
import productBTitle from '../assets/product/product-b-title.png';
import productBName from '../assets/product/product-b-name.png';
import productBText from '../assets/product/product-b-text.png';
import productBImage from '../assets/product/激光極淨白淡斑精華30ml.png';
import productBQ from '../assets/product/product-game-b-q.png';
import productCTitle from '../assets/product/product-c-title.png';
import productCName from '../assets/product/product-c-name.png';
import productCText from '../assets/product/product-c-text.png';
import productCImage from '../assets/product/亞馬遜白泥淨緻毛孔面膜125ML.png';
import productCQ from '../assets/product/product-game-c-q.png';
import productDTitle from '../assets/product/product-d-title.png';
import productDName1 from '../assets/product/product-d-name1.png';
import productDName2 from '../assets/product/product-d-name2.png';
import productDText1 from '../assets/product/product-d-text-1.png';
import productDText2 from '../assets/product/product-d-text-2.png';
import productDImage1 from '../assets/product/金盞花植物精華化妝水250ML.png';
import productDImage2 from '../assets/product/冰河醣蛋白保濕霜50ML.png';
import productDQ from '../assets/product/product-game-d-q.png';

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
            <div className='frame-h845'>
              <img src={frame} alt='' className='frame-h845-frame-img' />
              <div className='frame-h845-bg'></div>
              <img src={picUp} alt='' className='frame-h845-up-img' />

              <img src={pic2} style={{ width: 97, left: -25, top: 540 }} alt='' className='product-frame-pic' />
              <img src={pic3} style={{ width: 54, right: -15, top: 655 }} alt='' className='product-frame-pic' />
              <img src={pic4} style={{ width: 75, right: -10, top: 735 }} alt='' className='product-frame-pic' />
            </div>

            <section className='product-sec-recommend'>
              <h2 className='product-title'>
                <img src={productATitle} style={{ width: 270 }} alt='想要抗老撫紋?契爾氏推薦你' />
              </h2>

              <div className='product-name'>
                <img src={productAName} alt='NO.1 醇全能新生抗痕精華' />
              </div>

              <div className='product-info'>
                <img src={circle} alt='' className='product-info-circle' />
                <img src={productAImage} style={{ height: 120 }} alt='A醇全能新生抗痕精華' className='product-info-image product-image-shadow' />
                <img src={productAText} style={{ width: 91, top: 35, right: 20 }} alt='無痛煥膚、緊緻毛孔、撫平紋路！' className='product-info-abs' />
                <img src={pic1} style={{ width: 60, left: 55, top: 45 }} alt='' className='product-info-abs' />
                
                {/* Stars */}
                <img src={star2} style={{ width: 21, left: 10, top: 30, transform: 'rotate(15deg)' }} alt='' className='product-info-abs' />
                <img src={star2} style={{ width: 15, left: 25, top: 70, transform: 'rotate(15deg)' }} alt='' className='product-info-abs' />
                <img src={star1} style={{ width: 15, left: 48, top: 52, transform: 'rotate(-35deg)' }} alt='' className='product-info-abs' />
                <img src={star2} style={{ width: 20, right: 69, top: 74, transform: 'rotate(15deg)' }} alt='' className='product-info-abs' />
                <img src={star1} style={{ width: 12, right: 40, top: 79, transform: 'rotate(-35deg)' }} alt='' className='product-info-abs' />
                <img src={star1} style={{ width: 14, right: 42, top: 110, transform: 'rotate(-35deg)' }} alt='' className='product-info-abs' />
              </div>
            </section>

            <section className='product-sec-video'>
              <h2 className='video-title'>
                <img src={title2} alt='玩遊戲領獎' />
              </h2>

              <div className='video-game-text'>
                <img src={text} alt='玩遊戲領獎說明內容' />
              </div>

              <div className='video-question-1'>
                <img src={productAQ} alt='Q1:請問A醇是什麼顏色的?' />
              </div>

              <iframe
                width="164"
                height="294"
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
            <div className='frame-h845'>
              <img src={frame} alt='' className='frame-h845-frame-img' />
              <div className='frame-h845-bg'></div>
              <img src={picUp} alt='' className='frame-h845-up-img' />

              <img src={pic2} style={{ width: 97, left: -25, top: 540 }} alt='' className='product-frame-pic' />
              <img src={pic3} style={{ width: 54, right: -15, top: 655 }} alt='' className='product-frame-pic' />
              <img src={pic4} style={{ width: 75, right: -10, top: 735 }} alt='' className='product-frame-pic' />
            </div>

            <section className='product-sec-recommend'>
              <h2 className='product-title'>
                <img src={productBTitle} style={{ width: 270 }} alt='想要美白淡斑?契爾氏推薦你' />
              </h2>

              <div className='product-name'>
                <img src={productBName} alt='激光極淨白淡斑精華' />
              </div>

              <div className='product-info'>
                <img src={circle} alt='' className='product-info-circle' />
                <img src={productBImage} style={{ height: 140, marginBottom: 5 }} alt='激光極淨白淡斑精華' className='product-info-image product-image-shadow' />
                <img src={productBText} style={{ width: 92, top: 35, right: 20 }} alt='淡化斑點、提亮膚色、對抗黑色素沉澱！' className='product-info-abs' />
                <img src={pic1} style={{ width: 60, left: 55, top: 45 }} alt='' className='product-info-abs' />
                
                {/* Stars */}
                <img src={star2} style={{ width: 21, left: 10, top: 30, transform: 'rotate(15deg)' }} alt='' className='product-info-abs' />
                <img src={star2} style={{ width: 15, left: 25, top: 70, transform: 'rotate(15deg)' }} alt='' className='product-info-abs' />
                <img src={star1} style={{ width: 15, left: 48, top: 52, transform: 'rotate(-35deg)' }} alt='' className='product-info-abs' />
                <img src={star2} style={{ width: 20, right: 69, top: 74, transform: 'rotate(15deg)' }} alt='' className='product-info-abs' />
                <img src={star1} style={{ width: 12, right: 40, top: 79, transform: 'rotate(-35deg)' }} alt='' className='product-info-abs' />
                <img src={star1} style={{ width: 14, right: 42, top: 110, transform: 'rotate(-35deg)' }} alt='' className='product-info-abs' />
              </div>
            </section>

            <section className='product-sec-video'>
              <h2 className='video-title'>
                <img src={title2} alt='玩遊戲領獎' />
              </h2>

              <div className='video-game-text'>
                <img src={text} alt='玩遊戲領獎說明內容' />
              </div>

              <div className='video-question-1'>
                <img src={productBQ} alt='Q2:請問淡斑精華內有什麼成份?' />
              </div>

              <iframe
                width="164"
                height="294"
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
            <div className='frame-h845'>
              <img src={frame} alt='' className='frame-h845-frame-img' />
              <div className='frame-h845-bg'></div>
              <img src={picUp} alt='' className='frame-h845-up-img' />

              <img src={pic2} style={{ width: 97, left: -25, top: 540 }} alt='' className='product-frame-pic' />
              <img src={pic3} style={{ width: 54, right: -15, top: 655 }} alt='' className='product-frame-pic' />
              <img src={pic4} style={{ width: 75, right: -10, top: 735 }} alt='' className='product-frame-pic' />
            </div>

            <section className='product-sec-recommend'>
              <h2 className='product-title'>
                <img src={productCTitle} style={{ width: 270 }} alt='想要清除毛孔粉刺?契爾氏推薦你' />
              </h2>

              <div className='product-name'>
                <img src={productCName} alt='亞馬遜白泥淨緻毛乳面膜' />
              </div>

              <div className='product-info' style={{ transform: 'translateY(5px)' }}>
                <img src={circle} alt='' className='product-info-circle' />
                <img src={productCImage} style={{ height: 100 }} alt='亞馬遜白泥淨緻毛乳面膜' className='product-info-image product-image-shadow' />
                <img src={productCText} style={{ width: 67, top: 5, right: 50 }} alt='無痛煥膚、緊緻毛孔、撫平紋路！' className='product-info-abs' />
                <img src={pic1} style={{ width: 60, left: 35, top: 45 }} alt='' className='product-info-abs' />
                
                {/* Stars */}
                <img src={star2} style={{ width: 21, left: 10, top: 22, transform: 'rotate(15deg)' }} alt='' className='product-info-abs' />
                <img src={star2} style={{ width: 15, left: 20, top: 74, transform: 'rotate(15deg)' }} alt='' className='product-info-abs' />
                <img src={star1} style={{ width: 15, left: 42, top: 36, transform: 'rotate(-35deg)' }} alt='' className='product-info-abs' />
                <img src={star2} style={{ width: 20, right: 62, top: 74, transform: 'rotate(15deg)' }} alt='' className='product-info-abs' />
                <img src={star1} style={{ width: 12, right: 28, top: 55, transform: 'rotate(-35deg)' }} alt='' className='product-info-abs' />
                <img src={star1} style={{ width: 14, right: 28, top: 90, transform: 'rotate(-35deg)' }} alt='' className='product-info-abs' />
              </div>
            </section>

            <section className='product-sec-video'>
              <h2 className='video-title'>
                <img src={title2} alt='玩遊戲領獎' />
              </h2>

              <div className='video-game-text'>
                <img src={text} alt='玩遊戲領獎說明內容' />
              </div>

              <div className='video-question-2'>
                <img src={productCQ} alt='Q3:請問白泥面膜敷幾分鐘後可以去粉刺?' />
              </div>

              <iframe
                width="164"
                height="294"
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
            <div className='frame-h845'>
              <img src={frame} alt='' className='frame-h845-frame-img' />
              <div className='frame-h845-bg'></div>
              <img src={picUp} alt='' className='frame-h845-up-img' />

              <img src={pic2} style={{ width: 97, left: -25, top: 540 }} alt='' className='product-frame-pic' />
              <img src={pic3} style={{ width: 54, right: -15, top: 655 }} alt='' className='product-frame-pic' />
              <img src={pic4} style={{ width: 75, right: -10, top: 735 }} alt='' className='product-frame-pic' />
            </div>

            <section className='product-sec-recommend'>
              <h2 className='product-title'>
                <img src={productDTitle} style={{ width: 270 }} alt='想要肌膚補水?契爾氏推薦你' />
              </h2>

              <div className='product-name' style={{ marginTop: 10 }}>
                <img src={productDName1} alt='金盞花植物精華化妝水' />
              </div>

              <div className='product-name' style={{ marginTop: 5 }}>
                <img src={productDName2} alt='冰河醣蛋白保濕霜' />
              </div>

              <div className='product-info'>
                <img src={circle} alt='' style={{ width: 184, height: 134 }} className='product-info-circle' />
                <img src={productDImage1} style={{ height: 140, transform: 'translateX(-35px)' }} alt='金盞花植物精華化妝水' className='product-info-image product-image-shadow' />
                <img src={productDImage2} style={{ height: 70, transform: 'translateX(30px) translateY(35px)' }} alt='金盞花植物精華化妝水' className='product-info-image product-image-shadow' />
                <img src={productDText1} style={{ width: 78, top: 42, left: 0 }} alt='無痛煥膚、緊緻毛孔、撫平紋路！' className='product-info-abs' />
                <img src={productDText2} style={{ width: 65, top: 50, right: 60 }} alt='無痛煥膚、緊緻毛孔、撫平紋路！' className='product-info-abs' />
                <img src={pic1} style={{ width: 60, left: 35, top: 69 }} alt='' className='product-info-abs' />
                
                {/* Stars */}
                <img src={star2} style={{ width: 21, left: 25, top: 8, transform: 'rotate(15deg)' }} alt='' className='product-info-abs' />
                <img src={star2} style={{ width: 15, left: 20, top: 94, transform: 'rotate(15deg)' }} alt='' className='product-info-abs' />
                <img src={star1} style={{ width: 15, left: 57, top: 22, transform: 'rotate(-35deg)' }} alt='' className='product-info-abs' />
                <img src={star2} style={{ width: 20, right: 37, top: 68, transform: 'rotate(15deg)' }} alt='' className='product-info-abs' />
                <img src={star1} style={{ width: 12, right: 15, top: 68, transform: 'rotate(-35deg)' }} alt='' className='product-info-abs' />
                <img src={star1} style={{ width: 14, right: 28, top: 90, transform: 'rotate(-35deg)' }} alt='' className='product-info-abs' />
              </div>
            </section>

            <section className='product-sec-video'>
              <h2 className='video-title'>
                <img src={title2} alt='玩遊戲領獎' />
              </h2>

              <div className='video-game-text'>
                <img src={text} alt='玩遊戲領獎說明內容' />
              </div>

              <div className='video-question-2'>
                <img src={productDQ} alt='Q4:請問金盞花化妝水和冰洽醣蛋白保濕霜可以什麼時候使用?' />
              </div>

              <iframe
                width="164"
                height="294"
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
    <div style={{ display: 'grid', justifyItems: 'center', paddingTop: 100 }}>
      {/* Background image */}
      <div style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: '932px',
        backgroundPosition: 'top',
        width: '100%',
        maxWidth: '932px',
        zIndex: '-5',
        gridArea: '1/1/2/2',
      }}>
      </div>

      <main className="main-content" style={{ gridArea: '1/1/2/2', width: 375 }}>
        {!system && <SystemSelection handleSystemClick={handleSystemClick}  />}
        {system === 'skinProblemSets' && !product && <SkinProblemSets renderProductButtons={renderProductButtons} handleBackToSystemClick={handleBackToSystemClick} />}
        {product && <ProductDetails product={product} renderProductDetails={renderProductDetails} setProduct={setProduct} />}
        {system === 'queue' && <Queue handleBackToSystemClick={handleBackToSystemClick} />}
      </main>
    </div>
  );
}

export default MainContent;
