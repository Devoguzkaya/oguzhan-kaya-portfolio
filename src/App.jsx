import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-background text-text-primary min-h-screen">
      <ToastContainer />
      <Header />
      <Hero />

      <Skills />
      <div className="max-w-[1440px] mx-auto border-t border-gray-200 dark:border-gray-700 "></div>
      <Profile />
      <div className="max-w-[1440px] mx-auto border-t border-gray-200 dark:border-gray-700"></div>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
