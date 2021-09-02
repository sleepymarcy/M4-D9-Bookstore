import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyJumbotron from './components/MyJumbotron'
import Latest from './components/Latest'
import WarningSign from './components/WarningSing'
import SingleBook from './components/SingleBook'
import fantasy from './data/fantasy.json'

function App() {
  return (
    <div>
        <MyNavbar title="Marcy's Book Store" color="dark" />
        <WarningSign text="Why Men Throw Their Lives Away Attacking An Armed Witcher...I'll Never Know. Something About My Face?" />
        <MyJumbotron />
        <div style={{width: '20%', height: '20%', textAlign: 'center', margin: 'auto', padding: '5% 0'}}>
          <SingleBook book={fantasy[0]} ></SingleBook>
        </div>
        <hr></hr>
        <div style={{padding: '5%'}}>
          <h2 style={{fontSize: '50px'}}>Latest Releases from Fantasy</h2>
        </div>
        <Latest books={fantasy} />
        <MyFooter />
        
    </div>
  )
}

export default App