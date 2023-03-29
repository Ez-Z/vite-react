import ajax from "@/utils/ajax";

export function getData(params: any) {
  return ajax.get("/major-server/area/areaList", {
    params,
  });
}
