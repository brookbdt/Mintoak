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
  metrics: "metrics",
  homepage_for_banks: "homepage-for-banks",
  homepage_advantage_cards: "platform-feature-cards?_sort=id:ASC",
  homepage_for_merchant: "homepage-for-merchants",
  comminity_cards: "community-cards",
  homepage_achievements: "homepage-our-achievements?_sort=id:ASC",
  homepage_media_cards: "homepage-media-cards",
  faq: "faq-s",
  about_us_banner: "about-us-banner",
  mintoak_story: "mintoak-story?sort=order",
  about_us_metrics: "about-us-metrics?_sort=id:ASC",
  about_us_mission: "about-us-mission",
  about_us_vision: "about-us-vision",
  about_us_principle_cards: "about-us-principle-cards?_sort=id:ASC",
  about_us_our_founders: "about-us-our-founders",
  about_us_meet_the_team_1: "about-us-meet-the-team-1",
  merchant_page_benefits: "merchant-page-benefits",
  merchant_page_benefits_2: "merchant-page-benefits-2",
  merchant_page_benefits_3: "merchant-page-benefits-3-s",
  merchant_page_assured_by_banks: "merchant-page-assured-by-banks",
  merchant_page_onboarding: "merchant-page-onboarding",
  merchant_page_mock_up2: "merchant-page-mock-up-2",
  merchant_page_mock_up3: "merchant-page-mock-up-3",
  merchant_banner: "merchant-page-banner",
  partner_with_us_banner: "partner-with-us-banner?_sort=id:ASC",
  partner_with_us_new_heights: "partner-with-us-new-heights?_sort=id:ASC",
  careers_banner: "careers-banner",
  career_page_life_mintoak: "career-page-life-mintoak",
  career_listing_value_proposition:
    "career-listing-value-propositions?_sort=order:ASC",
  home_page_blogs: "home-page-blogs",
  partner_with_us_new_heights2: "partner-with-us-new-heights-2-s?_sort=id:ASC",
  about_us_customization_2: "about-us-customization-2-s",
  about_us_customization: "about-us-customization",
  partner_with_us_mintoak_effect:
    "partner-with-us-mintoak-effects?_sort=id:ASC",
  resources_blog_list: "resources-blog-lists",
  dropdown: "dropdowns",
  contact_us_find_us_at: "contact-us-find-us-at",
  product_page_demo: "product-page-demos",
  product_page_aim: "product-page-aims",
  product_page: "product-page",
  product_page_value_proposition: "product-page-value-propositions",
  product_page_features: "product-page-features",
  product_page_feature2: "product-page-feature-2",
  product_page_feature3: "product-page-feature-3",
  career_page_events: "career-page-events",
  menu: "menus"
};

export { API, endpoints, domain };
