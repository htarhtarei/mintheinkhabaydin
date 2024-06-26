import './App.css'
import Logo from './components/Logo'
import { Routes, Route } from 'react-router-dom'


//pages
import HomePage from './Page/HomePage'
import PickNumberPage from './Page/PickNumberPage'
import AnswerPage from './Page/AnswerPage'
import { answers } from './data/data';

function App() {

  return (
    <div className=''>
      <Logo />

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='pick/number/:id' element={<PickNumberPage />} />
        <Route path="/answer/:number" element={<AnswerPage answers={answers} />}/>
      </Routes>
      
    </div>
  )
}

export default App
