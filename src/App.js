import logo from './logo.svg';
import './App.css';
//import Welcome from './index_FirstExample_FunctionalComponent_ClassComponent.js';
//import StringCount from './StringCount.js';
import StudentLogIn from './Components/ConditionalFunctionalComponent.js';

function App() {
  return (
    <div className="App">
        {/* <StringCount name="abbcccdddd"/> */}
        <StudentLogIn name="Rahul" sportsname="Cricket" />
    </div>
  );
}

export default App;