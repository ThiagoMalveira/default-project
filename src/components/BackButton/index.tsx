import Typography, { FontType } from "@components/UI/Typography";
import { theme } from "@resources/theme";
import { Container } from "./styles";
import Icon from "@components/UI/Icon";
import { IProps } from "./types";
import { useGoBack } from "@hooks/useGoBack";

const BackButton = ({ title }: IProps) => {
  const handleGoBack = useGoBack();

  return (
    <Container>
      <Icon onCallback={handleGoBack} name="arrowBack" />
      <Typography
        fontType={FontType.neueMetana}
        color={theme.palette.info.dark}
        size={18}
      >
        {title}
      </Typography>
    </Container>
  );
};

export default BackButton;
