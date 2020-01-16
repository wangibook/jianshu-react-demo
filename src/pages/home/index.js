import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import './home.scss';
import banner from '../../statics/images/banner.png';
import { connect } from 'react-redux';
import * as creator from '../../store/actionCreators';

class Home extends Component {
  state = {
    showScroll: false
  }

  render() {
    return (
      <div className='home-info'>
        <div className='home-left'>
          <img className='banner-img' alt='' src={banner} />
          <Topic></Topic>
          <List></List>
        </div>
        <div className='home-right'>
          <Recommend></Recommend>
          <Writer></Writer>
        </div>
        {this.state.showScroll ? <div className='back-top' onClick={this.handleScrollTop}>回到顶部</div> : null }
      </div>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    // 卸载异步操作设置状态
    this.setState = (state, callback) => {
      return;
    }
    window.removeEventListener('scroll', () => {
      let scroll = document.documentElement.scrollTop
      if(scroll > 200) {
        this.setState({
          showScroll: true
        })
      } else {
        this.setState({
          showScroll: false
        })
      }
    })
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
  }
  
  bindEvents() { 
    window.addEventListener('scroll', () => {
      let scroll = document.documentElement.scrollTop
      if(scroll > 200) {
        this.setState({
          showScroll: true
        })
      } else {
        this.setState({
          showScroll: false
        })
      }
    })
  }

  changeScrollTopShow() {
    let scroll = document.documentElement.scrollTop
    if(scroll > 200) {
      this.setState({
        showScroll: true
      })
    } else {
      this.setState({
        showScroll: false
      })
    }
  }
}


const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(creator.getHomeInfo())
  }
})

export default connect(null,mapDispatchToProps)(Home);