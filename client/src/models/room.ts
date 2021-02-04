export type RoomType = {
    author: string;
    roomcode: string;
};

export type RoomContextType = {
    room: RoomType | null;
    setRoom: React.Dispatch<RoomType | null>;
};
