import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Project from './components/Project'
import Layout from './components/Layout'
import Blog from './components/Blog'
import Dashboard from './components/Dashboard'
import FinalEvaluation from './components/Posts/final_evaluation'
import Week12 from './components/Posts/week12'
import Week11 from './components/Posts/week11'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/FinalEvaluation" element={<FinalEvaluation />} />
          <Route path="/Week12" element={<Week12 />} />
          <Route path="/Week11" element={<Week11 />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
