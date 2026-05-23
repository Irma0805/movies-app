import Spinner from './components/atoms/Spinner/Spinner';
import Rating from './components/atoms/Rating/Rating';

function App() {
  return (
    <div>
      <Spinner />
      <Rating value={8.4} />
    </div>
  );
}

export default App;
