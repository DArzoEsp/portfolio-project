/* eslint-disable react/prop-types */
export default function Skillset(props) {
    return (
        <div className="skillset">
            <ul>
                <li className="skill">{props.skillset}</li>
            </ul>
        </div>
    )
}