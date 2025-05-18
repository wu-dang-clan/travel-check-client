import { PixelBox, InputText, ButtonMed } from "@travel-check-client/ui";
import { useState } from "react";

type TravelType = "personal" | "member" | null;
type User = {
  id: string;
  name: string;
};
type ManagerType = User | null;

interface ModalEditProps {
  isOpen: boolean;
  onClose: () => void;
  // 나중에 추가될 props
  // users?: User[];
}

export default function ModalEdit({ isOpen, onClose }: ModalEditProps) {
  if (!isOpen) return null;

  const [selectedType, setSelectedType] = useState<TravelType>(null);
  const [selectedManager, setSelectedManager] = useState<ManagerType>(null);

  // 임시 데이터 (나중에 props로 받아올 예정)
  const mockUsers: User[] = [
    { id: "user1", name: "유저1" },
    { id: "user2", name: "유저2" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div>
        <PixelBox>
          <div className="flex w-full flex-col">
            <p className="text-base">체크리스트 수정</p>
            <div className="flex w-full flex-row justify-between">
              <ButtonMed
                color="yellow"
                isPressing={selectedType === "personal" ? true : false}
                onClick={() => setSelectedType("personal")}
              >
                개인준비
              </ButtonMed>
              <ButtonMed
                color="yellow"
                isPressing={selectedType === "member" ? true : false}
                onClick={() => setSelectedType("member")}
              >
                단체준비
              </ButtonMed>
            </div>
            <p className="text-base">체크리스트 이름</p>
            <InputText onChange={() => {}} placeholder="입력하세요" />

            {selectedType === "member" && (
              <>
                <p className="text-base">담당자</p>
                <div className="flex w-full flex-row justify-between">
                  {mockUsers.map((user) => (
                    <ButtonMed
                      key={user.id}
                      color="white"
                      isPressing={selectedManager?.id === user.id}
                      onClick={() => setSelectedManager(user)}
                    >
                      {user.name}
                    </ButtonMed>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flex w-full flex-row justify-between">
            <ButtonMed color="green" onClick={onClose}>
              취소
            </ButtonMed>
            <ButtonMed color="red" onClick={onClose}>
              수정저장
            </ButtonMed>
          </div>
        </PixelBox>
      </div>
    </div>
  );
}
