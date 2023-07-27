import { ClipLoader } from 'react-spinners'

import { theme } from '@resources/theme'

import { WrapperLoading } from './styles'
import { IViewProps } from './types'

const Loading = ({
  loading = true,
  color = theme.palette.primary.dark,
  size = 50,
}: IViewProps) => {
  return (
    <WrapperLoading>
      <ClipLoader size={size} color={color} loading={loading} />
    </WrapperLoading>
  )
}

export default Loading
