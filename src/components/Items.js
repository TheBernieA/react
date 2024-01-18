import { Link } from "react-router-dom";
import classes from "./Items.module.css";
import Card from "./UI/Card";

const Items = (props) => {
  return (
    <li key={props.id}>
      <Card>
        <div className={classes.cover}>
          <img src={props.image} alt="" />
        </div>
        <h3 className="">{props.name}</h3>
        <div className={classes.price}>€{props.price}</div>
      </Card>
      <div className="">
        <Link to={`/item/${props.id}`}>Item Details</Link>
      </div>
    </li>
  );
};

export default Items;
