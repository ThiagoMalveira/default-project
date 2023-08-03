import ImageLogin from '@components/ImageLogin'
import ButtonGradient from '@components/UI/ButtonGradient'
import Field from '@components/UI/Field'
import FieldDatePicker from '@components/UI/FieldDatePicker'
import FieldSelect from '@components/UI/FieldSelect'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import Brightness1Icon from '@mui/icons-material/Brightness1'
import { theme } from '@resources/theme'
import { ChangeEvent } from 'react'
import * as S from './styles'
import useSignUp from './useSignUp'

const SignUp = () => {
  const {
    step,
    formik,
    handleDateChange,
    selectedDate,
    segmentos,
    loading,
    handleSignUp,
  } = useSignUp()

  return (
    <S.Container>
      <ImageLogin />
      <S.WrapperForm>
        <S.WrapperStep>
          <Typography
            align="center"
            size={16}
            weight="400"
            color={theme.palette.warning.lightest}
          >
            PASSO {step}
          </Typography>
        </S.WrapperStep>
        <S.WrapperIcons>
          <Brightness1Icon sx={{ color: '#4BBA4F' }} />
          {step > '1' ? (
            <Brightness1Icon sx={{ color: '#4BBA4F' }} />
          ) : (
            <Brightness1Icon sx={{ color: '#C1C1C1' }} />
          )}
          {step > '2' ? (
            <Brightness1Icon sx={{ color: '#4BBA4F' }} />
          ) : (
            <Brightness1Icon sx={{ color: '#C1C1C1' }} />
          )}
          {step > '3' ? (
            <Brightness1Icon sx={{ color: '#4BBA4F' }} />
          ) : (
            <Brightness1Icon sx={{ color: '#C1C1C1' }} />
          )}
        </S.WrapperIcons>
        <S.WrapperTitle>
          <Typography
            align="center"
            size={28}
            weight="700"
            color={theme.palette.text.dark}
          >
            Cadastre os dados de sua empresa
          </Typography>
        </S.WrapperTitle>
        <S.WrapperDescription>
          <Typography
            align="center"
            size={16}
            weight="400"
            color={theme.palette.text.dark}
          >
            Após o cadastro inicial, nossa equipe validará os dados. Caso seja
            aprovado, você receberá um acesso para cadastrar os produtos e
            iniciar as vendas.
          </Typography>
        </S.WrapperDescription>
        <S.WrapperFields>
          <Field
            marginInputLeft={20}
            marginInputRight={20}
            inputWidth={504}
            labelTop="CNPJ"
            labelColor={theme.palette.text.dark}
            placeholder={'Digite o CNPJ'}
            {...formik.getFieldProps('clienteCnpj')}
            errorMessage={formik.errors.clienteCnpj}
          />
          <S.WrapperFieldRow>
            <FieldDatePicker
              onChange={handleDateChange}
              labelTop="Data de fundação"
              labelColor={theme.palette.text.dark}
              maxDate={new Date()}
              selectedDate={selectedDate}
              errorMessage={formik.errors.clienteDataFundacao}
            />
            <Separator horizontalSize={10} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={152}
              labelTop="Inscrição Municipal"
              labelColor={theme.palette.text.dark}
              placeholder={'Digite aqui'}
              {...formik.getFieldProps('clienteInscricaoMunicipal')}
              errorMessage={formik.errors.clienteInscricaoMunicipal}
            />
            <Separator horizontalSize={10} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={152}
              labelTop="Inscrição Estadual"
              labelColor={theme.palette.text.dark}
              placeholder={'Digite aqui'}
              {...formik.getFieldProps('clienteInscricaoEstadual')}
              errorMessage={formik.errors.clienteInscricaoEstadual}
            />
          </S.WrapperFieldRow>
          <FieldSelect
            inputWidth={504}
            labelTop="Segmentos de atuação"
            labelColor={theme.palette.text.dark}
            list={segmentos}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => {
              const selectedOptions = Array.from(event.target.options)
                .filter((option) => option.selected)
                .map((option) => ({
                  segmentoId: Number(option.value),
                  segmentoNome: option.text,
                }))
              formik.setFieldValue('segmentos', selectedOptions)
            }}
          />
          <Field
            marginInputLeft={20}
            marginInputRight={20}
            inputWidth={504}
            labelTop="Capacidade de entrega"
            labelColor={theme.palette.text.dark}
            placeholder={'Todo o Brasil'}
            {...formik.getFieldProps('capacidadeEntrega')}
            errorMessage={formik.errors.capacidadeEntrega}
          />
          <S.WrapperFieldRow>
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={239}
              labelTop="E-mail"
              labelColor={theme.palette.text.dark}
              placeholder={'E-mail para contato'}
              {...formik.getFieldProps('clienteEmailComercial')}
              errorMessage={formik.errors.clienteEmailComercial}
            />
            <Separator horizontalSize={10} />
            <Field
              marginInputLeft={20}
              marginInputRight={20}
              inputWidth={239}
              labelTop="Celular"
              labelColor={theme.palette.text.dark}
              placeholder={'Opcional'}
              {...formik.getFieldProps('clienteTelefoneComercial')}
              errorMessage={formik.errors.clienteTelefoneComercial}
            />
          </S.WrapperFieldRow>
        </S.WrapperFields>
        <S.WrapperButton>
          <ButtonGradient
            onClick={handleSignUp}
            loading={loading}
            width={504}
            height={59}
            borderRadius={100}
            type="button"
          >
            <Typography
              size={18}
              align="center"
              weight="600"
              color={theme.palette.text.lightest}
            >
              Prosseguir
            </Typography>
          </ButtonGradient>
        </S.WrapperButton>
      </S.WrapperForm>
    </S.Container>
  )
}

export default SignUp
