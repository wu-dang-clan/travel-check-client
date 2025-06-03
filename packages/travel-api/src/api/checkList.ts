import { api } from "./kyInstance";

export const fetchChecklists = () => api.get("checklists").json();
export const fetchChecklistById = (id: string) => api.get(`checklists/${id}`).json();
export const createChecklist = (data: any) => api.post("checklists", { json: data }).json();
