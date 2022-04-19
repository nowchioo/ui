import { SkButton } from "./button";



const components = [
    SkButton
];

const install = function (Vue:any, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && (window as any).Vue) {
    install((window as any).Vue);
}
export default {
    install,
    SkButton
}