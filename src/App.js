import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Route/Route';


function App() {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={route} ></RouterProvider>
    </div>
  );
}

export default App;
