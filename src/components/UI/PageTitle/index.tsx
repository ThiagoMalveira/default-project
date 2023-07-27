import { Title } from './styles'
import { IViewProps } from './types'

const PageTitle = ({ children, color }: IViewProps) => (
  <Title color={color}>{children}</Title>
)
export default PageTitle
