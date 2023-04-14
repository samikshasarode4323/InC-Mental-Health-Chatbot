import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    // {
    //     title: 'New Chat',
    //     path: '/newchat',
    //     icon: <BsIcons.BsFillChatDotsFill />,
    //     cName: 'nav-text'
    // },
    {
        title: 'Login',
        path: '/login',
        icon: <MdIcons.MdLogin />,
        cName: 'nav-text'
    },
    
]