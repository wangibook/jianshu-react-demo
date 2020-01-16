import React, { Component } from 'react';
import { connect } from 'react-redux';

class Topic extends Component {
  render() {
    const { topicList } = this.props;
    return (
      <div className='topic-info'>
        {
          topicList.map( (item,index) => {
            return (
              <div className='topic-item' key={index}>
                <img className='topic-img' alt='' src={item.imgUrl} />
                {item.title}
              </div>
            )
          })
        }
        
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    topicList: state.home.topicList
  }
}

export default connect(mapStateToProps,null)(Topic);