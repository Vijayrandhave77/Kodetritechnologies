import Footer from "../../../models/configuration/setting/footer.schema.js";

export const getFooter = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const { type } = req.params;
    const query = {
      admin: _id,
      website,
      type,
    };
    const response = await Footer.findOne(query);
    if (!response) {
      return res
        .status(404)
        .json({ status: "error", message: "Footer not found" });
    }
    return res.status(200).json({
      status: "success",
      message: "Footer fetched successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const createFooter = async (req, res) => {
  try {
    const { _id, website } = req.admin;
    const data = req.body;
    const query = {
      admin: _id,
      website,
      type: data.type,
    };

    const response = await Footer.findOneAndUpdate(
      query,
      { ...data, name: data.type },
      {
        upsert: true,
        new: true,
      }
    );

    return res.status(200).json({
      status: "success",
      message: "Updated successfully",
      data: response,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error",
      error: error.message,
    });
  }
};
