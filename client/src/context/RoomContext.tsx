import { createContext } from 'react';
import { RoomContextType } from '../models/room';

const RoomContext = createContext<RoomContextType | null>(null);

export default RoomContext;
