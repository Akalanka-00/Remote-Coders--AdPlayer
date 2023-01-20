import HomePage from './Pages/HomePage/HomePage'
import Customer from './Pages/Customer/Customer'
import Admin from './Pages/Admin/Admin'
import Developer from './Pages/GameDeveloper/GameDeveloper'
import TestNavigator from './Components/TestNavigator/TestNavigator'
function App() {
  let component = <TestNavigator/>
  switch(window.location.pathname){
    case "/homepage":
      component = <HomePage/>
      break
    case "/customerSignUp":
      component = <Customer/>
      break
    case "/developerSignUp":
      component = <Developer/>
      break
    case "/adminSignUp":
      component = <Admin/>
      break

  }
  return (
    <div className="App">
      
      {component}
    </div>
  );
}

export default App;
