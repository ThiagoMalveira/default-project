import { Fragment } from 'react'

import Header from './Header'

import { Container, WrapperContent, Content } from './styles'
import { StyleGlobal } from './styleGlobal'
import { IProps } from './types'

const Panel = ({ children }: IProps) => {
  return (
    <Fragment>
      <StyleGlobal />
      <Container>
        <WrapperContent>
          <Header />
          <Content>{children}</Content>
        </WrapperContent>
      </Container>
    </Fragment>
  )
}

export default Panel
