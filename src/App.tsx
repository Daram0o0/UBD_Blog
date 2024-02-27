import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BoardListPage from './pages/BoardListPage';
import Main from './pages/Main';
import BoardItemPage from './pages/BoardItemPage';

function App() {
  // const navigate = useNavigate();

  return (
    <div>
      {/* <div>home</div> */}
      <BrowserRouter>
        <div onClick={() => { window.location.href = '/' }}>home</div>

        <Routes>

          <Route path='/' element={<Main />} />
          <Route path='/board' element={<BoardListPage />} />
          <Route path='/board/:id' element={<BoardItemPage />} />
          <Route path="/*" element={<div style={{ display: "flex", justifyContent: "center", marginTop: "50px", fontWeight: "bold", fontSize: "50px" }}>Not Found 404</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
