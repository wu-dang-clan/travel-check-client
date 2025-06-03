import { createFileRoute } from "@tanstack/react-router";
import { PixelBox, TitleBox, ButtonLg } from "@travel-check-client/ui";
import PersonalList from "../../components/PersonalList";
import TeamList from "../../components/TeamList";
import { useState } from "react";
import ModalEdit from "../../components/Modals/ModalEdit";
import { mockTravelData } from "../../mocks/mock";

export const Route = createFileRoute("/$epicId/main")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleEdit = (itemId: string) => {
    setSelectedItemId(itemId);
    setIsModalOpen(true);
  };

  // 선택된 아이템 찾기
  const selectedItem =
    selectedItemId !== null
      ? mockTravelData.checkItems.find((item) => item.id === selectedItemId)
      : null;

  // 개인 체크리스트와 단체 체크리스트 분리
  const personalItems = mockTravelData.checkItems.filter((item) => item.type === "personal");
  const memberItems = mockTravelData.checkItems.filter((item) => item.type === "member");

  const handleStatusChange = (itemId: string, newStatus: "before" | "ongoing" | "done") => {
    // 실제로는 백엔드 API 호출이 여기에 들어갈 예정
    console.log(`아이템 ${itemId}의 상태가 ${newStatus}로 변경되었습니다.`);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 pt-4">
        <TitleBox title={mockTravelData.name} />
        <PixelBox>
          <div className="h-[30rem] w-full p-0">
            <p className="w-full text-base">
              단체 체크리스트({memberItems.filter((item) => item.status === "done").length}/
              {memberItems.length})
            </p>
            {memberItems.map((item) => (
              <TeamList key={item.id} item={item.name} manager={item.manager?.name || ""} />
            ))}
            <p className="w-full text-base">
              개인 체크리스트({personalItems.filter((item) => item.status === "done").length}/
              {personalItems.length})
            </p>
            {personalItems.map((item) => (
              <PersonalList
                key={item.id}
                item={item.name}
                maxCount={item.maxCount}
                currentCount={item.currentCount}
                status={item.status}
                onEdit={() => handleEdit(item.id)}
                onStatusChange={(status) => handleStatusChange(item.id, status)}
              />
            ))}
          </div>
          <ButtonLg color="green" onClick={() => setIsModalOpen(true)}>
            체크리스트 작성하기
          </ButtonLg>
        </PixelBox>
      </div>
      <ModalEdit
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedItemId(null);
        }}
        initialType={selectedItem?.type || null}
        initialName={selectedItem?.name || ""}
        initialManager={selectedItem?.manager || null}
      />
    </>
  );
}
