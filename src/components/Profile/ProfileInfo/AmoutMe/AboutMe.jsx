import style from "./AboutMe.module.css"

function AboutMe(props) {

    let contactsArray = [
        "Facebook: " + props.profile.contacts.facebook,
        "Github: " + props.profile.contacts.github,
        "Instagram: " + props.profile.contacts.instagram,
        "Twitter: " + props.profile.contacts.twitter,
        "Vk: " + props.profile.contacts.vk,
        "Youtube: " + props.profile.contacts.youtube,
        "Website: " + props.profile.contacts.website,
        "Main Link: " + props.profile.contacts.mainLink];
    let contacts = contactsArray.map(link => <p>{link}</p>)

    return (
        <div className={style.block}>
            <h3>About Me</h3>
            <div>
                <p>{props.profile.name}</p>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                {contacts}
                <p>{props.profile.lookingForAJob}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
        </div>
    )
}

export default AboutMe;