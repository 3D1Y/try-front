import request from "@utils/request";

export default function userLogin(phone, password) {
  return request({
    method: "POST",
    url: "/user/passport/login",
    data: {
      phone,
      password,
    },
  });
}
