import { Fragment } from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../database";

const MOCK = DATA

const ItemDetails = () => {
  const params = useParams();

  const item = MOCK.find(item=>item.id.toString()===params.id)
  return (
    <Fragment>
      <h1>{params.id}Details</h1>
      <div>
        <div>
          <img width='350px' alt="" src={item.image}/>
        </div>
        <div>
          <h3 className="">Name: {item.name}</h3>
          <div className="">
            <strong>Price:</strong> €{item.price}
          </div>
          <div className="">
            <strong>Description:</strong>{item.description}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ItemDetails;
