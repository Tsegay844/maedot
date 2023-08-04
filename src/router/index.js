import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects.vue'
import Team from '../views/OurProducts.vue'
import Contact from '../views/Contact.vue'
import ContactForm from '../views/ContactForm'
import ParentComponent from '../views/ParentComponent'
import AboutView from '../views/AboutView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/Home',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/AboutView',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/ParentComponent',
    name: 'ParentComponent',
    component: ParentComponent
  },
 
  {
    path: '/ContactForm',
    name: 'ContactForm',
    component: ContactForm
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/OurProducts',
    name: 'OurProducts',
    component: Team
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
