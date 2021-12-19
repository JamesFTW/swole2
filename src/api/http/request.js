if (process.env.NODE_ENV === 'development') {
  require('es6-promise').polyfill()
  require('isomorphic-fetch')
}

const SAME_ORIGIN = 'same-origin'
const CONTENT_TYPE = 'Content-Type'
const POST = 'POST'

const request = ({
  endpoint,
  body,
  method = POST,
  headers/** Might want to accept array of headers */
}) => {
  let newHeaders = ''

  if (headers) {
    newHeaders = new Headers()
    newHeaders.append(CONTENT_TYPE, headers)
  }

  return (
    fetch(endpoint, {
      method: method,
      headers: newHeaders,
      credentials: SAME_ORIGIN,
      body: body
    })
  )
}

 export default request
