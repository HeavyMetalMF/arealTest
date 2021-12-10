import './App.css';
import UsersList from "./components/users/UsersList";
import Header from "./components/header/Header";

function App() {

  return (
    <div className="App">
        <Header/>
        <UsersList/>
    </div>
  );
}

export default App;
