type UserType = {
    username: string;
    _id: string;
};

export type UserContextType = {
    user: UserType;
    setUser: React.Dispatch<UserType | null>;
};
