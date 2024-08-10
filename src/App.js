import { Fragment } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";
import Pnf from "./components/Pnf";
import MealsApi from "./components/meals-api/MealsApi";
import ToggleBackgroundColor from "./components/colorToggler/ToggleBackgroundColor";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={`/`} element={<Counter />} />
          <Route path={`/counter`} element={<Counter />} />
          <Route path={`/todo`} element={<Todo />} />
          <Route path={`/api`} element={<MealsApi />} />
          <Route path={`/toggle`} element={<ToggleBackgroundColor />} />
          <Route path={`/testimonials`} element={<Testimonials />} />
          <Route path={`/*`} element={<Pnf />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
