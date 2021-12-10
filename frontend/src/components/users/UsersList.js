import c from './users.module.css'
import {useEffect, useState} from "react";
import User from "./User";
import usersStore from "../../store/UsersStore";
import {observer} from "mobx-react-lite";



const UsersList = observer((props) => {
    const [countUsers, setCountUsers] = useState(50);
    const [fetching, setFetching] = useState(true);
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return function (){
            document.removeEventListener('scroll', scrollHandler);
        }
    }, []);

    useEffect(() => {
        console.log('roma')
        if (fetching && countUsers <= 150){
            usersStore.getUsers(countUsers).then(setFetching(false));
            console.log(countUsers)
        }
    }, [fetching]);

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) <  3){
            setCountUsers(prevState => prevState + 20);
            setFetching(true);
        }
    }

    return (
        <div>
            <div className={c.users}>
                {usersStore.users.length ?
                    usersStore.users.map((u, index) => {
                        return <User key={index+1}
                                     id={u.id}
                                     name={u.name}/>
                    }) : <div>nothing</div>}
            </div>
            <p className={c.end}>{countUsers >= 150 ? 'Больше ничего нет :(': ''}</p>
        </div>
    );
});


export default UsersList;