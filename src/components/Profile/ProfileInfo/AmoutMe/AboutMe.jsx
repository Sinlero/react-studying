import style from "./AboutMe.module.css"

function AboutMe(props) {

    let info = ["Birth place: Blaga Vegas", "Date birth: 22.02.2000", "Some bullshit info: kek"];
    let render = info.map(el => <p key={el.charAt(0)}>{el}</p>);


    return (
        <div className={style.block}>
            <h3>About Me</h3>
            <div>
                {render}
            </div>
        </div>
    )
}

export default AboutMe;