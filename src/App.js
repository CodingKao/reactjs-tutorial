// import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Kao" heroName="TheMan">
        <p>This is children props</p>
      </Greet>

      <Greet name="Bruce" heroName="Batman">
        <button>Action</button>
      </Greet>

      <Greet name="Clark" heroName="Superman"/>

      <Welcome name="Kao" heroName="TheMan" />
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>

      <Hello />
    </div >
  );
}

export default App;
