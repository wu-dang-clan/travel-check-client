import ky from "ky";

export const apiClient = ky.create({
  prefixUrl: "https://api.example.com",
  hooks: {
    beforeRequest: [
      (request) => {
        const token = localStorage.getItem("token");
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
  },
});
