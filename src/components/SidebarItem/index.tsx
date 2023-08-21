import { Container } from './styles'

type SidebarProps = {
  Icon: any
  Text: string
  Active?: boolean
}

const SidebarItem = ({ Icon, Text, Active }: SidebarProps) => {
  return (
    <Container active={Active}>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem
