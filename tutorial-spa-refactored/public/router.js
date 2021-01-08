 //declaring custom routing
 const customNameRouting = [
    {path:'/',component:home},
    {path:'/about',component:about},
    {path:'/list',component:list},
    {path:'/list/:id', component: detail},
    {path:"*", component:NotFound}
]

//instantiate VueRouter
const router = new VueRouter({
    mode:'history',
    routes : customNameRouting
})
