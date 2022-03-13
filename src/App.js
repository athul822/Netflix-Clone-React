
import './App.css';
import MainContent from './Components/MainContent/MainContent';
import NavBar from './Components/NavBar/NavBar';
import RowImages from './Components/RowImages/RowImages';
import {action,orginals,comedy} from './Urls'

function App() {
  return (
    <div>
    <NavBar />
    <MainContent />
    <RowImages url={orginals} title='Netflix Orginals' bigPoster/>
    <RowImages url={action} title='Action' />
    <RowImages url={comedy} title='Comedy' />
    </div>
  );
}

export default App;
