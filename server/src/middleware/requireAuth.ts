import { type Request, type Response, type NextFunction } from "express"

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!res.locals.userId) {
    res.status(401).json({ error: "Unauthorized" })
  } else {
    next()
  }
}

export default requireAuth