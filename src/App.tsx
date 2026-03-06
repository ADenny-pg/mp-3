import Header from "./Components/Header.tsx";
import Nav from "./Components/Nav.tsx";
import Footer from "./Components/Footer.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./Components/mains/Home.tsx";
import Education from "./Components/mains/Education.tsx";
import Experiences from "./Components/mains/experiences.tsx";
import Projects from "./Components/mains/Projects.tsx";
import Skills from "./Components/mains/Skills.tsx";
import Contact from "./Components/mains/Contact.tsx";
import styled from "styled-components";


const StyledWrapper = styled.div`
    width: 80vw;
    background-color: antiquewhite;
    margin: 0 auto;

    @media screen and (max-width: 750px) {
        width: 80vw;
        background-color: antiquewhite;
        margin: 0 auto;
    }
`;

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 750px){
        flex-direction: column;
    }
`;

function Root(){
  return(
      <StyledWrapper>
        <Header/>
          <StyledContainer>
                <Nav/>
                   <Routes>
                    <Route
                          path={'/'}
                          element={<Home/>}
                    />
                    <Route
                          path={'/education/education.html'}
                          element={<Education/>}
                    />
                    <Route
                          path={'/experiences/experiences.html'}
                          element={<Experiences/>}
                    />
                    <Route
                          path={'/projects/projects.html'}
                          element={<Projects/>}
                    />
                    <Route
                          path={'/skills/skills.html'}
                          element={<Skills/>}
                    />
                    <Route
                          path={'/contact/contact.html'}
                          element={<Contact/>}
                    />

                    </Routes>
              </StyledContainer>
        <Footer/>
      </StyledWrapper>
  );
}

const router = createBrowserRouter(
    [{path:"*",Component:Root}]
)

export default function App() {

  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}
