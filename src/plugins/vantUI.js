import Vue from "vue";
import {
  Icon,
  Toast,
  PullRefresh,
  Popup,
  List,
  Cell,
  cellGroup,
  SwitchCell,
  Divider,
  Image,
  Lazyload,
  Dialog,
  Field,
  Uploader,
  ImagePreview,
  RadioGroup,
  Radio
} from "vant";

Toast.install = () => {
  Vue.prototype.$toast = Toast;
};

ImagePreview.install = () => {
  Vue.prototype.$imagePreview = ImagePreview;
};
Vue.use(ImagePreview);
Vue.use(Icon);
Vue.use(PullRefresh);
Vue.use(Popup);
Vue.use(List);
Vue.use(Cell);
Vue.use(cellGroup);
Vue.use(SwitchCell);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Lazyload);
Vue.use(Field);
Vue.use(Uploader);
Vue.use(RadioGroup);
Vue.use(Radio);
Dialog.install = () => {
  Dialog({ message: "提示" });
  Vue.prototype.$dialog = Dialog;
};
