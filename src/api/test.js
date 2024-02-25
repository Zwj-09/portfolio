import request from "@/services/request";

export const getImgs = () => {
  return request({
    method: "get",
    url: "/home/highscore"
  });
};
