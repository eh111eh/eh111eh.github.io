import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Project from './components/Project'
import Layout from './components/Layout'
import Blog from './components/Blog'
import Dashboard from './components/Dashboard'
import FinalEvaluation from './components/Posts/final_evaluation'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Posts/final_evaluation" element={<FinalEvaluation />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
