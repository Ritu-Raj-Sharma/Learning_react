import { useEffect, useReducer } from "react";
import './App.css'

function Header({name}){
  return(
    <header>
      <h1>{name}'s Code</h1>
    </header>
  )
}

const items = [
  "Mac and Cheese",
  "Salmon and Potatoes",
  "Tofu with Vegetables"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({dishes, openStatus, onStatus}){
  return(
    <>
    <div>
      <button onClick={() => onStatus(true)}>I want to be Open</button>
      <h2>Welcome to this beautiful restaurant! {openStatus ? "Open" : "Closed"}</h2>
    </div>
    <main>
      <ul>
      {dishes.map((dish) => (<li key={dish.id} style={{listStyleType: "none"}}>{dish.title}</li>))}
    </ul>
    </main>
    </>
  )
}

function App() {
  //const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer((status) => !status, true);

  useEffect(() => {
    console.log(`The restaurant is ${status ? "open" : "closed"}`)
  })

  return (<>
  <h1>The restaurant is currently {status ? "open" : "closed"}.</h1>
  <button onClick={toggle} >{status ? "Close" : "Open"} Restaurant</button>
    <Header name="Raj"/>
    <Main dishes={dishObjects} openStatus={status} onStatus={toggle}/>
  </>
  )
}

export default App
