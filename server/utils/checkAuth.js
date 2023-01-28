import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decoded.id;
      //this is an extension to our routers
      next();
    } catch (err) {
      // In case we make a request without the token, then we'll get this error mesage
      return res.json({
        message: "Access denied",
      });
    }
  } else {
    // In case we make a request without the token, then we'll get this error mesage
    return res.json({
      message: "Access denied",
    });
  }
};
