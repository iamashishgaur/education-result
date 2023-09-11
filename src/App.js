import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdmitCard from "./pages/AdmitCard";
import Results from "./pages/Results";
import Syllabus from "./pages/Syllabus";
import LatestJobs from "./pages/LatestJobs";
import AnswerKey from "./pages/AnswerKey";
import PageNotFound from "./pages/PageNotFound";
import Addmission from "./pages/Addmission";
import Certificate from "./pages/Certificate";
import Playground from "./component/Playground";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Playground>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admitcard" element={<AdmitCard />} />
            <Route path="/answerkey" element={<AnswerKey />} />
            <Route path="/latestjob" element={<LatestJobs />} />
            <Route path="/result" element={<Results />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/addmission" element={<Addmission />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Playground>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
