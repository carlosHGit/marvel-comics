import CryptoJS from 'crypto-js'
import moment from 'moment'
import { marvelApi as config } from '@config/config'


class MarvelAPI {

  static getComics(origOptions = { nameStartsWith: '' }) {
    const defaultOptions = { nameStartsWith: '' }
    const options = Object.assign(defaultOptions, origOptions)
    const URI = '/v1/public/comics'
    const timeStamp = moment().unix()
    const hash = CryptoJS.MD5(timeStamp + config.privateKey + config.publicKey)
      .toString(CryptoJS.enc.Hex)
    let params = `?apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}`
    if (options.nameStartsWith) {
      const params = `?titleStartsWith=${options.nameStartsWith}&apikey=${config.publicKey}&ts=${timeStamp}&hash=${hash}`
      const url = `${config.baseUrl}${URI}${params}`
      return url
    }

    const url = `${config.baseUrl}${URI}${params}`
    return url
  }
}

export default MarvelAPI
