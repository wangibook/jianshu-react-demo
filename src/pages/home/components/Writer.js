import React, { Component } from 'react';
import axios from 'axios';

class Writer extends Component {
  state = {
    writerList: []
  }
  render() {
    return (
      <div className='writer-info'>
        <div className='writer-top'>
          <span>推荐作者</span>
          <span className='change'>换一批</span>
        </div>
        <ul className='writer-list'>
          {
            this.state.writerList.map(item => {
              return (
                <li key={item.id}>
                  <a href='/' target='_blank'>
                    <img src={item.imgUrl} alt="Banner s 7" />
                    <div className='item'>
                      <h3>{item.title}</h3>
                      <p>{item.content}</p>
                    </div>
                  </a>
                  <div className='follow'>+关注</div>
                </li>
              )
            })
          }
          
        </ul>
        <button className='look-all'>查看全部 ></button>
      </div>
    )
  }

  componentDidMount() {
    axios.get('/api/writer.json').then(res => {
      const data = res.data.data.writerList
      this.setState({
        writerList: data
      })
    })
  }
}

export default Writer;