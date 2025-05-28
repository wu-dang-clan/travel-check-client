import { ButtonSm } from "@travel-check-client/ui";
import { useState } from "react";

interface PersonalListProps {
  item: string;
  maxCount: number;
  currentCount: number;
  status: "before" | "ongoing" | "done"; // status prop 추가
  onEdit?: () => void;
  onStatusChange?: (status: "before" | "ongoing" | "done") => void;
}

export default function PersonalList({
  item,
  maxCount,
  currentCount,
  status = "before", // 기본값 설정
  onEdit,
  onStatusChange,
}: PersonalListProps) {
  // 배경색 결정 함수
  const getBackgroundColor = (status: string) => {
    switch (status) {
      case "done":
        return "bg-[#C4C4C4]";
      case "ongoing":
        return "bg-[#FED888]";
      default:
        return "bg-[#FFFFFF]";
    }
  };

  // 상태 텍스트 결정 함수
  const getStatusText = (status: string) => {
    switch (status) {
      case "done":
        return "완료";
      case "ongoing":
        return "진행중";
      default:
        return "준비전";
    }
  };

  return (
    <div className="w-full border border-[#3F0001]">
      <div className="w-full border-2 border-[#FEFFD9]">
        <div
          className={`flex w-full flex-row items-center justify-between border border-[#852400] ${getBackgroundColor(
            status,
          )} p-2`}
        >
          <div className="flex flex-col">
            <p className="text-xl">{item}</p>
            <p className="text-xs text-[#6B7684]">
              {getStatusText(status)} ({currentCount}/{maxCount})
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <ButtonSm item="edit" onClick={onEdit} />
            <ButtonSm
              item={status === "done" ? "cancel" : "done"}
              onClick={() => {
                const nextStatus =
                  status === "before"
                    ? "ongoing"
                    : status === "ongoing"
                      ? "done"
                      : status === "done"
                        ? "before"
                        : "before";
                onStatusChange?.(nextStatus);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
