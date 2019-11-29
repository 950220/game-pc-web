export default [
  {
    path: "/member",
    component: "../layouts/BasicLayout",
    routes: [
      { path: "/member/login", component: "./member/login/index", title: "login" }
    ]
  },
  {
    path: "/",
    component: "../layouts/BasicLayout",
    routes: [
      { path: "/", redirect: "/home" },
      { path: "/home", component: "./home/index", title: "home" }
    ]
  }
];
