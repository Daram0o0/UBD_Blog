import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Board from './pages/Board';
import Main from './pages/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/board' element={<Board />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
