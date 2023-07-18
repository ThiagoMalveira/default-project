import Typography, { FontType } from "@components/UI/Typography";
import Separator from "@components/UI/Separator";
import { Container, ContainerContent, ContainerText } from "./styles";
import { theme } from "@resources/theme";
import Header from "@components/App/Panel/Header";

const Home = () => {
  return (
    <Container>
      <Header />
      <ContainerContent>
        <Separator verticalSize={15} />
        <ContainerText>
          <Typography
            size={32}
            align="center"
            lineHeight="42px"
            fontType={FontType.neueMetana}
            color={theme.palette.primary.dark}
          >
            Em qual sessão você gostaria de entrar?
          </Typography>
        </ContainerText>
      </ContainerContent>
    </Container>
  );
};

export default Home;
