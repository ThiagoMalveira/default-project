export const ApiGateway = () => {
  const api = {
    url: 'https://n7lnd0cuw2.execute-api.sa-east-1.amazonaws.com/konekt_dev',
  }

  return {
    baseURL: `${api.url}/`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Credentials': true,
      'X-Requested-With': '*',
      channel: 'web',
    },
    timeout: 30000,
    mode: 'no-cors',
    withCredentials: false,
    credentials: 'same-origin',
    crossdomain: true,
  }
}
