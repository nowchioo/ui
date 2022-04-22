import { component } from "@/interface/vue";
import { computed, defineComponent, toRefs, ref } from "vue";
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
      type: String,
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
      type: [String, Object],
      default: "",
    },
    maxlength: {
      type: [Number, String],
    },
    minlength: {
      type: [Number, String],
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    min: {
      default: undefined,
    },
    max: {
      default: undefined,
    },
  },
  /* 在此处解构props会导致被解构的响应数据发生不可预计的错误 */
  setup(props, { slots, attrs, emit }: component) {
    let className = `em-input ${props.disabled ? " em-input-disabled" : ""}${
      props.class
    } ${slots.prefix ? "em-input-prefix" : ""} ${
      slots.suffix ? "em-input-suffix" : ""
    }`;

    const update = (e: any) => {
      emit("update:modelValue", e.target.value);
    };
    const change = (e: any) => {
      emit("change", e.target.value);
      e.stopPropagation();
    };
    let { type } = props;
    let propsType = ref(type);
    const changeType = () => {
      propsType.value == "password"
        ? (propsType.value = "text")
        : (propsType.value = "password");
    };

    return () => (
      <div class="em-input-wrap">
        {/* <div>{slots.default()}</div> */}
        <div class="em-input-inner-wrap">
          <input
            {...props}
            class={className}
            onInput={update}
            value={props.modelValue}
            onChange={change}
            type={propsType.value}
          ></input>
          {slots.suffix ? (
            <div class="em-input-suffix-icon">{slots.suffix()}</div>
          ) : null}
          {slots.prefix ? (
            <div class="em-input-prefix-icon">{slots.prefix()}</div>
          ) : null}
          {props.showPassword ? (
            <div class="em-input-suffix-icon ">
              {propsType.value == "password"}
              <span
                class={
                  propsType.value == "password"
                    ? "iconfont  em-type-change icon-bukejian"
                    : "iconfont  em-type-change icon-zitiyulan"
                }
                onClick={changeType}
              ></span>
            </div>
          ) : null}
        </div>
      </div>
    );
  },
});

export default EmInput;
