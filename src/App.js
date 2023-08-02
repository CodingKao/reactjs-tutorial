// import logo from './logo.svg';
import React, { Component } from 'react';

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
import FocusInput from './Components/FocusInput';
import FRParentInput from './Components/FRParentInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HoverCounter />
        <ClickCounter name='Kao'/>

        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker" /> 
        </ErrorBoundary>

        <PortalDemo />
        <FRParentInput />
        <FocusInput />
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
}


export default App;
