import './App.css';

import directionsWebIcon from './images/directions-web.svg'
import directionsPcIcon from './images/directions-PC.svg'
import directionsMobileIcon from './images/directions-mobile.svg'
import Navbar from './components/Navbar/Navbar';
import Lead from './components/Lead/Lead';
import Directions from './components/Directions/Directions';

const navbarLinks=[
  {url: "#", title: "hitech@digit.com"},
  {url: "#", title: "Обсудить проект"},
  {url: "#", title: "ru"},
]

const directionsList=[
  {imageSrc: "#", title: "Web приложения"},
  {imageSrc: "#", title: "Десктоп приложения "},
  {imageSrc: "#", title: "Мобильные приложения"},
]

function App() {
  return (
  <div className="App">
    <Navbar navbarLinks={navbarLinks}/>
    <Lead /*leadTitle={"Хайтекдиджит"} leadSubtitle={"Разработка программных продуктов с высокой степенью НИОКР"}*//>
    <Directions directionsList={directionsList}/>
  </div>
  );
}

export default App;
