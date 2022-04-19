// event.js
import styles from "./index.module.less";
import { component } from "@/interface/vue";
name:'SkButton'
interface props {
  color?: string;
  onClick?: any;
  debounceTime?: number | string;
}
export function SkButton(
  { debounceTime }: props,
  { slots, emit, attrs }: component
) {
  function debounce(interval: number) {
    let time = new Date().getTime();
    return function () {
      let now = new Date().getTime();
      if (now - interval > time) {
        emit("onClick");
        time = now;
      } else {
      }
    };
  }
  return (
    <div
      class={styles["button"]}
      onClick={debounceTime ? debounce(Number(debounceTime)) : debounce(0)}
    >
      {slots}
    </div>
  );
}
