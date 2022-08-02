import logo from './logo.svg';
import './App.css';
 import SignUp from './component/SignUp';
import SignIn from './component/SignIn';
import Header from './component/Header';
function App() {
  return (
    <div className="App">
     {/* <SignUp /> */}
     <SignIn />
     <Header />
    </div>
  );
}

export default App;
