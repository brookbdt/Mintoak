// STRAPI PORTAL http://uat-content.mintoak.com/admin  rushabh@mindlogicsolutions.com / EÛ8×^û

import axios from "axios";
import { Notification } from "./utils";

const domain = "http://uat-content.mintoak.com";
const slug = "/";
const host = domain + slug;

axios.defaults.baseURL = host;

const API = ({ url, method = "get", body = {}, headers = {} }) =>
  axios[method](url, headers, body)
    .then((res) => res.data)
    .catch((err) => {
      Notification({
        type: "error",
        message: "Opps, Something went wrong!",
        description: err.message,
      });
      return err;
    });

// API ENDPOINTS
const endpoints = {
  home_banner: "home-banner",
};

export { API, endpoints, domain };
