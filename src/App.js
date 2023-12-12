import { Link } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';

const App = (props) => {
  return (
    <>
      <div className='container'>
        <Header/>
        <div>test link</div>
        <br/>
        <br/>
        <div>
          <button className='btn btn-warning'> <Link to="/users">Go to User</Link></button>
         
          <br/>
          <br/>
          <button className='btn btn-warning'> <Link to="/admins">Go to Admin</Link></button>
        </div>
      </div>
    </>
  )
}

export default App;
