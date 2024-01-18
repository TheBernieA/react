import { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = (props) => {
  const [enteredImageLink, setEnteredImageLink] = useState("");
  const [enteredItemName, setEnteredItemName] = useState("");
  const [enteredItemPrice, setEnteredItemPrice] = useState("");
  const [enteredItemDescription, setEnteredItemDescription] = useState("");
  // const [data, setData] = useState([]);
  const history = useHistory()

  const ImageLinkHandler = (event) => {
    setEnteredImageLink(event.target.value);
  };
  const ItemNameHandler = (event) => {
    setEnteredItemName(event.target.value);
  };
  const ItemPriceHandler = (event) => {
    setEnteredItemPrice(event.target.value);
  };
  const ItemDescriptionHandler = (event) => {
    setEnteredItemDescription(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault()

    if(!enteredImageLink){
      return
    }
    const enteredValues = {
      image:enteredImageLink,
      name:enteredItemName,
      price:enteredItemPrice,
      description:enteredItemDescription,
    };

    props.onSaveItem(enteredValues)


    // setData((data) => [...data, enteredValues]);
    setEnteredImageLink('')
    setEnteredItemDescription('')
    setEnteredItemName('')
    setEnteredItemPrice('')

    // history.push('/')
  };

  return (
    <div className="">
      <form action="" onSubmit={onSubmitHandler}>
        <div className="">
          <input
            type="text"
            placeholder="image"
            value={enteredImageLink}
            onChange={ImageLinkHandler}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="item name"
            value={enteredItemName}
            onChange={ItemNameHandler}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="item price"
            value={enteredItemPrice}
            onChange={ItemPriceHandler}
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="item description"
            value={enteredItemDescription}
            onChange={ItemDescriptionHandler}
          />
        </div>
        <button>Submit</button>
      </form>
      {/* <div className="">
        {data.map((data, index) => (
          <div className="" key={index}>
            <div className="">
              <img width="350px" src={data.image} alt="" />
              <p>item name: {data.name} </p>
              <p>item price: {data.price}</p>
              <p>item description:{data.description}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Form;
