import { Fragment } from 'react'

import { StyleGlobal } from './styleGlobal'
import { Container, Content } from './styles'
import { IProps } from './types'

const Panel = ({ children }: IProps) => {
  return (
    <Fragment>
      <StyleGlobal />
      <Container>
        <Content>{children}</Content>
      </Container>
    </Fragment>
  )
}

export default Panel
