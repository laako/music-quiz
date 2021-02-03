type User = {
    user: any;
    token: string;
};

export type UserContextType = {
    user: User;
    setUser: React.Dispatch<User | null>;
};
