import { msg } from "@lingui/core/macro";

export const commonRoutingConstants = {
  routes: {
    "/": msg({ message: "/" }),
    "/default": msg({ message: "/default" }),
    "/error": msg({ message: "/error" }),
    "/login": msg({ message: "/login" }),
    "/login/callback": msg({ message: "/login/callback" }),
    "/login/init": msg({ message: "/login/init" }),
    "/logout": msg({ message: "/logout" }),
    "/logout/callback": msg({ message: "/logout/callback" }),
    "/logout/init": msg({ message: "/logout/init" }),
    "/logout/success": msg({ message: "/logout/success" }),
    "/registration": msg({ message: "/registration" }),
    "/registration/callback": msg({ message: "/registration/callback" }),
    "/registration/init": msg({ message: "/registration/init" }),
    "/settings": msg({ message: "/settings" }),
    "/settings/callback": msg({ message: "/settings/callback" }),
    "/settings/init": msg({ message: "/settings/init" }),
  },
} as const;
