// event.js
import styles from "./index.module.less";
import { component } from "@/interface/vue";
import { defineComponent, onMounted, onUnmounted } from "vue";
name: "SkButton";
enum size {
  "normal",
  "small",
  "large",
}
interface props {
  color?: string;
  onClick?: any;
  debounceTime?: number | string;
  size?: size | string;
}
const SkButton = defineComponent({
  props: {
    debounceTime: {
      type: [Number, String],
      default: 0,
    },
    size: {
      type: String,
      default: "normal",
    },
    color: {
      type: String,
      default: "white",
    },
  },
  setup(
    { debounceTime, size, color }: props,
    { slots, emit, attrs }: component
  ) {
    onMounted(() => {});
    onUnmounted(() => {});

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
    return () => (
      <div class={styles["button"]} onClick={debounce(Number(debounceTime))}>
        {slots}
      </div>
    );
  },
});
export default SkButton;
