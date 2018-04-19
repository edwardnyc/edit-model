import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
const overviewPage = r => require.ensure([], () => r(require('../page/overview.vue')), 'overviewPage');
const wechatPage = r => require.ensure([], () => r(require('../page/wechat.vue')), 'wechatPage');
const marketPage = r => require.ensure([], () => r(require('../page/market.vue')), 'marketPage');
// const formPage = r => require.ensure([], () => r(require('../page/form.vue')), 'formPage');
const formPage = () => { import ('../page/form.vue') }

const centerPage = r => require.ensure([], () => r(require('../page/center.vue')), 'centerPage');

const leaguePage = r => require.ensure([], () => r(require('../page/website/league.vue')), 'leaguePage');
const agentPage = r => require.ensure([], () => r(require('../page/website/agent.vue')), 'agentPage');
const templatePage = r => require.ensure([], () => r(require('../page/website/template.vue')), 'templatePage');
const investmentPage = r => require.ensure([], () => r(require('../page/website/investment.vue')), 'investmentPage');
const aboutPage = r => require.ensure([], () => r(require('../page/website/about.vue')), 'aboutPage');
const loginPage = r => require.ensure([], () => r(require('../page/website/login.vue')), 'loginPage');
const registerPage = r => require.ensure([], () => r(require('../page/website/register.vue')), 'registerPage');
const forgetPage = r => require.ensure([], () => r(require('../page/website/forget.vue')), 'forgetPage');

const getMarket = pageName => resolve => require(['../page/market1'], page => resolve(page[pageName]));
const getWebsite = pageName => resolve => require(['../page/website'], page => resolve(page[pageName]));
const getEdit = pageName => resolve => require(['../page/edit'], page => resolve(page[pageName]));
const shop = r => require.ensure([], () => r(require('../components/shop/HelloWorld')), 'shop');
const backstage = r => require.ensure([], () => r(require('../components/shop/houtai/backstage.vue')), 'backstage');
const backstage1 = r => require.ensure([], () => r(require('../components/shop/houtai/houtai1')), 'houtai1');
// const getBackstage = pageName => resolve => require(['../components/shop/houtai'], page => resolve(page[pageName]));
const houtai1 = r => require.ensure([], () => r(require('../components/shop/houtai/houtai1.vue')), 'houtai1');
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: {
                name: 'league',
            }
        },
        {
            path: '/',
            component: home,
            children: [{
                    path: 'overview',
                    name: 'overview',
                    component: overviewPage
                },
                {
                    path: 'form',
                    name: 'form',
                    component: formPage
                },
                {
                    path: 'wxchat',
                    name: 'wechat',
                    component: wechatPage
                },
                {
                    path: 'market',
                    component: marketPage,
                    children: [{
                            path: 'page1',
                            name: 'market1',
                            component: getMarket('page1')
                        },
                        {
                            path: 'page2',
                            name: 'market2',
                            component: getMarket('page2')
                        },
                        {
                            path: 'shop',
                            name: 'shop',
                            component: shop
                        }
                    ]
                },
                {
                    path: 'backstage',
                    component: backstage,
                    children: [{
                        path: 'houtai1',
                        component: backstage1,
                        name: 'houtai1',
                    }]
                },
            ],
        },
        {
            path: '/step1',
            name: 'step1',
            // component: home,
            component: getEdit('step1')
        },
        {
            path: '/step2',
            name: 'step2',
            // component: home,
            component: getEdit('step2')
        },
        {
            path: '/step3',
            name: 'step3',
            // component: home,
            component: getEdit('step3')
        },
        // editor
        // const getEdit = pageName => resolve => require(['../page/edit'], page => resolve(page[pageName]));
        {
            path: '/editor',
            name: 'editor',
            component: getEdit('editor')
        },
        {
            path: '/center',
            name: 'center',
            component: centerPage
        },
        {
            path: '/league',
            name: 'league',
            component: leaguePage
        },
        {
            path: '/agent',
            name: 'agent',
            component: agentPage
        },
        {
            path: '/template',
            name: 'template',
            component: templatePage
        },
        {
            path: '/investment',
            name: 'investment',
            component: investmentPage
        },
        {
            path: '/about',
            name: 'about',
            component: aboutPage
        },
        {
            path: '/login',
            name: 'login',
            component: loginPage
        },
        {
            path: '/register',
            name: 'register',
            component: registerPage
        },
        {
            path: '/forget',
            name: 'forget',
            component: forgetPage
        }
    ]
})