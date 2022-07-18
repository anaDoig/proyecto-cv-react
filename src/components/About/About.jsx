import './About.scss';

const About = ({ about }) => {

    return (
        <section className='section about' id="about">
            <div className='container'>
                <p className='antetitle'>Quién soy</p>
                <h2>Sobre mí</h2>
                <p>{about.aboutText}</p>
            </div>
        </section>
    )
}

export default About;