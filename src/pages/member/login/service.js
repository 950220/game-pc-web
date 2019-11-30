import request from "@/services/request";
export async function loginIn(params) {
  return request({
    url: 'game/services/game',
    method: "POST",
    data: params
  });
}