import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as creator from '../../../store/actionCreators';

class List extends Component {
  render() {
    const { artList,getMoreList,artPage } = this.props;
    return (
      <div>
        {
          artList.map((item,index) => {
            return (
              <Link className='art-info' to={'/detail/'+ item.id} key={index}>
                <div className='art-left'>
                  <h3 className='title'>{item.title}</h3>
                  <p className='desc'>{item.desc}</p>
                  <div className='art-read'>
                    <span>阅读：{item.reader}</span>
                    <span>作者：{item.author}</span>
                    <span>评论：{item.comment}</span>
                  </div>
                </div>
                <img className='art-right' alt='' src={item.imgUrl} />
              </Link>
            )
          })
        }
        <div className='load-more' onClick={() => getMoreList(artPage)}>阅读更多</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  artList: state.home.artList,
  artPage: state.home.artPage
})

const mapDispatchToProps = (dispatch) => ({
  getMoreList(artPage) {
    dispatch(creator.getMoreList(artPage))
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);