import { IViewProps } from './types'
import { Wrapper } from './styles'

const Icon = ({ title, element, dimensions, onCallback }: IViewProps) => {
  const IconRender = element

  return (
    element && (
      <Wrapper onClick={onCallback ? onCallback : undefined} title={title}>
        <IconRender width={dimensions.width} height={dimensions.height} />
      </Wrapper>
    )
  )
}

export default Icon
