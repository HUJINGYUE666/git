import React from 'react'
let C = ({match}) =>{ //解构
    console.log(match.params.num);
    return (
        <div>C页面content</div>
    )
}
export default C;