import Ana from '@assets/images/ana.png'
import Joao from '@assets/images/joao.png'
import Maria from '@assets/images/maria.png'
import Icon from '../Icon'
import Separator from '../Separator'
import Typography from '../Typography'
import * as S from './styles'
import { IProps } from './types'

const CardPartner = ({ name, description, photo }: IProps) => {
  const PhotoSetup = {
    ana: <S.Image src={Ana} />,
    joao: <S.Image src={Joao} />,
    maria: <S.Image src={Maria} />,
  }

  return (
    <>
      <S.ContainerPartner>
        <Icon name="aspas" />

        <S.ContainerDescription>
          <Typography>{description}</Typography>
        </S.ContainerDescription>

        <S.WrapperPhotoAndName>
          <S.WrapperPhoto>{photo && PhotoSetup[photo]}</S.WrapperPhoto>
          <Typography>{name}</Typography>
        </S.WrapperPhotoAndName>
      </S.ContainerPartner>
      <Separator verticalSize={20} />
    </>
  )
}

export default CardPartner
