import axios from "@/utils/ajax";

// 获取地区code
export function getAreaList(params: any): any {
  return axios.get("/major-server/area/areaListV2", {
    params,
  });
}
