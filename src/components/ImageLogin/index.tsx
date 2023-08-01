import Login_PNG from '@assets/images/login.png'
import Icon from '@components/UI/Icon'
import Typography from '@components/UI/Typography'
import { theme } from '@resources/theme'
import * as S from './styles'

const ImageLogin = () => {
  return (
    <S.ContainerImage>
      <S.WrapperLogo>
        <Icon name="logo-white" />
      </S.WrapperLogo>
      <S.WrapperImage>
        <img src={Login_PNG} alt="KONEKTE" />
      </S.WrapperImage>
      <S.WrapperText>
        <Typography
          align="center"
          size={24}
          weight="300"
          lineHeight="29px"
          color={theme.palette.text.dark}
        >
          Tecnologia que conecta sua empresa aos {''}
          <Typography
            align="center"
            size={24}
            weight="700"
            lineHeight="29px"
            color={theme.palette.text.dark}
          >
            melhores canais digitais.
          </Typography>
        </Typography>
      </S.WrapperText>
    </S.ContainerImage>
  )
}

export default ImageLogin
