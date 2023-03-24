const routes = [
  {
    path: "/",
    component: '/Home',
    index: true,
    // children: [
    //   {
    //     path: "/home/children",
    //     component: '/Home/Children',
    //   },
    // ]
  },
  {
    path: "/child",
    component: '/Children',
  },
  {
    path: "/second",
    component: "/SecondPage",
  },
]

export default routes;