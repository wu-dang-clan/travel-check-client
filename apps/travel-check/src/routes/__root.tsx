import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="mx-auto w-lg min-w-sm">
        <div className="h-screen snap-y snap-mandatory overflow-y-auto bg-linear-to-t from-[#00DAEB] to-[#004185]">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
}
