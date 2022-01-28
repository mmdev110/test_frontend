import axios, { AxiosResponse, AxiosError } from 'axios'
const requestBackend = async (
    path: string,
    method: string,
    params?: any
): Promise<AxiosResponse> => {
    const endpoint = process.env.REACT_APP_API_ENDPOINT!+ path
    var response: AxiosResponse
    try {
        //const authorization = generateAuthorization()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                //Authorization: authorization,
            },
        }
        if (method === 'POST') {
            response = await axios.post(endpoint, params, config)
        } else {
            response = await axios.get(endpoint, config)
        }
    } catch (error) {
        throw error
    }
    return response
}


//const generateAuthorization = (): string => {
//    const jwt = window.localStorage.getItem('jwt')
//    const authorization = jwt ? 'Bearer ' + jwt : ''
//    return authorization
//}

export default requestBackend
