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
                <AntMenu.Item key="Profile" icon={<HomeTwoTone twoToneColor={"#4c00ff"} />}>
                    <div>
                        <NavLink to="/profile">Profile</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="Messages" icon={<MessageTwoTone twoToneColor={"#4c00ff"} />}>
                    <div>
                        <NavLink to="/dialogs">Messages</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="News" icon={<FileTextTwoTone twoToneColor={"#4c00ff"} />}>
                    <div>
                        <NavLink to="/news">News</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="Music" icon={<CustomerServiceTwoTone twoToneColor={"#4c00ff"} />}>
                    <div>
                        <NavLink to="/music">Music</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="Settings" icon={<SettingTwoTone twoToneColor={"#4c00ff"} />}>
                    <div>
                        <NavLink to="/settings">Settings</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="Users" icon={<SecurityScanTwoTone twoToneColor={"#4c00ff"} />}>
                    <div>
                        <NavLink to="/users">Find Users</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.SubMenu key="Friends" title={"Friends"} icon={<SmileTwoTone twoToneColor={"#4c00ff"} />}>
                        <FriendsContainer/>
                </AntMenu.SubMenu>
            </AntMenu>
    );
}

export default Menu;