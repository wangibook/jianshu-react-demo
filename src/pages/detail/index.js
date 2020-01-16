import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './detail.scss';
import axios from 'axios';

class Detail extends Component {
  state = {
    detailInfo: {}
  }
  render() {
    
    return (
      <div className='detail'>
        <h3>{this.state.detailInfo.title}</h3>
        <div className='content'>
          <img className='detail-img' alt='' src={this.state.detailInfo.imgUrl} />
          <p dangerouslySetInnerHTML={{__html:this.state.detailInfo.content}}></p>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let id = this.props.match.params.id
    axios.get('/api/detail.json?id=' + id).then(res => {
      this.setState({
        detailInfo: res.data.data
      })
    })
  }
}

export default withRouter(Detail);