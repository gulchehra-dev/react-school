import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "@mantine/core/styles.css";
import "./App.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";

const App = () => {
  return (
    <>
      <ColorSchemeScript />
      <MantineProvider defaultColorScheme="light">
        <ModalsProvider>
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </>
  );
};

export default App;
