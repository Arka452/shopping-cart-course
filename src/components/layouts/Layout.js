import React from 'react'
import Wrapper from '../../hoc/Wrapper'

const Layout = (props) => {
  return (
    <Wrapper>
        <p>Navigation</p>
        <main>{props.children}</main>
    </Wrapper>
  )
}

export default Layout