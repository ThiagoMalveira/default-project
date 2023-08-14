import { Icon } from '@material-ui/core'
import { Container } from './styles'

type SidebarProps = {
  IconName: string
  Text: string
}

const SidebarItem = ({ IconName, Text }: SidebarProps) => {
  return (
    <Container>
      <Icon>{IconName}</Icon>
      {Text}
    </Container>
  )
}

export default SidebarItem
