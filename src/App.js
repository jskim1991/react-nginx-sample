import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainPage from './MainPage'
import SecondaryPage from './SecondaryPage'

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/second' element={<SecondaryPage />} />
            </Routes>
        </div>
    )
}

export default App
