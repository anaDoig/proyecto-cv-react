import './NavBar.scss';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {

    return (
        <section className='navbar'>
            <div className='container'>
                <nav className='main-nav'>
                    <ul className='main-nav__list'>
                        <li className='main-nav__item'>
                            <HashLink smooth to="/#about">Sobre mí</HashLink>
                        </li>
                        <li className='main-nav__item'>
                            <HashLink smooth to="/#education-experience">Formación y Experiencia</HashLink>
                        </li>
                        <li className='main-nav__item'>
                            <HashLink smooth to="/#more">Conocimientos</HashLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default NavBar;