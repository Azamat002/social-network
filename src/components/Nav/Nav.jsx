import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

// console.log(classes);
// classes = {
//     'nav' :'Nav_nav__ZUrkW', 
//     'item': 'Nav_item__J2knR '
// ...
// ...
// }

const Nav = (props) => {

    let friendsList = props.stateNav.friends
        .map(friend => <Friends id={friend.id} name={friend.name}/>)

    return (
        <div>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to="/profile"
                             className={navData => navData.isActive ? classes.activeLink : classes.item}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs"
                             className={navData => navData.isActive ? classes.activeLink : classes.item}>Messages</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news"
                             className={navData => navData.isActive ? classes.activeLink : classes.item}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music"
                             className={navData => navData.isActive ? classes.activeLink : classes.item}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/setting"
                             className={navData => navData.isActive ? classes.activeLink : classes.item}>Settings</NavLink>
                </div>

            </nav>
            <div className={classes.friends}>
                <h1>Friends</h1>
                {/*<div><Friends state={props.state.friends[0]}/></div>*/}
                {friendsList}
                {/*<div><Friends state={props.state.friends[1]}/></div>*/}
                {/*<div><Friends state={props.state.friends[2]}/></div>*/}
            </div>
        </div>
    )
}

export default Nav;