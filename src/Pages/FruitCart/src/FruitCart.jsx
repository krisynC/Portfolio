import "./App.css";
import { useState } from "react";

const App = () => {
  const title = "FRUITS";

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("loggedIn") === "true";
  });

  const [fruitList, setFruitList] = useState([
    { name: "Banana", color: "#facc15", quantity: 0 },
    { name: "Apple", color: "#ef4444", quantity: 0 },
    { name: "Guava", color: "#22c55e", quantity: 0 },
    { name: "Brinjal", color: "#a855f7", quantity: 0 }
  ]);

  const [cartSummary, setCartSummary] = useState({});

  const loginUser = () => {
    setIsLoggedIn(true);
    localStorage.setItem("loggedIn", "true");
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    localStorage.setItem("loggedIn", "false");
  };

  const updateQuantity = (index, change) => {
    const updatedList = [...fruitList];

    if (updatedList[index].quantity + change < 0) return;

    updatedList[index].quantity += change;
    setFruitList(updatedList);

    const fruitName = updatedList[index].name;
    const updatedSummary = { ...cartSummary };

    if (updatedList[index].quantity === 0) {
      delete updatedSummary[fruitName];
    } else {
      updatedSummary[fruitName] =
        `${fruitName} x ${updatedList[index].quantity}`;
    }

    setCartSummary(updatedSummary);
  };

  if (!isLoggedIn) {
    return (
      <div className="loginPage">
        <h1>FRUIT STORE</h1>

        <button onClick={ loginUser }>
          LOGIN
        </button>
      </div>
    );
  }

  return (
    <>
      <button className="logoutBtn" onClick={ logoutUser }>
        Logout
      </button>

      <h1>{ title }</h1>

      <div className="container">
        { fruitList.map((fruit, index) => (
          <div className="fruit-wrapper" key={ fruit.name }>

            <div
              className="card"
              style={ { "--card-color": fruit.color } }
            >
              <h2>{ fruit.name }</h2>

              { fruit.quantity > 0 && (
                <div className="badge">
                  { fruit.quantity } items
                </div>
              ) }
            </div>

            <div className="btnRow">
              <button onClick={ () => updateQuantity(index, -1) }>
                -
              </button>

              <button className="qty">
                { fruit.quantity }
              </button>

              <button onClick={ () => updateQuantity(index, 1) }>
                +
              </button>
            </div>

          </div>
        )) }
      </div>

      <div className="updates">
        <h3>Updates</h3>

        { Object.keys(cartSummary).length === 0 ? (
          <p>No updates yet</p>
        ) : (
          Object.entries(cartSummary).map(([name, value]) => (
            <p key={ name }>{ value }</p>
          ))
        ) }
      </div>
    </>
  );
};

export default App;