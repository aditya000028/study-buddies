import classes from "./NavigationTile.module.css";

export default function NavigationTile (props) {
  return <div className={classes.tileContent}>
    {props.icon}
    {props.title}
  </div>;
}