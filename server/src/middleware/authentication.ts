
import jwt from 'jsonwebtoken'
import { type Request, type Response, type NextFunction } from "express"
import { type ITokenPayload } from '../interface/ITokenPayload'

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const { auth } = req.cookies

  // If user doesn't have auth cookie,
  // move to the next middleware.
  if (!auth) {
    return next()
  }

  const authTokenParts = auth.split(" ")
  if (authTokenParts.length !== 2 || authTokenParts[0] !== "Bearer") {
    return next()
  }

  try {
    const token: string = authTokenParts[1]
    const decoded = jwt.verify(token, process.env.SECRET_KEY as string) as ITokenPayload;
    res.locals.userId = decoded.id
    next()
  } catch (error) {
    // JWT verification fails
    res.clearCookie("auth")
    next()
  }
}

export default authenticate