import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Project from './components/Project'
import Layout from './components/Layout'
import Blog from './components/Blog'
import Dashboard from './components/Dashboard'
import Finalevaluation from './components/Posts/final_evaluation'
import Week12 from './components/Posts/week12'
import Week11 from './components/Posts/week11'
import Week10 from './components/Posts/week10'
import IhpcMarch from './components/Posts/ihpcmarch'
import IhpcApril from './components/Posts/ihpcapril'
import IhpcMay from './components/Posts/ihpcmay'
import IhpcJune from './components/Posts/ihpcjune'
import IhpcJuly from './components/Posts/ihpcjuly'
import ProgrammeRep1 from './components/Posts/programmerep1'
import EdinburghAward from './components/Posts/edinburghaward'
import HumanEd1 from './components/Posts/humaned1'
import ConsultantTraining from './components/Posts/180dctraining'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/finalevaluation" element={<Finalevaluation />} />
          <Route path="/blog/week12" element={<Week12 />} />
          <Route path="/blog/week11" element={<Week11 />} />
          <Route path="/blog/week10" element={<Week10 />} />
          <Route path="/blog/ihpcmarch" element={<IhpcMarch />} />
          <Route path="/blog/ihpcapril" element={<IhpcApril />} />
          <Route path="/blog/ihpcmay" element={<IhpcMay />} />
          <Route path="/blog/ihpcjune" element={<IhpcJune />} />
          <Route path="/blog/ihpcjuly" element={<IhpcJuly />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog/programmerep1" element={<ProgrammeRep1 />} />
          <Route path="/blog/edinburghaward" element={<EdinburghAward />} />
          <Route path="/blog/humaned1" element={<HumanEd1 />} />
          <Route path="/blog/180dctraining" element={<ConsultantTraining />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
