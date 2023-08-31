import { Container, Span } from './styles'

type SidebarProps = {
  Icon: any
  Text: string
  Active?: boolean
}

const SidebarItem = ({ Icon, Text, Active }: SidebarProps) => {
  return (
    <Container active={Active}>
      <Icon />
      <Span>{Text}</Span>
    </Container>
  )
}

export default SidebarItem
