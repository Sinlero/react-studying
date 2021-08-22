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
        <nav>
            <AntMenu mode="inline">
                <AntMenu.Item key="1" icon={<HomeTwoTone />}>
                    <div>
                        <NavLink to="/profile">Profile</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="2" icon={<MessageTwoTone />}>
                    <div>
                        <NavLink to="/dialogs">Messages</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="3" icon={<FileTextTwoTone />}>
                    <div>
                        <NavLink to="/news">News</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="4" icon={<CustomerServiceTwoTone />}>
                    <div>
                        <NavLink to="/music">Music</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="5" icon={<SettingTwoTone />}>
                    <div>
                        <NavLink to="/settings">Settings</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.Item key="6" icon={<SecurityScanTwoTone />}>
                    <div>
                        <NavLink to="/users">Find Users</NavLink>
                    </div>
                </AntMenu.Item>
                <AntMenu.SubMenu key="7" popupOffset={[100,100]} title={"Friends"} icon={<SmileTwoTone />}>
                    <div>
                        <FriendsContainer/>
                    </div>
                </AntMenu.SubMenu>
            </AntMenu>
        </nav>
    );
}

export default Menu;