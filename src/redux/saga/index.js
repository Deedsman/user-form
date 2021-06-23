import {all} from 'redux-saga/effects';
import {usersWatcher,setUsersWatcher,putUsersWatcher,deleteUsersWatcher} from './userSaga';


export default function* rootWatcher(){
    yield all([usersWatcher(),setUsersWatcher(),putUsersWatcher(),deleteUsersWatcher()])
}