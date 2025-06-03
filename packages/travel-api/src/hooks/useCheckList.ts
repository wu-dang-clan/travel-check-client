import { useQuery } from "@tanstack/react-query";
import { fetchChecklists } from "../api/checkList";

export const useChecklistList = () => {
  return useQuery({
    queryKey: ["checklists"],
    queryFn: fetchChecklists,
  });
};
