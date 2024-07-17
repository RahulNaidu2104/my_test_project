import logo from './logo.svg';
import './App.css';
import React from 'react'
// import DisplayTasks from './Task_TaskManager/DisplayTasks';
// import AddTasks from './Task_TaskManager/AddTasks';
import TaskManager from './Task_TaskManager/TaskManager';
// import StudentDetails from './Components/displayStudentDetailsList';
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
// import UseEffectPractice from './Components/useEffectPractice';

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
        {/* <UseEffectPractice></UseEffectPractice> */}
        {/* <StudentDetails></StudentDetails> */}
        {/* <DisplayTasks Task = 
        {
          [
            {
              Title: "Sample1",
              Description: "SampleDecription1",
              Status: "Completed"
            },
            {
              Title: "Sample2",
              Description: "SampleDecription2",
              Status: "In Progress"
            }
          ]
        }></DisplayTasks>
        <br></br>
        <AddTasks></AddTasks> */}
        <TaskManager></TaskManager>
    </div>
  );
}

export default App;