import { ButtonSm } from "@travel-check-client/ui";

interface MemberListProps {
  user: string;
}

export default function MemberList({ user }: MemberListProps) {
  return (
    <div className="w-full border border-[#3F0001]">
      <div className="w-full border-2 border-[#FEFFD9]">
        <div className="flex w-full flex-row items-center justify-between border border-[#852400] bg-[#FED888] p-2">
          <p className="text-xl">{user}</p>
          <ButtonSm item="delete" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
