const API_ENDPOINT = process.env.API_ENDPOINT
const API_DOMAIN_NAME = process.env.API_DOMAIN_NAME

const HEADERS = {
  'APPLICATION_JSON' : 'application/json',
  'APPLICATION_X_WWW_FORM_URLENCODED': 'application/x-www-form-urlencoded',
  'ACCESS_CONTROL_ALLOW_CREDENTIAL': 'access-control-allow-credential',
}

const METHODS = {
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  GET: 'GET',
  DELETE: 'DELETE',
}

const SAME_ORIGIN = 'same-origin'
const INCLUDE = 'include'
const CONTENT_TYPE = 'Content-Type'

const request = ({ endpoint, body, method, headers }) => {
  const newHeaders = new Headers()

  //might have to add headers a different way
  //there will be times the credential header needs to be include.  and not always same-origin
  if (headers) {
    newHeaders.append(CONTENT_TYPE, headers)
  }

  return (
    fetch(endpoint, {
      method: method,
      headers: newHeaders,
      credentials: SAME_ORIGIN,
      'access-control-allow-credential': 'true',
      body: body,
    })
  )
}

export { API_ENDPOINT, request, HEADERS, METHODS, API_DOMAIN_NAME }