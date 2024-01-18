import Form from "../components/Form";

const AddItem = (props) => {

  const saveItemHandler = (enteredValues)=>{
    const itemData = {
        id: Math.random(),
        ...enteredValues
    }
    props.onSaveItem(itemData)
    console.log(itemData);
  }

  return (
    <div>
      <Form onSaveItem={saveItemHandler}/>
    </div>
  );
};

export default AddItem;
