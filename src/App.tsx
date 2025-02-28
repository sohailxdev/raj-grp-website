import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Main from "./pages/Main";
import LeadingTeam from "./pages/LeadingTeam";
import CompanyOverview from "./pages/CompanyOverview";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Main />} />
      <Route path='/leadership-team' element={<LeadingTeam />} />
      <Route path='/company-overview' element={<CompanyOverview />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
