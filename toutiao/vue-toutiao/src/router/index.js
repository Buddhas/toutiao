import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from 'components/home/home'
import Video from 'components/video/video'
import Mine from 'components/mine/mine'
import Channel from 'components/channel/channel'
import Content from 'components/content/content'
import Comment from 'components/comment/comment'
import Collection from 'components/collection/collection'
import Search from 'components/search/search'
import { collection } from '../store/getters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/home/__all__'
    },
    {
      path:'/home/:type',
      component:Home,
     
    },
    {
      path:'/content/:id',
      component:Content
      
    },
    {
      path:'/video',
      component:Video
    },
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'/channel',
      component:Channel
    },
    {
      path:'/comment',
      component:Comment
    },
    {
      path:'/collection',
      component:Collection
    },
    {
      path:'/Search',
      component:Search
    }

  ]
})
