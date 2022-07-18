import './More.scss';

const More = ({languages, skills, more}) => {
    console.log(more);
    return (
        <section className='more section' id="more">
            <div className='container'>
                <h2>Conocimientos</h2>
                <p className='subtitle'>y aptitudes</p>
                <div className='col-3'>
                    <div className='col'>
                        <ul className='skills'>
                            <li className='skills__title'>Idiomas</li>
                            {languages.map((item) => {
                                return (
                                    <li className='skills__item' key={item}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='col'>
                        <ul className='skills'>
                            <li className='skills__title'>Tecnologías</li>
                            {skills.map((item) => {
                                return (
                                    <li className='skills__item' key={item}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='col'>
                        <ul className='skills'>
                            <li className='skills__title'>Otros</li>
                            {more.map((item) => {
                                return (
                                    <li className='skills__item' key={item}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default More;