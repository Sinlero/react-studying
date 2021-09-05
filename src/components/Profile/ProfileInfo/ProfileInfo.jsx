import style from "./ProfileInfo.module.css";
import AboutMe from "./AmoutMe/AboutMe";
import {Spin} from "antd";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Spin/>
    }

    return (
        <div className={style.profileInfo}>
            <div className={style.header}>
                <img src="https://vastphotos.com/files/uploads/photos/10185/japan-mountain-landscape-m.jpg"
                     alt="header"/>
            </div>
            <div className={style.components}>
                <div className={style.avatar}>
                    <img className={style.img}
                         src="data:image/webp;base64,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"
                         alt="avatar"/>
                </div>
                <AboutMe profile={props.profile}/>
            </div>
        </div>
    )
}

export default ProfileInfo;