import './App.css';

import useTitle from './customHooks/useTitle';

const App = () => {

  useTitle("Ed Sheeran");

  return (
    <div className="App">
      <h1>Showcase of a music star</h1>
    </div>
  );
}

export default App;
