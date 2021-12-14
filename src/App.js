import './App.css';

import WebIcon from './assets/directions-web.svg';
import PcIcon from './assets/directions-PC.svg';
import MobileIcon from './assets/directions-mobile.svg';
import BackgroundTopLeft from './assets/background-top-left.png';
import BackgroundTopRight from './assets/background-top-right.png';
import BackgroundBottom from './assets/background-bottom.png';
import FormArrowIcon from './assets/Arrow.svg'

import Navbar from './components/Navbar/Navbar';
import Lead from './components/Lead/Lead';
import Directions from './components/Directions/Directions';
import About from './components/About/About';
import Form from './components/Form/Form';
import Background from './components/Background/Background';

const navbarLinks=[
  {url: "#", title: "hitech@digit.com", button: false},
  {url: "#", title: "Обсудить проект", button: true},
  {url: "#", title: "EN", button: false},
]

const directionsList=[
  {imageSrc: {WebIcon}, title: "Web приложения", alt: "Web приложения"},
  {imageSrc: {PcIcon}, title: "Десктоп приложения ", alt: "Десктоп приложения"},
  {imageSrc: {MobileIcon}, title: "Мобильные приложения", alt: "Мобильные приложения"},
]

const aboutList=[
  {pos: 1, advantage: "100% релизов выполнено в срок"},
  {pos: 2, advantage: "Сокращаем time-to-market"},
  {pos: 3, advantage: "Работа со скоростью потребностей вашего бизнеса"},
  {pos: 4, advantage: "Технологическая экспертиза для решения комплексных задач"},
]

const backgroundPng=[
  {imageSrc: {BackgroundTopLeft}},
  {imageSrc: {BackgroundTopRight}},
  {imageSrc: {BackgroundBottom}},
]

function App() {
  return (
  <div className="App">
    <Navbar navbarLinks={navbarLinks}/>
    <Lead leadTitle={"Хайтекдиджит"} leadSubtitle={"Разработка программных продуктов \nс высокой степенью НИОКР"}/>
    <Directions directionsList={directionsList}/>
    <About aboutList={aboutList}/>
    <Form iconSrc={FormArrowIcon}/>
    <Background imgItem={backgroundPng}/>
  </div>
  );
}

export default App;
