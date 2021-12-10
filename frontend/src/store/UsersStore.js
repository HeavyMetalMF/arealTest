import axios from 'axios';
import {makeAutoObservable} from "mobx";

class UsersStore {

    users = [];

    constructor() {
        makeAutoObservable(this);
    }

    getUsers(count){
        return axios.get(`http://testsite/api/users?count=${count}`).then(response => {
            this.users = [...this.users, ...response.data]
        })
    }
}

export default new UsersStore();