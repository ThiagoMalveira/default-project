export const formatStringToCNPJ = (cnpj: string) => {
  const numericCNPJ = cnpj.replace(/\D/g, '')

  return `${numericCNPJ.substr(0, 2)}.${numericCNPJ.substr(
    2,
    3,
  )}.${numericCNPJ.substr(5, 3)}/${numericCNPJ.substr(
    8,
    4,
  )}-${numericCNPJ.substr(12)}`
}
