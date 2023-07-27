export const populateStorage = (key: string, value: string) => {
  try {
    window.sessionStorage.setItem(key, value)
  } catch (error) {
    // TODO: how are we handling errors here??populateStorage
    console.log(error)
  }
}

export const getStorage = (key: string) => {
  try {
    return window.sessionStorage.getItem(key)
  } catch (error) {
    // TODO: how are we handling errors here??
    console.log(error)
  }
}

export const removeStorage = (key: string) => {
  try {
    window.sessionStorage.remoItem(key)
  } catch (error) {
    // TODO: how are we handling errors here??
    console.log(error)
  }
}

export const clearStorage = () => {
  try {
    window.sessionStorage.clear()
  } catch (error) {
    // TODO: how are we handling errors here??
    console.log(error)
  }
}
