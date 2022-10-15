
import React from 'react'
import Menu from '../Menu'
import Topbar from '../Topbar'
import { PageWrapper } from './style'

const Page = (props) => {
  return (
    <>
      <Topbar/>
        <PageWrapper>
          {props.children}
        </PageWrapper>
      <Menu/>
    </>
  )
}

export default Page