import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'

function App() {
  return (
    <div className="tw-h-full tw-flex tw-flex-col tw-p-6">
      <div className="tw-flex tw-flex-col tw-flex-wrap tw-content-center">
        <h1 className="tw-text-xl tw-font-semibold">
          RTK Query Implementation with React
        </h1>
      </div>
      <div className="tw-h-full tw-flex tw-flex-col tw-content-center tw-flex-wrap tw-p-4">
        <Home />
        <Login />
      </div>
    </div>
  )
}

export default App
