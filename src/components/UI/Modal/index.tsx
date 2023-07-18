import Button from "@components/UI/Button";

import {
  Body,
  WrapperModal,
  WrapperContent,
  Container,
  Footer,
  WrapperButtonFooter,
  WrapperIcon,
} from "./styles";
import { IProps } from "./types";

const typesAlignFooter = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
};

const Modal = ({
  show = true,
  onCancel = () => null,
  onConfirm = () => null,
  onClose,
  bgColor,
  height = 260,
  width = 400,
  children = "",
  btCancelTitle = "",
  btConfirmTitle = "",
  btConfirmDisabled = false,
  btOutline = true,
  alignVertical = false,
  isLoading = false,
  bottomView = null,
}: IProps) => {
  const footerSetup = {
    horizontal: {
      direction: "row-reverse",
      widthButton: "100px",
      margin: "0 0 0 10px ",
    },
    vertical: {
      direction: "column",
      widthButton: "100%",
      margin: "5px 0 0 0",
    },
  };

  const footerDirection = alignVertical
    ? typesAlignFooter.VERTICAL
    : typesAlignFooter.HORIZONTAL;

  const footerSetupSelected = footerSetup[footerDirection];

  return (
    <Container isOpen={show}>
      <WrapperModal bgColor={bgColor} paddingBottom={!bottomView ? 20 : 0}>
        <WrapperContent
          height={height}
          isOpen={show}
          width={width}
          bgColor={bgColor}
        >
          {!!onClose && <WrapperIcon onClick={onClose}></WrapperIcon>}

          <Body>{!!children && children}</Body>

          {(btCancelTitle || btConfirmTitle) && (
            <Footer alignFooter={footerSetupSelected.direction}>
              {btConfirmTitle && (
                <WrapperButtonFooter
                  widthBtFooter={footerSetupSelected.widthButton}
                  marginBtFooter={footerSetupSelected.margin}
                >
                  <Button
                    type="button"
                    onClick={onConfirm}
                    disabled={btConfirmDisabled}
                    loading={isLoading}
                    widthFull
                  >
                    {btConfirmTitle}
                  </Button>
                </WrapperButtonFooter>
              )}

              {btCancelTitle && (
                <WrapperButtonFooter
                  widthBtFooter={footerSetupSelected.widthButton}
                  marginBtFooter={footerSetupSelected.margin}
                >
                  <Button
                    type="button"
                    onClick={onCancel}
                    disabled={isLoading}
                    outline={btOutline}
                    widthFull
                  >
                    {btCancelTitle}
                  </Button>
                </WrapperButtonFooter>
              )}
            </Footer>
          )}
        </WrapperContent>

        {!!bottomView && bottomView}
      </WrapperModal>
    </Container>
  );
};

export default Modal;
