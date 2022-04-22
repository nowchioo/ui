// event.js
import "./index.less";
import { component } from "@/interface/vue";
import { defineComponent, onMounted, onUnmounted } from "vue";
import { throttle } from "@/utils/method/common";

enum sizeList {
  "normal",
  "small",
  "large",
}
interface props {
  color?: string;
  onClick?: any;
  throttleTime?: number | string;
  size?: sizeList | string;
}
const EmButton = defineComponent({
  name: "EmButton",
  props: {
    throttleTime: {
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
    props: props,
    { slots, emit, attrs }: component
  ) {
    onMounted(() => {});
    onUnmounted(() => {});

    return () => (
      <div
      {...props}
        class="em-button"
        onClick={
          props.throttleTime == 0
            ? () => emit("onClick")
            : throttle(Number(props.throttleTime), emit, "onClick")
        }
      >
        {slots.default()}
      </div>
    );
  },
});
export default EmButton;
