import request from "@/services/requestAxios";
export async function loginIn(params) {
  return request({
    url: '/login',
    method: "POST",
    data: params
  });
}