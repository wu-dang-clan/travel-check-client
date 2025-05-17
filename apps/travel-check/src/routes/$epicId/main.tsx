import { createFileRoute } from "@tanstack/react-router";
import { PixelBox, TitleBox, InputAddList, ButtonLg } from "@travel-check-client/ui";
import PersonalList from "../../components/PersonalList";
import TeamList from "../../components/TeamList";
import { useState } from "react";
import ModalEdit from "../../components/modals/ModalEdit";

export const Route = createFileRoute("/$epicId/main")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 pt-4">
        <TitleBox title="여행이름" />
        <PixelBox>
          <div className="h-[30rem] w-full p-0">
            <p className="w-full text-base">단체 체크리스트(0/0)</p>
            <TeamList item="카메라" manager="박우석" />
            <p className="w-full text-base">개인 체크리스트(0/0)</p>
            <PersonalList
              item="속옷"
              maxCount={4}
              currentCount={0}
              onEdit={() => setIsModalOpen(true)}
            />
          </div>
          <ButtonLg color="green" onClick={() => setIsModalOpen(true)}>
            체크리스트 작성하기
          </ButtonLg>
        </PixelBox>
        <InputAddList onChange={() => {}} placeholder="여행지" />
      </div>
      <ModalEdit
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialType="domestic"
        initialName="속옷"
      />
    </>
  );
}
