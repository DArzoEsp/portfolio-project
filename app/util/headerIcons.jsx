export default function HeaderIcon() {
    return (
        <div className="header__icon-container">
            <a className="header__icon-link" href="https://github.com/DArzoEsp" target='_blank' rel='noreferrer noopener'>
                <i className="fa-brands fa-square-github header__icon-link" alt='GitHub'></i>
            </a>
            <a className="header__icon-link" href='https://www.linkedin.com/in/david-arzola-espero-5b717a1a5/' target='_blank' rel='noreferrer noopener'>
                <i className="fa-brands fa-linkedin header__icon-link" alt='LinkedIn'></i>
            </a>
            <a className="header__icon-link" href='https://mail.google.com/mail/u/1/?view=cm&fs=1&to=davidarzola80@gmail.com&tf=1' target='_blank' rel='noreferrer noopener'>
                <i className="fa-regular fa-envelope header__icon-link" alt='Email'></i>
            </a>
        </div>
    )
}