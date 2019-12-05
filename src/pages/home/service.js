import request from "@/services/requestAxios";
export async function getHomeInfo() {
  return request({
    url: '/homeInfo',
    method: "GET",
    data: {}
  });
}