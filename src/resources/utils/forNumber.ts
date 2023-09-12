const TWO_DECIMAL_PLACES = 2

export const formatToMoney = (money: number): string | null => {
  const value = (Math.round(money * 100) / 100).toFixed(2)

  const formatedMoney = Number(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })

  return formatedMoney
}

export const formatCurrency = (value?: number): string => {
  if (!value) {
    value = 0
  }

  const currency = value
    .toFixed(TWO_DECIMAL_PLACES)
    .replace('.', `,`)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${'.'}`)
  return `${'R$'} ${currency}`
}

export const formatPercent = (value: number): string => {
  const valueFormatted = Number(value)
    .toFixed(TWO_DECIMAL_PLACES)
    .replace('.', ',')

  return `${valueFormatted}%`
}
