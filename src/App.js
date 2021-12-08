import './App.css';

import WebIcon from './assets/directions-web.svg'
import PcIcon from './assets/directions-PC.svg'
import MobileIcon from './assets/directions-mobile.svg'

import Navbar from './components/Navbar/Navbar';
import Lead from './components/Lead/Lead';
import Directions from './components/Directions/Directions';

const navbarLinks=[
  {url: "#", title: "hitech@digit.com"},
  {url: "#", title: "Обсудить проект"},
  {url: "#", title: "ru"},
]

const directionsList=[
  {imageSrc: {WebIcon}, title: "Web приложения", alt: "Web приложения"},
  {imageSrc: {PcIcon}, title: "Десктоп приложения ", alt: "Десктоп приложения"},
  {imageSrc: {MobileIcon}, title: "Мобильные приложения", alt: "Мобильные приложения"},
]

function App() {
  return (
  <div className="Aapp">
    <Navbar navbarLinks={navbarLinks}/>
    <Lead /*leadTitle={"Хайтекдиджит"} leadSubtitle={"Разработка программных продуктов с высокой степенью НИОКР"}*//>
    <Directions directionsList={directionsList}/>
  </div>
  );
}

export default App;
