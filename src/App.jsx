import './App.css'
import bgVideo from "./../src/assets/video/actress.mp4"
function App() {

  return (
    <div className='background'>
        <video autoPlay loop muted>
          <source src={bgVideo} type='video/mp4'/>
        </video>
        <h1>Video Background Added</h1>
    </div>
  )
}

export default App
