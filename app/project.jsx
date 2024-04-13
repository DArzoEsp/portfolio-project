/* eslint-disable react/prop-types */
export default function Project(props) {
    console.log(`./img/${props.projectImg}`)
    return (
        <div className="project">
            <a className="project__link-container" target='_blank' href={`${props.projectLink}`}>
                <div className="project__name">{props.projectName}</div>
                <img className="project__img" src={props.projectImg}/>
                <div className="project__description">{props.projectDescription}</div>
            </a>
        </div>
    )
}