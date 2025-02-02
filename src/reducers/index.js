import { combineReducers } from 'redux';
import Auth from './auth';
import Errors from './Errors';
import Messages from './Messages';
import Rooms from './Rooms';
import Agents from './Agents';
import Houses from './Houses';
import Lands from './Lands';
import RoomAdded from './RoomAdded';
export default combineReducers( {
    auth: Auth,
    errors: Errors,
    messages: Messages,
    rooms: Rooms,
    agents: Agents,
    houses: Houses,
    Lands: Lands,
    RoomAdded: RoomAdded
} );