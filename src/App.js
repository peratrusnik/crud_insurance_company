import './App.css';
import Table from './components/Table';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ViewItem from './components/ViewItem';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <ToastContainer/>
        <div className="header">
          <Link to='/'><h1>Insurance Company - Policies</h1></Link>                
        </div>
        <div className="body">
          <Routes>
            <Route path='/' element={<Table/>}></Route>
            <Route path='/create' element={<UserForm/>}></Route>
            <Route path='/view/:id' element={<ViewItem/>}></Route>
          </Routes>
        </div>   
        <div className="footer">
          <small>Insurance company Ⓒ 2023.</small>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
