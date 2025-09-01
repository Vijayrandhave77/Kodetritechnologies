export const getStatus = async (req, res) => {
  try {
  } catch (error) {}
};

export const createStatus = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
