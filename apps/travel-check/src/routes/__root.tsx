import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Background from "../components/Background";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="mx-auto h-screen">
        <div className="absolute inset-0 z-0 mx-auto w-lg min-w-sm">
          <Background />
        </div>
        <div className="absolute inset-0 z-10 mx-auto w-lg min-w-sm">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
}
