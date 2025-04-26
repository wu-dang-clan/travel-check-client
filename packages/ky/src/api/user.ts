export type User = {
  id: string;
  name: string;
};

// 임시 저장소 역할을 하는 변수
let mockUser: User = {
  id: "123",
  name: "홍길동",
};

export const fetchUser = async (): Promise<User> => {
  await delay(500); // 네트워크 지연 시뮬레이션
  return { ...mockUser }; // 객체 복사하여 반환
};

export const updateUser = async (data: Partial<User>): Promise<User> => {
  await delay(500); // 네트워크 지연 시뮬레이션

  // 실제 업데이트 로직 시뮬레이션
  mockUser = {
    ...mockUser,
    ...data,
  };

  return { ...mockUser };
};

// 유틸: 지연 함수
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// 선택적: 에러 케이스 테스트를 위한 함수
export const resetMockUser = () => {
  mockUser = {
    id: "123",
    name: "홍길동",
  };
};
