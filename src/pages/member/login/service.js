import request from "@/services/requestAxios";
export async function loginIn(params) {
  return request({
    url: '/services/game',
    method: "POST",
    data: params
  });
}