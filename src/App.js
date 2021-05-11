import NavBar from './layout/NavBar'
import Main from './components/Main'
import Blog from './components/Blog'
import Section from './components/Section'
import DiscoverCentris from './components/DiscoverCentris'
import WorkWithBroker from './components/WorkWithBroker'
import Footer from './layout/Footer'
function App() {
  return (
    <div>
      <NavBar />
      <Main />
      <Blog />
      <Section />
      <DiscoverCentris />
      <WorkWithBroker />
      <Footer />
    </div>
  );
}

export default App;
