import HeaderIcon from "./util/headerIcons";
import HeaderLinks from "./util/headerLinks";

export default function Header() {
    return (
        <div className='header' alt='header'>
            <HeaderLinks />
            <HeaderIcon />
        </div>
    )
}