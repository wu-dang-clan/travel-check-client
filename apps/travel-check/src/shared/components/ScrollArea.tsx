import { ReactNode } from "react";

interface ScrollAreaProps {
  children: ReactNode;
}

export default function ScrollArea({ children }: ScrollAreaProps) {
  return <div className="h-full w-full overflow-y-auto">{children}</div>;
}
