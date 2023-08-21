export const endpoints = {
  URL: {
    auth: {
      signIn: 'api/auth/signin',
    },
    clients: {
      createClient: 'api/clientes',
      getClientsById: '/api/clientes/{{id}}',
      getClients: '/api/clientes',
    },
    segment: {
      getSegments: 'api/segmentos',
    },
  },
}
