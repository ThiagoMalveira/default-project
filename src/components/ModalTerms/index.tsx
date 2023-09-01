import ButtonGradient from '@components/UI/ButtonGradient'
import Typography from '@components/UI/Typography'
import useRegister from '@pages/Register/useRegister'
import { theme } from '@resources/theme'
import TermsText from './mock'
import * as S from './styles'

const ModalTerms = () => {
  const { handleOpenAndFinishContract } = useRegister()

  return (
    <S.Container>
      <S.WrapperTitle>
        <Typography size={18} weight="600" color={theme.palette.text.dark}>
          Termos de parceria
        </Typography>
      </S.WrapperTitle>

      <S.WrapperTermsText>
        <Typography
          size={16}
          weight="400"
          lineHeight="20.8px"
          color={theme.palette.secondary.dark}
        >
          {TermsText}
        </Typography>
      </S.WrapperTermsText>

      <S.WrapperButton>
        <ButtonGradient
          height={59}
          width={265}
          onClick={handleOpenAndFinishContract}
        >
          <Typography
            size={18}
            weight="600"
            align="center"
            color={theme.palette.primary.lightest}
          >
            Li e estou de acordo
          </Typography>
        </ButtonGradient>
      </S.WrapperButton>
    </S.Container>
  )
}

export default ModalTerms
