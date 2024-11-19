import { isAdmin, isAdminFieldLevel } from "@/lib/access/isAdmin";
import { isAdminOrSelf } from "@/lib/access/isAdminOrSelf";
import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "avatar",
      label: "Avatar",
      type: "upload",
      relationTo: "media",
    },
    // {
    //   name: "role",
    //   saveToJWT: true,
    //   type: "select",
    //   options: [
    //     { label: "Admin", value: "admin" },
    //     { label: "User", value: "user" },
    //     { label: "Editor", value: "editor" },
    //   ],
    //   access: {
    //     create: isAdminFieldLevel,
    //     update: isAdminFieldLevel,
    //   },
    //   required: true,
    //   defaultValue: "user",
    // },
  ],
  // access: {
  //   //Only admins can create users
  //   create: isAdmin,
  //   // Admins can read all, but others can only read themselves
  //   read: isAdminOrSelf,
  //   // Admins can update all, but others can only update themselves
  //   update: isAdminOrSelf,
  //   // Only admins can delete users
  //   delete: isAdmin,
  // },
};
