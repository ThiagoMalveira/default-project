import Icon from "@components/UI/Icon";
import Typography from "@components/UI/Typography";
import ButtonOutline from "@components/UI/ButtonOutline";

import { Container, WrapperButton, WrapperLogo } from "./styles";
import { theme } from "@resources/theme";

const Header = () => {
  return (
    <Container>
      <WrapperLogo>
        <Icon name="logo" />
      </WrapperLogo>

      <WrapperButton>
        <ButtonOutline width={192} height={60}>
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
  );
};

export default Header;
