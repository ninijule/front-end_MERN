import Router from "./Router";
import { AuthContextProvider } from "./context/AuthContext";
import './App.css';


function App() {
  return (<AuthContextProvider><Router /></AuthContextProvider>)
}

export default App;
