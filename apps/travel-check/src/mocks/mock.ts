export interface User {
  id: string;
  name: string;
}

export interface CheckItem {
  id: string;
  name: string;
  type: "personal" | "member";
  status: "before" | "ongoing" | "done";
  maxCount: number;
  currentCount: number;
  manager?: User; // member 타입일 때만 존재
}

export interface TravelData {
  id: string;
  name: string;
  users: User[];
  checkItems: CheckItem[];
}

export const mockTravelData: TravelData = {
  id: "travel-123",
  name: "제주도 여행",
  users: [
    { id: "user-1", name: "김철수" },
    { id: "user-2", name: "박영희" },
    { id: "user-3", name: "이민수" },
  ],
  checkItems: [
    {
      id: "item-1",
      name: "여권",
      type: "personal",
      status: "before",
      maxCount: 1,
      currentCount: 0,
    },
    {
      id: "item-2",
      name: "속옷",
      type: "personal",
      status: "ongoing",
      maxCount: 4,
      currentCount: 2,
    },
    {
      id: "item-3",
      name: "카메라",
      type: "member",
      status: "done",
      maxCount: 1,
      currentCount: 1,
      manager: { id: "user-1", name: "김철수" },
    },
    {
      id: "item-4",
      name: "숙소 예약",
      type: "member",
      status: "ongoing",
      maxCount: 1,
      currentCount: 0,
      manager: { id: "user-2", name: "박영희" },
    },
  ],
};
