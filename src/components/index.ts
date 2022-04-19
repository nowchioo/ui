import { SkButton } from "./button";



const components = [
    SkButton
];

const install = function (Vue: any, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && (window as any).Vue) {
    install((window as any).Vue);
}

// export default  抛出的模块无法使用解构赋值  import { SkButton } from './components/index';  
export {
    install,
    SkButton
}