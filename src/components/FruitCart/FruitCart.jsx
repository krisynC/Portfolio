import "./App.css";
import { useState } from "react";

const App = () => {
  const title = "FRUITS";

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("loggedIn") === "true";
  });
  const [fruitList, setFruitList] = useState([
    {
      name: "Banana",
      quantity: 0,
      image:
        "https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Apple",
      quantity: 0,
      image:
        "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Guava",
      quantity: 0,
      image:
        "https://images.pexels.com/photos/5945879/pexels-photo-5945879.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Brinjal",
      quantity: 0,
      image:
        "https://images.pexels.com/photos/321551/pexels-photo-321551.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
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
        <h1 className="loginTitle">FRUIT STORE</h1>

        <button className="loginBtn" onClick={ loginUser }>
          LOGIN
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <button className="logoutBtn" onClick={ logoutUser }>
        Logout
      </button>

      <h1 className="title">{ title }</h1>

      <div className="container">
        { fruitList.map((fruit, index) => (
          <div className="fruit-wrapper" key={ fruit.name }>
            <div
              className="card"
              style={ {
                backgroundImage: `
                  linear-gradient(
                    rgba(0,0,0,0.45),
                    rgba(0,0,0,0.45)
                  ),
                  url(${fruit.image})
                `,
              } }
            >
              <h2>{ fruit.name }</h2>

              { fruit.quantity > 0 && (
                <div className="badge">
                  { fruit.quantity } items
                </div>
              ) }
            </div>

            <div className="btnRow">
              <button
                className="btn"
                onClick={ () => updateQuantity(index, -1) }
              >
                -
              </button>

              <button className="qty">
                { fruit.quantity }
              </button>

              <button
                className="btn"
                onClick={ () => updateQuantity(index, 1) }
              >
                +
              </button>
            </div>
          </div>
        )) }
      </div>

      <div className="updates">
        <h3>Cart Updates</h3>

        { Object.keys(cartSummary).length === 0 ? (
          <p>No items added yet</p>
        ) : (
          Object.entries(cartSummary).map(([name, value]) => (
            <p key={ name }>{ value }</p>
          ))
        ) }
      </div>
    </div>
  );
};

export default App;