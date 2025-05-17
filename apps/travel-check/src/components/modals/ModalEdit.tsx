import { PixelBox, ButtonLg, InputText, ButtonMed } from "@travel-check-client/ui";
import { useState } from "react";

interface ModalEditProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalEdit({ isOpen, onClose }: ModalEditProps) {
  if (!isOpen) return null;

  const [selectedType, setSelectedType] = useState<TravelType>(null);
  const [selectedManager, setSelectedManager] = useState<TravelType>(null);
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
                  <ButtonMed
                    color="white"
                    isPressing={selectedManager === "user1" ? true : false}
                    onClick={() => setSelectedManager("user1")}
                  >
                    유저1
                  </ButtonMed>
                  <ButtonMed
                    color="white"
                    isPressing={selectedManager === "user2" ? true : false}
                    onClick={() => setSelectedManager("user2")}
                  >
                    유저2
                  </ButtonMed>
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
