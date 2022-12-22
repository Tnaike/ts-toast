import './App.css';

import Toast from './components/toast/Toast';

function App() {
  return (
    <div className='App'>
      <h1 className='text-3xl font-bold underline'>TS TOAST</h1>
      <Toast type='success' message='Successfully submitted! ' />
      {/* Failed */}
      <Toast type='error' message='Failed Upload!' delay={1500}/>
    </div>
  );
}

export default App;
