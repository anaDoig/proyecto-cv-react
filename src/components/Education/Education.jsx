import './Education.scss';

const Education = ({ education }) => {
    return (
        <div className='container'>
            <div className='col-2'>
                <div className='col'>
                    <h2>Formación</h2>
                </div>
                <div className='col'>
                    <div className='description-container'>
                        {education.map((item) => {
                            return (
                                <dl className='description-list'>
                                    <dt className='description-list__term'>{item.date}</dt>
                                    <dd className='description-list__description'>{item.name}</dd>
                                    <dd className='description-list__description description-list--italic'>{item.where}</dd>
                                </dl>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;