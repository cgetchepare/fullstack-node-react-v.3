import { ReactNode } from "react";

interface UserProps {
    name: string;
    children?: ReactNode;
}

// const User: React.FC<UserProps> = ({name, children}) => {    // obriga a ter um retorno
const User = ({name, children}: UserProps) => {
    return (
        <div>
            <p>Usuário: {name} </p>
            {children && <div>{children}</div>}
        </div>
    )
};

export default User;