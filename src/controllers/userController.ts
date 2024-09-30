import { Router } from "express";
import { handleSignupRequset } from "../routes/usersRoute";

const router: Router = Router();

router.post("/signup", handleSignupRequset);

router.get("/profile", () => {});

export default router;
