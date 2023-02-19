import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PublicRouters, PrivateRouters } from '~/Routers'
import { DefaultLayout } from "./Components/Layout";
import { Fragment } from "react"; //Fragment: Layout null


function App() {
  return (

    <Router>
      <div className="App">
        <Routes>
          {PublicRouters.map((route, index) => {

            let Layout = DefaultLayout

            if (route.layout){
              Layout = route.layout
            }
            else if (route.layout === null)  {
              Layout = Fragment
            }

            const Page = route.component
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
          })}
        </Routes>
      </div>
    </Router>


  );
}


export default App;
