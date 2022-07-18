import './Experience.scss';

const Experience = ({ experience }) => {
    console.log(experience);

    return (
        <div className='container'>
            <div className='col-2'>
                <div className='col'>
                    <h2>Experiencia Laboral</h2>
                </div>
                <div className='col'>
                    <div className='description-container'>
                    { experience.map((item) => {
                        return (
                            <dl className='description-list'>
                                <dt className='description-list__term'>{item.date}</dt>
                                <dd className='description-list__description'>{item.name}</dd>
                                <dd className='description-list__description description-list--italic'>{item.where}</dd>
                                <dd className='description-list__text'>{item.description}</dd>
                            </dl>
                        )
                    } ) }
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Experience;