import './App.css';

import useTitle from './customHooks/useTitle';
import Video from './components/Video';

const App = () => {

  const artistName = "Ed Sheeran";

  useTitle(artistName);

  return (
    <div className="App">
      <h1>{artistName}</h1>
      <Video url={"https://www.youtube.com/embed/2Vv-BfVoq4g"} title={"Perfect"} />

    </div>
  );
}

export default App;
