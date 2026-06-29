import './App.css'

function Header(props){
  return(
    <header>
      <h1>{props.name}'s Code</h1>
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

function Main(props){
  return(
    <main>
      <ul>
      {props.dishes.map((dish) => (<li key={dish.id} style={{listStyleType: "none"}}>{dish.title}</li>))}
    </ul>
    </main>
  )
}

function App() {
  return (<>
    <Header name="Raj"/>
    <Main dishes={dishObjects}/>
  </>
  )
}

export default App
