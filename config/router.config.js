export default [
  {
    path: "/",
    component: "../layouts/BasicLayout",
    routes: [
      { path: '/', redirect: '/home' },
      { path: "/home", component: "./home/index", title: "home" }
    ]
  }
];
