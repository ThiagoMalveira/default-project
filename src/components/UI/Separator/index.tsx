import SpaceWrapper from '@components/UI/SpaceWrapper'
import { IViewProps } from './types'

const Separator = ({
  verticalSize = 0,
  horizontalSize = 0,
  displayLine = false,
}: IViewProps) => (
  <SpaceWrapper
    margin={`${verticalSize}px ${horizontalSize}px`}
    displayLine={displayLine}
  />
)

export default Separator
