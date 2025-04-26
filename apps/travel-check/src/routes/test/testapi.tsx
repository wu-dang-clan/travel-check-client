import { createFileRoute } from "@tanstack/react-router";
import { useUser, useUpdateUser } from "@travel-check-client/react-query";

export const Route = createFileRoute("/test/testapi")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: user, isLoading } = useUser();
  const updateUser = useUpdateUser();

  if (isLoading) return <p>로딩 중...</p>;

  const handleUpdateUser = () => {
    updateUser.mutate(
      { name: "이몽룡" },
      {
        onSuccess: (updatedUser) => {
          console.log("이름이 성공적으로 업데이트되었습니다:", updatedUser.name);
          console.log("업데이트된 유저 정보:", user?.name);
        },
        onError: (error) => {
          console.error("이름 업데이트 실패:", error);
        },
      },
    );
  };

  return (
    <div className="space-y-4 p-4">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">현재 유저 정보</h2>
        <p>ID: {user?.id}</p>
        <p>이름: {user?.name}</p>
      </div>

      <button
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-400"
        onClick={handleUpdateUser}
        disabled={updateUser.isPending}
      >
        {updateUser.isPending ? "업데이트 중..." : "이름을 이몽룡으로 수정"}
      </button>

      {updateUser.isSuccess && <p className="text-green-500">업데이트 완료!</p>}

      {updateUser.isError && <p className="text-red-500">에러 발생: {updateUser.error.message}</p>}
    </div>
  );
}
