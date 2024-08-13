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
import Accordion from "./components/accordions/Accordion";
import { accordionData } from "./components/accordions/utils/content";
import FormValidation from "./components/formValidation/FormValidation";

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
          {/* <Route
            path={`/accordion`}
            element={
              <>
                {accordionData.map(({ title, content }) => {
                  return (
                    <Accordion key={title} title={title} content={content} />
                  );
                })}
              </>
            }
          /> */}
          <Route
            path={`/accordion`}
            element={<Accordion accordion={accordionData} />}
          />
          <Route path={`/validation`} element={<FormValidation />} />
          <Route path={`/*`} element={<Pnf />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
