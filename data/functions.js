import rp from 'request-promise';

function loadById(relativeUrl) {
  return rp({uri: relativeUrl, json: true})
    .then(res => {
      return res
    })
}


export { loadById }
