// config/admin.js
const AdminJS = require("adminjs");
const { registerAdapter } = AdminJS;
const { buildAuthenticatedRouter } = require("@adminjs/express");
const AdminJSSequelize = require("@adminjs/sequelize");
const sequelize = require("../models"); // Import your Sequelize instance
const { compareSync } = require("bcryptjs");

const {
  category,
  complex,
  gallery,
  menu,
  menuitem,
  qrcode,
  role,
  user,
  usercomplex,
  userrole,
} = sequelize.models; // Adjust based on your model names

// Initialize AdminJS
registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: "/admin",
  resources: [
    {
      resource: complex,
      options: {
        actions: {
          new: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, "super_admin"),
          },
          edit: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, "super_admin"),
          },
          delete: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, "super_admin"),
          },
        },
      },
    },
    {
      resource: user,
      options: {
        actions: {
          new: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, "super_admin"),
          },
          edit: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, "super_admin"),
          },
          delete: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, "super_admin"),
          },
        },
      },
    },
    {
      resource: usercomplex,
      options: {
        actions: {
          new: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, "super_admin"),
          },
          edit: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, "super_admin"),
          },
          delete: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, "super_admin"),
          },
        },
      },
    },
    {
      resource: menu,
      options: {
        actions: {
          new: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, "super_admin"),
          },
          edit: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, ["super_admin", "owner"]),
          },
          delete: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, "super_admin"),
          },
        },
      },
    },
    {
      resource: menuitem, // Assuming you have a MenuItem model
      options: {
        actions: {
          new: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, ["super_admin", "owner"]),
          },
          edit: {
            isAccessible: async ({ currentAdmin }) =>
              await hasRole(currentAdmin, ["super_admin", "owner"]),
          },
        },
      },
    },
    // Add other models as needed
  ],
});
adminJs.watch();

// Helper function to check user roles
async function hasRole(user, roles) {
  if (!user || !roles) return false;
  const userRoles = await UserRole.findAll({
    where: { userId: user.id },
    include: [Role],
  });
  const userRoleNames = userRoles.map((ur) => ur.Role.name); // Assuming Role has a 'name' field
  if (Array.isArray(roles)) {
    return roles.some((role) => userRoleNames.includes(role));
  }
  return userRoleNames.includes(roles);
}

// AdminJS authentication with role check
const buildAdminRouter = () => {
  return buildAuthenticatedRouter(adminJs, {
    authenticate: async (email, password) => {
      try {
        const user = await User.findOne({ where: { email }, include: [Role] });
        if (user && compareSync(password, user.password)) {
          return user; // Return the user if authentication succeeds
        }
      } catch (error) {
        console.error("Authentication error:", error);
      }
      return null; // Return null if authentication fails
    },
    cookiePassword: "adminjs-cookie-secret",
  });
};

export default {
  adminJs,
  buildAdminRouter,
};
