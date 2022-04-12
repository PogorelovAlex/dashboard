import api from "../http";

export default class CallsService {
    static fetchCalls() {
        return api.post('/calls')
    }
}