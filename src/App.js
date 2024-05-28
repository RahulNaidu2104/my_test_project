import logo from './logo.svg';
import './App.css';
//import Welcome from './index_FirstExample_FunctionalComponent_ClassComponent.js';
//import StringCount from './StringCount.js';
//import StudentLogIn from './Components/ConditionalFunctionalComponent.js';
//import BankCustomer from './Components/BankCustomer.js';
// import DecreaseCount from './Components/decreaseCounter';
// import LinearSearch from './Components/TaskLinearSearch'
// import GetData from './Components/GetData_APIEndPoint';
// import PracticeAPIGet from './Components/GetData_APIPractice'; 
// import PostData from './Components/PostDataAPIPractice';
import PostDataAPI from './Components/PostData_APIEndPoint';

function App() {
  return (
    <div className="App">
        {/* <StringCount name="abbcccdddd"/> */}
        {/* <StudentLogIn name="Rahul" sportsname="Cricket" /> */}
        {/* <BankCustomer/> */}
        {/* <DecreaseCount/> */}
        {/* <LinearSearch/> */}
        {/* <GetData></GetData> */}
        {/* <PracticeAPIGet></PracticeAPIGet> */}
        {/* <PostData></PostData> */}
        <PostDataAPI></PostDataAPI>
    </div>
  );
}

export default App;