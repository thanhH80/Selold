import { create } from "apisauce";

const clientApi = create({
  baseURL: "http://192.168.0.104:9000/api",
});

export default clientApi;
