import axios from 'axios'


let options = {}

// The server-side needs a full url to work.
if (process.SERVER_BUILD) {
    options.baseURL = `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}`
}

export default axios.create(options)
