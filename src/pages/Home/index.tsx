import ChannelImage from '@assets/images/ChannelImage.png'
import slaImage from '@assets/images/SLAImage.png'
import arezzo from '@assets/images/arezzo.png'
import arno from '@assets/images/arno.png'
import brasforma from '@assets/images/brasforma.png'
import britania from '@assets/images/britania.png'
import coffeLife from '@assets/images/coffelife.png'
import lg from '@assets/images/lg.png'
import philips from '@assets/images/philips.png'
import playthegames from '@assets/images/playgames.png'
import proxima from '@assets/images/proxima.png'
import someco from '@assets/images/someco.png'
import Header from '@components/App/Panel/Header'
import Button from '@components/UI/Button'
import ButtonGradient from '@components/UI/ButtonGradient'
import Card from '@components/UI/Card'
import Icon from '@components/UI/Icon'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import { theme } from '@resources/theme'
import * as S from './styles'

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
                {' '}
                milhões{' '}
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
              {' '}
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
      <S.ContainerWhatsApp>
        <S.ContainerTitle>
          <Typography
            size={32}
            weight="700"
            lineHeight="24px"
            color={theme.palette.text.dark}
            align="center"
          >
            Acesse milhões de clientes com a Konekte. Você gerencia seus
            <Typography
              align="center"
              size={32}
              color={theme.palette.text.regular}
            >
              {' '}
              produtos, valores, promoções e estoques disponíveis.
            </Typography>
          </Typography>
        </S.ContainerTitle>
        <S.WrapperIcon>
          <Icon name="whatsapp" />
        </S.WrapperIcon>
      </S.ContainerWhatsApp>
      <S.ContainerStep>
        <Card
          iconName={'document'}
          step={'1'}
          title={'Cadastre sua empresa'}
          description={
            'Você envia os dados básicos de sua empresa como CNPJ e segmento, e retornamos com a aprovação da parceria.'
          }
        />
        <Card
          iconName={'products'}
          step={'2'}
          title={'Cadastre seus produtos'}
          description={
            'Você cadastra os principais produtos de seu catálogo, e nós inserimos nos melhores canais de vendas.'
          }
        />
        <Card
          iconName={'money'}
          step={'3'}
          title={'Acompanhe suas vendas'}
          description={
            'Tudo pronto! Após selecionarmos os canais de venda, seu produto estará disponível para milhões de potenciais clientes.'
          }
        />
        <Card
          iconName={'up'}
          step={'4'}
          title={'Gerencie seu faturamento'}
          description={
            'Acompanhe as estatísticas de sua operação direto do painel do parceiro.'
          }
        />
      </S.ContainerStep>

      <S.ContainerPartners>
        <Typography
          align="center"
          size={32}
          weight="400"
          color={theme.palette.text.dark}
        >
          Alguns parceiros Konekte
        </Typography>
        <S.ContainerAllImages>
          <S.ContainerPartnersImage>
            <S.Image src={playthegames} />
            <S.Image src={coffeLife} />
            <S.Image src={proxima} />
            <S.Image src={philips} />
            <S.Image src={britania} />
          </S.ContainerPartnersImage>
          <S.ContainerPartnersImage>
            <S.Image src={arno} />
            <S.Image src={brasforma} />
            <S.Image src={lg} />
            <S.Image src={someco} />
            <S.Image src={arezzo} />
          </S.ContainerPartnersImage>
        </S.ContainerAllImages>
        <S.ContainerSLA>
          <S.ContainerSLAInside>
            <S.ImageSLA src={slaImage} />
            <S.ContainerTextSLA>
              <Typography
                align="start"
                size={32}
                weight="400"
                color={theme.palette.primary.light}
              >
                O hub de integração pensado para {''}
                <Typography
                  size={32}
                  weight="800"
                  align="start"
                  color={theme.palette.primary.light}
                >
                  indústrias e varejistas
                </Typography>
              </Typography>
              <Separator verticalSize={40} />
              <Typography
                color={'#F1F1F1'}
                size={20}
                weight="400"
                align="start"
              >
                Somos uma plataforma que nasceu em 2017 com o sonho de criar uma
                solução tecnológica que leve indústrias e varejistas a acessarem
                novos canais de vendas eletrônicos como marketplace, ecommerces
                e programas de fidelidade.
              </Typography>
              <Separator verticalSize={20} />
              <Typography
                size={20}
                weight="400"
                align="start"
                color={'#F1F1F1'}
              >
                Sem custos de setup, fee mensal e venda mínima. Rápida, segura e
                robusta para levar seus produtos a acessarem novos canais de
                vendas.
              </Typography>
              <S.WrapperButton>
                <Button
                  bgColor={'#FFFFFF'}
                  buttonTextColor={'#8E7838'}
                  borderRadius={100}
                  width={220}
                  height={58}
                >
                  <Typography size={18} weight="600">
                    Quero ser parceiro
                  </Typography>
                </Button>
              </S.WrapperButton>
            </S.ContainerTextSLA>
          </S.ContainerSLAInside>
        </S.ContainerSLA>
      </S.ContainerPartners>
      <S.ContainerChannel>
        <S.ContainerTextChannel>
          <Typography
            align="start"
            size={32}
            weight="400"
            color={theme.palette.text.dark}
          >
            Inteligência e expertise para alocar os seus produtos {''}
            <Typography
              size={32}
              weight="800"
              align="start"
              color={theme.palette.text.regular}
            >
              nos canais certos
            </Typography>
          </Typography>
          <Separator verticalSize={20} />
          <Typography size={20} weight="600" align="start" color={'#9D9D9D;'}>
            Com curadoria e tecnologia, alocamos os seus produtos nos canais com
            mais chances de vender. Mais praticidade e eficiência para sua
            operação.
          </Typography>
          <Separator verticalSize={20} />
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
        </S.ContainerTextChannel>
        <S.ImageChannel src={ChannelImage} />
      </S.ContainerChannel>
      <S.ContainerWhatPartnersSays></S.ContainerWhatPartnersSays>
    </S.Container>
  )
}

export default Home
