import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Hero,Main,Menu,Footer,LoginPage,MainLayout,ForgetPass,SignUp} from "./components/header/index"
function App() {
  return (
    <>
   
 <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<>
            <Hero />
            <Main />
            <Menu />
            <Footer />
          </>} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgetPass />} />
      </Routes>
    </Router>
 
    </>
  );
}

export default App;
