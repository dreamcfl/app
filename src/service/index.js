import axios from "axios";
// import store from "@/store";
import Cookie from "@u/cookie";
import router from "../router";
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
// eslint-disable-next-line
let loading;
var clearSettimeout;
function startLoading() {
  clearSettimeout = setInterval(function() {
    loading = Toast.loading({
      message: "加载中...",
      forbidClick: true,
      duration: 0
    });
  }, 600);
}

function endLoading() {
  clearTimeout(clearSettimeout);
  clearSettimeout = null;
  Toast.clear();
}
// loading互不冲突调用
let needLoadingRequestCount = 0;

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading();
  }
  needLoadingRequestCount++;
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return;
  needLoadingRequestCount--;
  if (needLoadingRequestCount === 0) {
    endLoading();
  }
}

// 默认超时设置
/* eslint-disable */

// axios.defaults.timeout = 60000 * 10
axios.defaults.timeout = 60000 * 2
// 相对路径设置
axios.defaults.baseURL = ''
// loading图

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 设置参数格式
    if (!config.headers['Content-Type']) {
      config.headers = {
        'Content-Type': 'application/json'
      }
    }
    // 设置token 
    // // 非登录需要token
    // if( !config.url == process.env.VUE_APP_URL+'/home'){
    //   if(Cookie.get("token")){
    //       config.data.token = Cookie.get("token")
    //   }else{
    //     router.push({ name: "Home" });
    //   }
    // }
    // 判断ie加时间戳防止不请求接口
    if (window.ActiveXObject || 'ActiveXObject' in window) {
      config.url = `${config.url}?time=${new Date().getTime()}`
    }
    showFullScreenLoading()
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    // window.console.log(response)
    tryHideFullScreenLoading()
    return response
  },
  error => {
    tryHideFullScreenLoading()
    return Promise.reject(error)
  }
)
/**
 * 封装获取验证码方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function code(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
        .then(response => {
            resolve(response.data)
        })
        .catch(err => {
          console.log(err)
          reject(err)
          Toast('请求失败！服务异常')
        })
    })
  }

/**
 * 封装upload方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function upload(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => {
        if (response.data.code == 4000) {
          resolve(response.data.data)
        } else {
          Toast(response.data.msg)
        }
      })
      .catch(err => {
        console.log(err)
        reject(err)
        Toast('请求失败！服务异常')
      })
  })
}

/**
 * 封装export方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function exportExcel(url, data = {}, stringName = 'excel') {
  return new Promise((resolve, reject) => {
    axios.post(url, data, { responseType: 'blob' })
      .then(response => {
        let fileName = response.headers["content-disposition"].split(";")[1].split("=")[1];  //filename名称截取
        if (window.navigator.msSaveBlob) {
          window.navigator.msSaveBlob(response.data, fileName);
        }
        let url = window.URL.createObjectURL(response.data); //表示一个指定的file对象或Blob对象
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = stringName + '_' + fileName; //命名下载名称
        a.click(); //点击触发下载  
        window.URL.revokeObjectURL(url);  //下载完成进行释放
        document.body.removeChild(a)
      })
      .catch(err => {
        console.log(err)
        reject(err)
        if (window.navigator.msSaveBlob) {
          window.console.log('IE')
        } else {
            Toast('请求失败！服务异常')
        }
      })
  })
}
/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    if(Cookie.get("token")){
      data.token = Cookie.get("token")
  }else{
    router.push({ name: "Home" });
  }
    return axios.get(url, {
      params: params
    })
      .then(response => {
          // 返回3999 重新登录
          if (response.data.code == 3999) {
            Cookie.delete("token");
            router.push({ name: "Login" });
          }
        if (response.data.code == 4000) {
          resolve(response.data.data)
        } else {
            Toast(response.data.msg)
        }
      })
      .catch(err => {
        console.log(err)
        reject(err)
        Toast('请求失败！服务异常')
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    // 登陆不带token
     if( !(url == process.env.VUE_APP_URL+'/pub/api/login')){
      if(Cookie.get("token")){
          data.token = Cookie.get("token")
      }else{
        router.push({ name: "Login" });
      }
    }
    axios.post(url, data)
      .then(response => {
          // 返回3999 重新登录
          if (response.data.code == 3999) {
            Cookie.delete("token");
            router.push({ name: "Login" });
          }
        if (response.data.code == 4000) {
          resolve(response.data.data)
        }
        else {
            Toast(response.data.msg)
        }
      })
      .catch(err => {
        console.log(err)
        reject(err)
        Toast('请求失败！服务异常')
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        if (response.data.code == 4000) {
          resolve(response.data.data)
        } else {
            Toast(response.data.msg)
        }
      })
      .catch(err => {
        console.log(err)
        reject(err)
        Toast('请求失败！请检查网络')
      })
  })
}
/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, { data: data })
      .then(response => {
        if (response.data.code == 4000) {
          resolve(response.data.data)
        } else {
            Toast(response.data.msg)
        }
      })
      .catch(err => {
        console.log(err)
        reject(err)
        Toast('请求失败！请检查网络')
      })
  })
}

/* eslint-disable */