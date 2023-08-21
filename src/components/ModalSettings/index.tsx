import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import useHandleLogout from '@hooks/useHandleLogout'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { theme } from '@resources/theme'
import * as S from './styles'

const ModalSettings = () => {
  const { handleLogout } = useHandleLogout()

  return (
    <>
      <S.ModalContainer>
        <S.WrapperName>
          <S.WrapperIconOutlined>
            <PersonOutlineOutlinedIcon sx={{ fontSize: 24 }} />
          </S.WrapperIconOutlined>
          <Typography color={theme.palette.text.dark} size={16} weight="600">
            Dashboard
          </Typography>
        </S.WrapperName>
        <Separator displayLine={true} horizontalSize={10} />
        <S.WrapperOptions>
          <SettingsOutlinedIcon sx={{ color: theme.palette.tertiary.dark }} />
          <Typography
            color={theme.palette.secondary.dark}
            size={16}
            weight="600"
          >
            Configurações
          </Typography>
        </S.WrapperOptions>
        <S.WrapperOptions>
          <PaidOutlinedIcon sx={{ color: theme.palette.tertiary.dark }} />
          <Typography
            color={theme.palette.secondary.dark}
            size={16}
            weight="600"
          >
            Dados bancários
          </Typography>
        </S.WrapperOptions>
        <S.WrapperOptions>
          <HelpOutlineOutlinedIcon
            sx={{ color: theme.palette.tertiary.dark }}
          />
          <Typography
            color={theme.palette.secondary.dark}
            size={16}
            weight="600"
          >
            Suporte
          </Typography>
        </S.WrapperOptions>
        <S.WrapperOptions onClick={() => handleLogout()}>
          <LogoutOutlinedIcon sx={{ color: theme.palette.tertiary.dark }} />
          <Typography
            color={theme.palette.secondary.dark}
            size={16}
            weight="600"
          >
            Sair
          </Typography>
        </S.WrapperOptions>
      </S.ModalContainer>
    </>
  )
}

export default ModalSettings
