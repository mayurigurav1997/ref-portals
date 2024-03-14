import Player from './components/Player.jsx';
import Timerchallenge from './components/Timerchallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timerchallenge title="Easy" targetTime={1} />
        <Timerchallenge title="Not Easy" targetTime={5} />
        <Timerchallenge title="Getting Tough" targetTime={10} />
        <Timerchallenge title="Pros Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
