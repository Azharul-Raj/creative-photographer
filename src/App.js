
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './layouts/route';

function App() {
  const router = route;
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
