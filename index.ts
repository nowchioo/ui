import EmButton from './src/components/button';
const components = [
    EmButton
];
const install = function (Vue: any, opts = {}) {
    console.log(components,'components')
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && (window as any).Vue) {
    install((window as any).Vue);
}

// export default  抛出的模块无法使用解构赋值  import { EmButton } from './components/index';  
const modules = {
    install,
    EmButton
}
export default modules
export {
    install,
    EmButton
}