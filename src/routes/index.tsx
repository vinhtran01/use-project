import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../components/layout";
import { route } from "./route";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {route.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <item.element />
            </Suspense>
          }
        />
      ))}
    </Route>
  )
);
