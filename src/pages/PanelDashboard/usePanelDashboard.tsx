import { DefaultizedPieValueType } from '@mui/x-charts'

const usePanelDashboard = () => {
  const datasets = [
    {
      label: 'Nome do produto 1',
      data: 34,
    },
    {
      label: 'Nome do produto 2',
      data: 21,
    },
    {
      label: 'Nome do produto 3',
      data: 11,
    },
    {
      label: 'Nome do produto 4',
      data: 7,
    },
    {
      label: 'Nome do produto 5',
      data: 5,
    },
  ]

  const colors = ['#B3B3B3', '#8D8D8D', '#695F5F', '#E9C86A']

  const data = [
    { value: 35, label: 'Sudeste', color: '#E9C86A' },
    { value: 15, label: 'Nordeste', color: '#695F5F' },
    { value: 15, label: 'Sul', color: '#8D8D8D' },
    { value: 35, label: 'Norte', color: '#B3B3B3' },
  ]

  const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0)

  const getArcLabel = (params: DefaultizedPieValueType) => {
    const percent = params.value / TOTAL
    return `${(percent * 100).toFixed(0)}%`
  }

  return {
    datasets,
    data,
    colors,
    getArcLabel,
  }
}

export default usePanelDashboard
