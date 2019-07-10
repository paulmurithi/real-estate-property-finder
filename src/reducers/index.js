import { combineReducers } from 'redux';
import Auth from './auth';
import Errors from './Errors';
import Messages from './Errors';
import Rooms from './Rooms';
import Agents from './Agents';
import Houses from './Houses';
import Lands from './Lands';
export default combineReducers( {
    auth: Auth,
    errors: Errors,
    messages: Messages,
    rooms: Rooms,
    agents: Agents,
    houses: Houses,
    Lands: Lands
} );