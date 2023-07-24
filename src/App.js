// import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './Components/appStyles.css';
import styles from './Components/appStyles.module.css';
import Form from './Components/Form';
import LifecycleA from './Components/LifecycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';


function App() {
  return (
    <div className="App">
      <RefsDemo />
      <ParentComp />  
      <Table />
      <FragmentDemo />
      <LifecycleA />
      <Form />
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      <Stylesheet primary={true} />
      <NameList class />
      <UserGreeting />
      <ParentComponent />
      <EventBind />
      <FunctionClick />
      <ClassClick />
      <Counter />
      <Message />
      <Greet name="Kao" heroName="TheMan">
        <p>This is children props</p>
      </Greet>

      <Greet name="Bruce" heroName="Batman">
        <button>Action</button>
      </Greet>

      <Greet name="Clark" heroName="Superman" />

      <Welcome name="Kao" heroName="TheMan" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />

      <Hello />
    </div >
  );
}

export default App;
