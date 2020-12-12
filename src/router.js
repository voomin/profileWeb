import { createRouter, createWebHistory } from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            name: 'Landing',
            component: () => import('./views/Lndg.vue')
        },

        // 작업물 ㅎㅎ
        {
            path: '/prj',
            component: () => import('./views/Prj.vue'),
            children: [
                {
                    path: 'wave',
                    name: 'Wave',
                    component: () => import('./components/prj/wave/Pge.vue')
                },
                {
                    path: 'sheep',
                    name: 'Sheep',
                    component: () => import('./components/prj/sheep/Pge.vue')
                },
                {
                    path: 'rope-box',
                    name: 'RopeBox',
                    component: () => import('./components/prj/RopeBox.vue')
                }
            ]
        }
    ]
});
