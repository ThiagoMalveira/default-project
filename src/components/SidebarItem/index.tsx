import { Container } from './styles'

type SidebarProps = {
  Icon: any
  Text: string
}

const SidebarItem = ({ Icon, Text }: SidebarProps) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem
