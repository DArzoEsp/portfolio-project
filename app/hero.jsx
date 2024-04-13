import Self from '/images/portfolio-portrait.png'

export default function Hero() {
    return (
        <div className="hero__title">Welcome
            <div className="hero">
                <div className="hero__introduction">
                    <div className="hero__paragraph">
                        My name is David Arzola-Espero. I created my portfolio using React and Sass.
                        I am an aspiring Software Developer. I have a core belief that I will never
                        stop learning, as such I have a proactive approach to learning and problem-solving.    
                    </div>
                    <img className="hero__img" src={Self}></img>
                </div>
            </div>
        </div>
    )
}