import React from 'react'
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";
import {Menu as AntMenu} from "antd";
import {
    CustomerServiceTwoTone,
    FileTextTwoTone,
    HomeTwoTone,
    MessageTwoTone,
    SecurityScanTwoTone,
    SettingTwoTone, SmileTwoTone
} from "@ant-design/icons";

function Menu(props) {

    return(
            <AntMenu mode="inline">
                <AntMenu.Item key="Profile" icon={<HomeTwoTone />}>
                    <div>
                        <NavLink to="/profile">Profile</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="Messages" icon={<MessageTwoTone />}>
                    <div>
                        <NavLink to="/dialogs">Messages</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="News" icon={<FileTextTwoTone />}>
                    <div>
                        <NavLink to="/news">News</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="Music" icon={<CustomerServiceTwoTone />}>
                    <div>
                        <NavLink to="/music">Music</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="Settings" icon={<SettingTwoTone />}>
                    <div>
                        <NavLink to="/settings">Settings</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="Users" icon={<SecurityScanTwoTone />}>
                    <div>
                        <NavLink to="/users">Find Users</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.SubMenu key="Friends" title={"Friends"} icon={<SmileTwoTone />}>
                        <FriendsContainer/>
                </AntMenu.SubMenu>
            </AntMenu>
    );
}

export default Menu;