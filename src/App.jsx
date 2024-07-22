/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Hero, Main, Menu, Footer, LoginPage, MainLayout, ForgetPass, Register } from "./components/header/index";
// import Error from "./components/header/pages/Error";
// import {  useState } from "react";
// import { ToastContainer } from 'react-toastify';

// function App() {

//   const [token, setToken] = useState();

//   const handleError = (response) => {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   };

//   return (
//     <>
//     <ToastContainer></ToastContainer>
//       <Router>
//         <Routes>
//           <Route path="/" element={<MainLayout />}>
//             <Route
//               index
//               element={
//                 <>
//                   <Hero />
//                   <Main />
//                   <Menu />
//                   <Footer />
//                 </>
//               }
//             />
//           </Route>
//           <Route path="/login" element={<LoginPage setToken={setToken} />} />
//           <Route path="/register" element={<Register setToken={setToken}/>} />
//           <Route path="/forgot-password" element={<ForgetPass setToken={setToken}/>} />
//           <Route path="*" element={<Error />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
// App.jsx
// App.jsx
// App.jsx
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Hero, Main, Menu, Footer, LoginPage, MainLayout, ForgetPass, Register } from "./components/header/index";
import Error from "./components/header/pages/Error"; 
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import Header from './components/header/Header';  // تأكد من مسار الاستيراد الصحيح

const AppContent = ({ token, setToken }) => {
  const location = useLocation();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <>
      {location.pathname !== "/login" && (
        <Header token={token} handleLogout={handleLogout} />
      )}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <>
                <Hero />
                <Main />
                <Menu />
                <Footer />
              </>
            }
          />
        </Route>
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken}/>} />
        <Route path="/forgot-password" element={<ForgetPass setToken={setToken}/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Router>
        <AppContent token={token} setToken={setToken} />
      </Router>
    </>
  );
}

export default App;
