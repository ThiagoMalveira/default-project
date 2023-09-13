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

  const data = {
    labels: ['Sudeste', 'Nordeste', 'Sul', 'Centro-Oeste'],
    datasets: [
      {
        label: 'número de vendas',
        data: [35, 35, 15, 15],
        backgroundColor: ['#695F5F', '#B3B3B3', '#8D8D8D', '#E9C86A'],
      },
    ],
  }

  return {
    datasets,
    data,
  }
}

export default usePanelDashboard
