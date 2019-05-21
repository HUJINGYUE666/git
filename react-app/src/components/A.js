import React, { Component } from 'react'
export default class A extends Component {
  render() {
    return (
      <div>
        A页面content
        <button onClick={()=>{
          this.props.history.goBack();
        }}>&lt;返回上一页</button>
      </div>
    )
  }
}
