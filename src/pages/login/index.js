import React, { Component } from 'react';
import { Input,Button } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './login.scss';
import * as creator from '../../store/actionCreators';

class Login extends Component {
  render() {
    const {loginStatus,handleLogin} = this.props;
    if(!loginStatus) {
      return (
        <div className='login'>
          <div className='content'>
            <Input placeholder="账号" ref={(input) => this.account = input}/>
            <Input  placeholder="密码" type='password' ref={(input) => this.password = input}/>
            <Button type="primary" block onClick={() =>handleLogin(this.account,this.password)}>登录</Button>
          </div>
        </div>
      )
    } else {
      return <Redirect to='/'></Redirect>
    }
  }

}

const mapStateToProps = (state) =>({
  loginStatus: state.login.loginStatus
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin(account,password) {
      dispatch(creator.login(account.state.value,password.state.value))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);