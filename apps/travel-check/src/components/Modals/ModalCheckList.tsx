import InputEditTeam from "@Modals/InputEditTeam";
import InputEditPersonal from "@Modals/InputEditPersonal";

export default function ModalCheckList() {
  return (
    <div className="w-full bg-blue-300">
      <InputEditTeam />
      <InputEditPersonal />
    </div>
  );
}
