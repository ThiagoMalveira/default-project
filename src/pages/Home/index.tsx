import Typography from "@components/UI/Typography";
import * as S from "./styles";
import { theme } from "@resources/theme";
import Header from "@components/App/Panel/Header";
import Icon from "@components/UI/Icon";
import ButtonGradient from "@components/UI/ButtonGradient";

const Home = () => {
  return (
    <S.Container>
      <Header />
      <S.ContainerContent>
        <S.ContentsLeft>
          <S.ContainerText>
            <Typography
              size={44}
              weight="700"
              color={theme.palette.info.regular}
            >
              Alcance
              <Typography size={44} color={theme.palette.info.dark}>
                {" "}
                milhões{" "}
              </Typography>
              de
            </Typography>
          </S.ContainerText>

          <S.ContainerText>
            <Typography
              size={44}
              weight="700"
              color={theme.palette.info.regular}
            >
              {" "}
              clientes de uma só vez
            </Typography>
          </S.ContainerText>
          <S.AllTextsLighter>
            <S.ContainerTextLighter>
              <Typography
                size={20}
                weight="600"
                lineHeight="24px"
                color={theme.palette.info.light}
              >
                Aproveite a promoção de lançamento
              </Typography>
            </S.ContainerTextLighter>

            <S.ContainerTextLighter>
              <Typography
                size={20}
                weight="600"
                lineHeight="24px"
                color={theme.palette.info.light}
              >
                Sem custos de setup e fee mensal
              </Typography>
            </S.ContainerTextLighter>
          </S.AllTextsLighter>
          <S.WrapperButton>
            <ButtonGradient width={248} height={60}>
              <Typography
                size={18}
                weight="600"
                lineHeight="24px"
                color={theme.palette.primary.light}
              >
                Quero ser parceiro
              </Typography>
            </ButtonGradient>
          </S.WrapperButton>
        </S.ContentsLeft>
        <S.ContainerImage>
          <Icon name="dashboard" />
        </S.ContainerImage>
      </S.ContainerContent>
      <S.ContainerStep>
        <S.ContainerTitle>
          <Typography
            size={32}
            weight="700"
            lineHeight="24px"
            color={theme.palette.text.dark}
            align="center"
          >
            Acesse milhões de clientes com a Konekte. Você gerencia seus
            <Typography align='center' size={32} color={theme.palette.text.regular}>
                {" "}
                produtos, valores, promoções e estoques disponíveis.
            </Typography>
          </Typography>

        </S.ContainerTitle>
        <S.WrapperIcon>
          <Icon name="whatsapp"/>
        </S.WrapperIcon>
      </S.ContainerStep>
    </S.Container>
  );
};

export default Home;
