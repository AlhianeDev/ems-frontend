import { Container } from "react-bootstrap";

import { Routes, Route } from "react-router-dom";

import View from "./pages/View";

import Add from "./pages/Add";

import Update from "./pages/Update";

import Header from "./components/Header";

import Footer from "./components/Footer";

function App() {

  return (

    <>

      <Header />

        <Container>

            <Routes>

              <Route path="/" element={ <View /> } />

              <Route path="/add" element={ <Add /> } />

              <Route path="/update/:empId" element={ <Update /> } />

            </Routes>

        </Container>

      <Footer />

    </>

  );

}

export default App;
