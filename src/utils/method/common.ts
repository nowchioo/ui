export function throttle(interval: number, fn: any, params: any = null) {
    let time = new Date().getTime();
    let degree = 0
    return function () {
        let now = new Date().getTime();
        if (now - interval > time || degree == 0) {
            fn(params)
            time = now;
            degree++
        } else {
        }
    };
}