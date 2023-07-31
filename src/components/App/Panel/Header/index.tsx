import ButtonOutline from '@components/UI/ButtonOutline'
import Icon from '@components/UI/Icon'
import Typography from '@components/UI/Typography'

import { useHandleNavigate } from '@hooks/useHandleNavigate'
import { theme } from '@resources/theme'
import PathRoutes from '@route/PathRoutes'
import { Container, WrapperButton, WrapperLogo } from './styles'

const Header = () => {
  const { handleNavigate } = useHandleNavigate()

  return (
    <Container>
      <WrapperLogo>
        <Icon name="logo" />
      </WrapperLogo>

      <WrapperButton>
        <ButtonOutline
          onClick={() => handleNavigate(PathRoutes.SIGN_IN)}
          width={192}
          height={60}
        >
          <Typography
            size={14}
            align="flex-start"
            color={theme.palette.primary.light}
          >
            Entrar
          </Typography>
        </ButtonOutline>
      </WrapperButton>
    </Container>
  )
}

export default Header
