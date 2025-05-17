import { ButtonSm } from "@travel-check-client/ui";

interface PersonalListProps {
  item: string;
  maxCount: number;
  currentCount: number;
  onEdit?: () => void; // 수정 버튼 클릭 핸들러 추가
}

export default function PersonalList({ item, maxCount, currentCount, onEdit }: PersonalListProps) {
  return (
    <div className="w-full border border-[#3F0001]">
      <div className="w-full border-2 border-[#FEFFD9]">
        <div className="flex w-full flex-row items-center justify-between border border-[#852400] bg-[#FED888] p-2">
          <div className="flex flex-col">
            <p className="text-xl">{item}</p>
            <p className="text-xs text-[#6B7684]">
              진행중 ({currentCount}/{maxCount})
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <ButtonSm item="edit" onClick={onEdit} />
            <ButtonSm item="done" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}
