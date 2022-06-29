import jwt from "jsonwebtoken";

export const Auth = (req, res, next) => {
  const [, token] = req.headers.authorization.split(" ");

  if (!token) {
    return res.status(401).json({ message: "Token is required." });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = {
      id: decode.id,
      iat: decode.iat,
      exp: decode.exp,
    };

    req.user = user;

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid token." });
  }
};
