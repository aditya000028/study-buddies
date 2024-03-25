import classes from "./NavigationTile.module.css";

export default function NavigationTile(props) {
  return (
    <div className={classes.tileContent}>
      <div className={classes.icon}>{props.icon}</div>
      <h3 className={classes.title}>{props.title}</h3>
    </div>
  );
}
