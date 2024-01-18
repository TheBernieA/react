import classes from "./Wrapper.module.css";

const Wrapper = (props) => {
  return <ul className={classes.item}>{props.children}</ul>;
};

export default Wrapper;
