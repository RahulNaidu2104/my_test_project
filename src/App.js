import logo from './logo.svg';
import './App.css';
import React from 'react'
//import Welcome from './index_FirstExample_FunctionalComponent_ClassComponent.js';
//import StringCount from './StringCount.js';
//import StudentLogIn from './Components/ConditionalFunctionalComponent.js';
//import BankCustomer from './Components/BankCustomer.js';
// import DecreaseCount from './Components/decreaseCounter';
// import LinearSearch from './Components/TaskLinearSearch'
// import GetData from './Components/GetData_APIEndPoint';
// import PracticeAPIGet from './Components/GetData_APIPractice'; 
// import PostData from './Components/PostDataAPIPractice';
// import PostDataAPI from './Components/PostData_APIEndPoint';
// import IncreaseDecreaseCounter from './Components/IncreaseDecreaseCounterHooks';
// import ComponentA1 from './Components/useContextPractice/ComponentA1';
// import ComponentA2 from './Components/useContextPractice/ComponentA2';
import UseEffectPractice from './Components/useEffectPractice';

// export const Context = React.createContext();

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
        {/* <PostDataAPI></PostDataAPI> */}
        {/* <IncreaseDecreaseCounter></IncreaseDecreaseCounter> */}
        {/* <ComponentA1 name='Rahul'/> */}
        {/* <Context.Provider value= {'Rahul'}>
          <ComponentA2/>
        </Context.Provider> */}
        <UseEffectPractice></UseEffectPractice>
    </div>
  );
}

export default App;