import React from "react";
import { useRoutes, Outlet } from "react-router-dom";
import {
  CombineHome,
  CombineReact,
  CombineCss,
  CombineAbbr,
  CombineGit,
  CombineHTML,
  CombineJS,
  CombineOther,
} from "./Combine";

export const RoutesItems = () => {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <>
          {" "}
          <CombineHome />
        </>
      ),
    },

    {
      element: (
        <>
          <Outlet />
        </>
      ),
      children: [
        { path: "react", element: <CombineReact /> },
        { path: "css", element: <CombineCss /> },
        { path: "js", element: <CombineJS /> },
        { path: "git", element: <CombineGit /> },
        { path: "html", element: <CombineHTML /> },
        { path: "abbr", element: <CombineAbbr /> },
        { path: "other", element: <CombineOther /> },
      ],
    },
  ]);
  return element;
};
