import { MouseEventHandler } from 'react'
import { Container, Span } from './styles'

type SidebarProps = {
  Icon: any
  Text: string
  Active?: boolean
  path: MouseEventHandler<HTMLDivElement> | undefined
}

const SidebarItem = ({ Icon, Text, Active, path }: SidebarProps) => {
  return (
    <Container active={Active} onClick={path}>
      <Icon />
      <Span>{Text}</Span>
    </Container>
  )
}

export default SidebarItem
