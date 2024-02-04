import {MdCalendarToday} from "react-icons/md";
import { RiHome3Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

const routes = [
    {
        type: "link",
        label: "Home",
        icon: RiHome3Line,
        path: "/",
        component: null,
    },
    {
        type: "link",
        label: "Settings",
        icon: IoSettingsOutline,
        path: "/settings",
    },

    {
        type: "header",
        label: "Account",
        protected: true,
    },
    {
        type: "link",
        label: "Profile",
        icon: AiOutlineUser,
        path: "/profile",
        protected: true,
        component: null,
    },
    {
        type: "link",
        label: "Calendar",
        icon: MdCalendarToday,
        path: "/calendar",
        protected: true,
    },
];


export default routes;