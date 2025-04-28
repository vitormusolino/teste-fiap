import './styles/fonts.css';

import Header from './components/Header/Header.jsx';
import Capa from './components/Capa/Capa.jsx';
import EducacaoTech from './components/EducacaoTech/EducacaoTech.jsx';
import BreakImage from './components/BreakImage/BreakImage.jsx';
import ScrollTop from './components/ScrollTop/ScrollTop.jsx';
import Accordion from './components/Accordion/Accordion.jsx';


function App() {
  return (
    <>
      <Header/>
      <Capa/>
      <ScrollTop/>
      <EducacaoTech/>
      <BreakImage/>
      <Accordion/>
    </>
  )
}

export default App
