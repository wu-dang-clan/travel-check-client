import ky from "ky";

export const api = ky.create({
  prefixUrl: "https://api.example.com", // 실제 API 도메인으로 교체
  headers: {
    "Content-Type": "application/json",
  },
});
