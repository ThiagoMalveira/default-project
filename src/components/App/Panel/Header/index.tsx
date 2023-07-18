import Icon from "@components/UI/Icon";
import Typography, { FontType } from "@components/UI/Typography";
import Separator from "@components/UI/Separator";
import { theme } from "@resources/theme";

import {
  Container,
  WrapperLogo,
  WrapperMenu,
  WrapperAvatar,
  WrapperMenuAvatar,
  MenuAvatarProfile,
  MenuAvatarOption,
  WrapperOptionIcon,
} from "./styles";
import { useHeader } from "./useHeader";

const Header = () => {
  const username = "Thiago Malveira";
  const { signOut } = useHeader();

  return (
    <Container>
      <WrapperLogo></WrapperLogo>

      <WrapperMenu>
        <WrapperAvatar>
          <Icon name="AvatarUserMenu" />

          <WrapperMenuAvatar>
            <MenuAvatarProfile>
              <Typography
                fontType={FontType.bold}
                size={12}
                align="right"
                lineHeight="15px"
                color={theme.palette.neutral.light}
              >
                {username} <br />
                <Typography
                  fontType={FontType.regular}
                  size={11}
                  align="right"
                ></Typography>
              </Typography>
              <Separator horizontalSize={5} />
              <Icon name="AvatarUserMenu" width={40} height={40} />
            </MenuAvatarProfile>

            <Separator verticalSize={20} />

            <MenuAvatarOption>
              <WrapperOptionIcon>
                <Icon name="menuAvatarEditProfile" />
              </WrapperOptionIcon>

              <Typography
                fontType={FontType.regular}
                size={12}
                align="left"
                lineHeight="15px"
                color={theme.palette.neutral.dark}
              >
                editar perfil
              </Typography>
            </MenuAvatarOption>

            <MenuAvatarOption>
              <WrapperOptionIcon>
                <Icon name="menuAvatarDashboard" />
              </WrapperOptionIcon>

              <Typography
                fontType={FontType.regular}
                size={12}
                align="left"
                lineHeight="15px"
                color={theme.palette.neutral.dark}
              >
                ir para o dashboard
              </Typography>
            </MenuAvatarOption>

            <MenuAvatarOption onClick={signOut}>
              <WrapperOptionIcon>
                <Icon name="menuAvatarLogout" />
              </WrapperOptionIcon>

              <Typography
                fontType={FontType.regular}
                size={12}
                align="left"
                lineHeight="15px"
                color={theme.palette.neutral.dark}
              >
                fazer logout
              </Typography>
            </MenuAvatarOption>
          </WrapperMenuAvatar>
        </WrapperAvatar>
      </WrapperMenu>
    </Container>
  );
};

export default Header;
