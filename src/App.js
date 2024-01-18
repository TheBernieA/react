import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import Items from "./components/Items";
import Wrapper from "./components/UI/Wrapper";
import { DATA } from "./database";
import AddItem from "./pages/AddItem";
import { useState } from "react";
import ItemDetails from "./components/ItemDetails";

const App = () => {
  const [items, setItemsData] = useState(DATA);

  const addItem=(newData)=>{
    setItemsData(prevData=> [...prevData,newData])
   // setData((data) => [...data, enteredValues]);

  }


  return (
    <div className="container">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <div className="slider">
              <ul>
                <li>REACT PROPS, COMPONENTS AND ROUTES</li>
                <li>FORMS, OUTPUTTING DATA ON DETAILS PAGE AND CUSTOM HOOKS</li>
              </ul>
            </div>
            <Wrapper>
              {items.map((item) => (
                <Items
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </Wrapper>
          </Route>

          <Route path='/item/:id'>
            <ItemDetails />
          </Route>

          <Route path="/addItem">
            <AddItem onSaveItem={addItem} />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;


