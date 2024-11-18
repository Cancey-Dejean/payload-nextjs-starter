import { User } from "@/payload-types";
import { Access, FieldAccess } from "payload";

export const isAdmin: Access = ({ req }) => {
  return Boolean(req.user?.role?.includes("admin"));
};

export const isAdminFieldLevel: FieldAccess<{ id: string }, User> = ({
  req: { user },
}) => {
  // Return true or false based on if the user has an admin role
  return Boolean(user?.role?.includes("admin"));
};
