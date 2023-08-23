import Icon from '@components/UI/Icon'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import { useHandleNavigate } from '@hooks/useHandleNavigate'
import { theme } from '@resources/theme'
import PathRoutes from '@route/PathRoutes'
import * as S from './styles'

const Footer = () => {
  const { handleNavigate } = useHandleNavigate()
  return (
    <S.Container>
      <S.WrapperLogo>
        <Icon name="logo" />
      </S.WrapperLogo>
      <S.WrapperMap>
        <Typography
          align="start"
          size={18}
          weight="600"
          color={theme.palette.text.lightest}
        >
          Mapa do site
        </Typography>
        <Separator verticalSize={10} />
        <Typography
          align="start"
          size={18}
          lineHeight="27px"
          weight="600"
          color={theme.palette.text.light}
          onClick={() => handleNavigate(PathRoutes.SIGN_UP)}
        >
          Seja parceiro
        </Typography>
        <Typography
          align="start"
          size={18}
          lineHeight="27px"
          weight="600"
          color={theme.palette.text.light}
          onClick={() => handleNavigate(PathRoutes.SIGN_IN)}
        >
          Entrar
        </Typography>
      </S.WrapperMap>
      <S.WrapperContactUs>
        <Typography
          align="start"
          size={18}
          weight="600"
          color={theme.palette.text.lightest}
        >
          Fale conosco
        </Typography>
        <Separator verticalSize={10} />
        <S.WrapperEmail
          onClick={() =>
            (window.location.href = 'mailto:contato@konekte.com.br')
          }
        >
          <Icon name="email" />
          <Separator horizontalSize={4} />
          <Typography
            align="start"
            size={18}
            lineHeight="27px"
            weight="600"
            color={theme.palette.text.lightest}
          >
            contato@konekte.com.br
          </Typography>
        </S.WrapperEmail>
        <S.WrapperWhatsApp
          onClick={() => (window.location.href = 'tel: 11 99999-9999')}
        >
          <Icon name="whatsAppFooter" />
          <Separator horizontalSize={4} />
          <Typography
            align="center"
            size={18}
            lineHeight="27px"
            weight="600"
            color={theme.palette.text.lightest}
          >
            11 99999-9999
          </Typography>
        </S.WrapperWhatsApp>
      </S.WrapperContactUs>
      <S.WrapperFollowUs>
        <Typography
          align="start"
          size={18}
          weight="600"
          color={theme.palette.text.lightest}
        >
          Acompanhe nas redes
        </Typography>
        <Separator verticalSize={10} />
        <S.WrapperInstagram>
          <Icon name="instagram" />
          <Separator horizontalSize={4} />
          <Typography
            align="center"
            size={18}
            lineHeight="27px"
            weight="600"
            color={theme.palette.text.lightest}
          >
            konekte Official
          </Typography>
        </S.WrapperInstagram>
      </S.WrapperFollowUs>
    </S.Container>
  )
}

export default Footer
