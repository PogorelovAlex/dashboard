import {makeAutoObservable} from "mobx";
import CallsService from '../services/CallsService'




export default class Store {
    calls = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

   setCalls = (calls) => {
        this.calls = calls;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

     getCalls = async () => {
        try {
            const response = await CallsService.fetchCalls();
            console.log(response.data)
            this.setCalls(response);
        } catch (e) {
            console.log(e);
        }
    }
}