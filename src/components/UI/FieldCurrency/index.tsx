import Separator from "@components/UI/Separator";

import { IViewProps } from "./types";
import { Container, Label, CurrencyInput } from "./styles";

const FieldCurrency = ({
  label,

  name,
  id,
  onChange,
  placeholder,
  value,
}: IViewProps) => {
  return (
    <Container>
      {!!label && (
        <>
          <Label>{label}</Label>
          <Separator verticalSize={4} />
        </>
      )}
      <Container>
        <CurrencyInput
          id={id}
          name={name}
          inputMode="numeric"
          prefix="R$ "
          decimalScale={2}
          value={value}
          placeholder={placeholder}
          decimalSeparator=","
          groupSeparator="."
          decimalsLimit={2}
          fixedDecimalLength={2}
          onValueChange={onChange}
          autoFocus
        />
      </Container>
    </Container>
  );
};

export default FieldCurrency;
