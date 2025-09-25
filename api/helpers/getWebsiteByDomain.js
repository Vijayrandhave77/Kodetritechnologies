import Website from "../models/configuration/setting/website.schema.js";

export const getWebsiteByDomain = async (domain) => {
  const result = await Website.findOne({ domain: domain });
  return result?._id;
};
