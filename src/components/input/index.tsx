import { component } from "@/interface/vue";
import { computed, defineComponent, ref, toRefs } from "vue";
import "./index.less";

const EmInput = defineComponent({
  name: "EmInput",
  props: {
    modelValue: {},
    placeholder: {
      type: [String],
      default: "请输入",
    },
    type: {
      default: "text",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    class: {
      type: String,
      default: "",
    },
    style: {
      type: String,
      default: "",
    },
  },
  /* 在此处解构props会导致被解构的响应数据发生不可预计的错误 */
  setup(props, { slots, attrs, emit }: component) {
      
    let className = `em-input ${props.disabled ? " em-input-disabled" : ""}${
      props.class
    }`;

    const update = (e: any) => {
      emit("update:modelValue", e.target.value);
    };
    const change = (e: any) => {
      emit("change", e.target.value);
      e.stopPropagation();
    };

    return () => (
      <div class="em-input-wrap">
        <input
          type={props.type}
          class={className}
          placeholder={props.placeholder}
          onInput={update}
          disabled={props.disabled}
          value={props.modelValue}
          style={props.style}
          onChange={change}
        ></input>
        {slots.default()}
        {slots.icon?slots.icon():''}
      </div>
    );
  },
});

export default EmInput;
