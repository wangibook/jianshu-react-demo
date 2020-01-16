import React, { Component } from 'react';

class Recommend extends Component {
  render() {
    return (
      <div className='recommend-info'>
        <a href='/' target='_blank'>
          <img src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt="Banner s club" />
        </a>
        <a href='/' target='_blank'>
          <img src="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt="Banner s 7" />
        </a>
        <a href='/' target='_blank'>
          <img src="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt="Banner s 5" />
        </a>
        <a href='/' target='_blank'>
          <img src="https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt="Banner s 5" />
        </a>
        <a className='down-qrcode' href='/' target='_blank'>
          <img className='qrcode' src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="Banner s 5" />
          <div className='down'>
            <h3>下载简书手机App ></h3>
            <p>随时随地发现和创作内容</p>
          </div>
        </a>
      </div>
    )
  }
}

export default Recommend;