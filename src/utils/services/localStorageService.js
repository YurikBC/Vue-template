function storage () {
  if (arguments.length === 2) {
    return setItem (arguments[0], arguments[1])
  }
  if (arguments.length === 1) {
    return getItem (arguments[0])
  }
}

function getItem (val) {
  let data = window.localStorage.getItem(val)
  return data
}

function setItem (name, val) {
  let data = window.localStorage.setItem(name, val)
  return data
}

export default storage

