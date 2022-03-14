
import './App.css';
import LandingNavBar from './Components/LandingPage/LandingNavBar/LandingNavBar';
import MainContent from './Components/MainContent/MainContent';

import NavBar from './Components/NavBar/NavBar';
import RowImages from './Components/RowImages/RowImages';
import {action,orginals,comedy} from './Urls'

function App() {
  return (
    <div>
      <LandingNavBar />




    {/* <NavBar />
    <MainContent />
    <RowImages url={orginals} title='Netflix Orginals' bigPoster/>
    <RowImages url={action} title='Action' />
    <RowImages url={comedy} title='Comedy' /> */}
    </div>
  );
}

export default App;
