import ModalSettings from '@components/ModalSettings'
import Typography from '@components/UI/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchIcon from '@mui/icons-material/Search'
import { theme } from '@resources/theme'
import * as S from './styles'
import useHeaderPartner from './useHeaderPartner'

const HeaderPartner = () => {
  const { handleChangeModal, isSettingOpen } = useHeaderPartner()

  return (
    <S.Container>
      <S.WrapperLogo>
        <Typography color={theme.palette.text.dark} size={24} weight="600">
          Dashboard
        </Typography>
      </S.WrapperLogo>
      <S.WrapperIcons>
        <SearchIcon sx={{ fontSize: 24 }} />
        <NotificationsNoneOutlinedIcon sx={{ fontSize: 24 }} />
        <S.WrapperIconPerson onClick={handleChangeModal}>
          <S.WrapperIconOutlined>
            <PersonOutlineOutlinedIcon sx={{ fontSize: 24 }} />
          </S.WrapperIconOutlined>
          <KeyboardArrowDownIcon sx={{ fontSize: 24 }} />
          {isSettingOpen && <ModalSettings />}
        </S.WrapperIconPerson>
      </S.WrapperIcons>
    </S.Container>
  )
}

export default HeaderPartner
