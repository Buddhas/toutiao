import {getCollection,getSearchHistory} from 'common/js/cache'

const state = {
    subscribe:[
        {url: '/home', type: '__all__', text: '推荐'},
		{url: '/home', type: 'news_hot', text: '热点'},
		{url: '/home', type: 'news_society', text: '社会'},
		{url: '/home', type: 'news_entertainment', text: '娱乐'},
		{url: '/home', type: 'news_tech', text: '科技'},
		{url: '/home', type: 'news_car', text: '汽车'},
		{url: '/home', type: 'news_sports', text: '体育'},
		{url: '/home', type: 'news_finance', text: '财经'},
		{url: '/home', type: 'news_military', text: '军事'},
		{url: '/home', type: 'news_world', text: '国际'},
		{url: '/home', type: 'news_fashion', text: '时尚'}
    ],

    subscribeNo:[
        {url: '/home', type: 'news_travel', text: '旅游'},
		{url: '/home', type: 'news_discovery', text: '探索'},
		{url: '/home', type: 'news_baby', text: '育儿'},
		{url: '/home', type: 'news_regimen', text: '养生'},
		{url: '/home', type: 'news_story', text: '故事'},
		{url: '/home', type: 'news_essay', text: '美文'},
		{url: '/home', type: 'news_game', text: '游戏'},
		{url: '/home', type: 'news_history', text: '历史'},
		{url: '/home', type: 'news_food', text: '美食'}
    ],

    newLists:{
        __all__: [],
        news_hot: [],
        news_society: [],
        news_tech: [],
        news_entertainment: [],
        news_car: [],
        news_sports: [],
        news_finance: [],
        news_military: [],
        news_world: [],
        news_fashion: [],
        news_travel:[],
        news_discovery:[],
        news_baby:[],
        news_regimen:[],
        news_story:[],
        news_essay:[],
        news_game:[],
        news_history:[],
        news_food:[]
    },

   //所选文章
   article:{},

   //页面返回是否需要重新加载
   loadingAgain:true,

   //收藏新闻
   collection:getCollection(),

   //搜索历史
   searchHistory:getSearchHistory()


}


export default state