const usePageTitle = () => {
  const url = window.location.pathname
  const urlSplited = url.split('/')
  const pageName = urlSplited[2]
  const pageTitle = pageName[0].toUpperCase() + pageName.substring(1)
  return { pageTitle }
}

export default usePageTitle
