import './Hero.scss';

const Hero = ({ hero }) => {
    
    return (
        <section className='hero'>
            <div className='hero__container'>
                <div className='col-2'>
                    <div className='col'>
                        <div className='hero__info'>
                            <div>
                                <p className='antetitle'>¡Hola! Soy</p>
                                <h1 className='hero__title'>Ana Doig</h1>
                                <p className='subtitle'>Desarrolladora front</p>
                            </div>
                            <div>
                                <a  className='hero__link hero__link--email underline-animation' href={'mailto:' + hero.email}>{hero.email}</a>
                                <a className='hero__link hero__link--phone underline-animation' href={'tel:' + hero.phone}>{hero.phone}</a>
                                <a className='hero__link hero__link--linkedin underline-animation' href={hero.linkedin}>LinkEdin</a>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col'>
                        <figure className='hero__main-img'>
                            <img src={hero.image} alt='Ana Doig' />
                        </figure>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Hero;