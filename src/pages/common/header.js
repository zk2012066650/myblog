import { NavLink } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="welcome">
            <span>欢迎光临 Domon 的空间！！！</span>
        </div>
    )
}
const activeClassName = ({isActive}) => {
    return isActive ? 'item-Actived' : 'item'
}
const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/" className={activeClassName} > 网站首页 </NavLink>
            <NavLink to="/faq" className={activeClassName} > 生活日记 </NavLink>
            <NavLink to="/faq" className={activeClassName} > 心情说说 </NavLink>
            <NavLink to="/faq" className={activeClassName} > 关于我 </NavLink>
        </div>
    )
}

const Header = (props) => {
    return (
        <div className="header">
            <Welcome />
            <Navigation />
        </div>
    )
}
export default Header;