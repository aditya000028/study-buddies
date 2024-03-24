import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NavigationTile from "./NavigationTile";
import { NAVIGATION_DATA } from "../../../data/navigation/NavigationData";

function MainNavigation() {
  return (
    <nav className={classes.navContainer}>
      <ul>
        {NAVIGATION_DATA.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>
                <NavigationTile
                  title={item.title}
                  path={item.path}
                  icon={item.icon}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MainNavigation;
