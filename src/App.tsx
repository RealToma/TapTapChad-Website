import { Box } from "@mui/material";
import styled from "styled-components";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import { useEffect, useState } from "react";

import Enter from "./pages/enter";

const App = () => {
  const [isEntered, setIsEntered] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const someRequest = (): Promise<void> => {
    return new Promise((resolve) => setTimeout(() => resolve(), 5000));
  };

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".section_loading");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    //
    return null;
  }

  return (
    <StyledComponent>
      <BrowserRouter>
        {isEntered ? (
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Layout>
        ) : (
          <Enter setIsEntered={setIsEntered} />
        )}
      </BrowserRouter>
      <NotificationContainer />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;

  background-color: white;
`;

export default App;
