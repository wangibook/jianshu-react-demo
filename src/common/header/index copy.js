import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../statics/images/logo.png';
import { Input } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import * as creator from '../../store/actionCreators';

class Header extends Component {

  render() {
    const { list,focused,loginStatus,handleInputFocus,handleInputBlur,logout } = this.props;

    return (
      <div className='navbar-fixed-top'>
        <div className='header-info'>
          <Link className='logo' to='/'>
            <img src={logo} alt=''/>
          </Link>
          <div className='nav'>
            <div className='left active'>首页</div>
            <div className='left'>下载App</div>
            <Link to='/login'>
              {
                loginStatus ?
                <div className='right' onClick={logout}>退出</div> : 
                <div className='right'>登录</div>
              }
    
            </Link>
            <div className='right'>
              <span className="iconfont">&#xe601;</span>
            </div>
            <div className='inp-search'>
              <CSSTransition 
                in={focused}
                timeout={300}
                classNames='slide'>
                <Input 
                  className={focused ? 'small nav-inp' : 'nav-inp'}  
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  placeholder='搜索'/>
              </CSSTransition>
              <span className={focused ? 'big iconfont' : 'iconfont'}>&#xe60d;</span>
              <div className='hot-search' 
                style={{display: focused ? 'block' : 'none'}}>
                <div className='hot-title'>
                  热门搜索
                  <span>换一批</span>
                </div>
                <div className='hot-tag'>
                  {
                    list && list.map((item) => {
                      return <a href='/' key={item}>{item}</a>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='add-write'>
            <button className='register'>注册</button>
            <Link to='/write'>
              <button className='write-art'>
                <span className="iconfont">&#xe600;</span>写文章
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
    mouseIn: state.header.mouseIn,
    list: state.header.list,
    loginStatus: state.login.loginStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(creator.getHotList())
      dispatch(creator.searchFocus())
    },
    handleInputBlur() {
      dispatch(creator.searchBlur())
    },
    handleMouseEnter() {
      console.log('enter')
      dispatch(creator.mouseEnter())
    },
    handleMouseLeave() {
      console.log('leave')
      dispatch(creator.mouseLeave())
    },
    logout() {
      console.log(123)
      dispatch(creator.logout())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);