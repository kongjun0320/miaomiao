import Vue from "vue";
import MessageBox from "./MessageBox";

export let messageBox = (function() {
  //默认的配置
  let defaults = {
    title: "",
    content: "",
    cancel: "",
    ok: "",
    handleCancle: null,
    handleOk: null
  };
  let MyComponent = Vue.extend(MessageBox);
  return function(opts) {
    for (let key in opts) {
      defaults[key] = opts[key];
    }
    let vm = new MyComponent({
      el: document.createElement("div"),
      data: {
        title: defaults.title,
        content: defaults.content,
        cancel: defaults.cancel,
        ok: defaults.ok
      },
      methods: {
        handleCancle() {
          defaults.handleCancle && defaults.handleCancle.call(this);
          document.body.removeChild(vm.$el);
        },
        handleOk() {
          defaults.handleOk && defaults.handleOk.call(this);
          document.body.removeChild(vm.$el);
        }
      }
    });
    document.body.appendChild(vm.$el);
  };
})();
