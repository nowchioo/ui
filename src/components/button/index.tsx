// event.js
import "./index.less";
import { component } from "@/interface/vue";
import { defineComponent, onMounted, onUnmounted } from "vue";

enum sizeList {
  "normal",
  "small",
  "large",
}
interface props {
  color?: string;
  onClick?: any;
  debounceTime?: number | string;
  size?: sizeList | string;
}
const EmButton = defineComponent({
  name: "EmButton",
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
      <div class="em-button" onClick={debounce(Number(debounceTime))}>
        {slots}
      </div>
    );
  },
});
export default EmButton;
