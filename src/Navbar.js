import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1><Link to="/" className='mainlogo'>Blog-react</Link></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;