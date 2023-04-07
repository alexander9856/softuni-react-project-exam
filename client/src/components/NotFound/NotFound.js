import './NotFound.css'
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <section id="notFound">
            <img src={require('../../assets/error-icon-notebook-design-template-website-white-background-graphic-98813130-PhotoRoom.png-PhotoRoom.png')} />
            <p className="reason">The route you have selected is invalid.</p>
            <Link to="/">Now let's go back to home <i className="fa-solid fa-house"></i></Link>
        </section>
    )
}