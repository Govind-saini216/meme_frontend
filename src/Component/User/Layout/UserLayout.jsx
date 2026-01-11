import { Outlet } from "react-router-dom";
import Header from '../Layout/Header.jsx';

const UserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default UserLayout;
