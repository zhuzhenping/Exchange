import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import "./common/extend";
import "./common/filter";
import router from "./router";
import store from "./Store";
import {
    Button,
    Cell,
    CellGroup,
    Tab,
    Tabs,
    NavBar,
    List,
    PullRefresh,
    Icon,
    Collapse,
    CollapseItem,
    Uploader,
    Toast,
    Swipe,
    SwipeItem,
    Dialog,
    Switch,
    Popup,
    AddressList,
    RadioGroup,
    Field,
    Radio
} from "vant";
import VueClipboard from "vue-clipboard2";
import VueI18n from "vue-i18n";
import FastClick from "fastclick";
import "./assets/stylus/reset.styl";
FastClick.prototype.onTouchEnd = function(event) {};
if ("addEventListener" in document) {
    document.addEventListener(
        "DOMContentLoaded",
        () => {
            FastClick.attach(document.body);
        },
        false
    );
}

Vue.use(VueI18n)
    .use(Button)
    .use(Cell)
    .use(CellGroup)
    .use(Tab)
    .use(Tabs)
    .use(Icon)
    .use(NavBar)
    .use(List)
    .use(PullRefresh)
    .use(Collapse)
    .use(CollapseItem)
    .use(Uploader)
    .use(Toast)
    .use(Swipe)
    .use(SwipeItem)
    .use(Popup)
    .use(AddressList)
    .use(RadioGroup)
    .use(Field)
    .use(Radio)
    .use(Switch)
    .use(Dialog)
    .use(VueClipboard);
const i18n = new VueI18n({
    locale: store.state.lang[0].value,
    messages: {
        zh: require("./lang/zh"),
        en: require("./lang/en"),
        zh_tw: require("./lang/zh_tw")
    }
});
window.i18n = i18n;
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");
