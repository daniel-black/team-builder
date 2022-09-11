import NextAuth from "next-auth/next";
import { nextAuthOptions } from "../../../utils/auth";

export default NextAuth(nextAuthOptions);