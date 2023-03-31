/**
 * @param {function} params
 */
// export const formatData = (params) => {
//   let formdata = new FormData();
//   for (let key in params) {
//     formdata.append(key, params[key]);
//   }
//   return formdata;
// };

/**
 * @param {function} prod
 * @param {function} dev
 */
export function handleEnv({ prod, dev }) {
  if (typeof prod !== "function" || typeof dev !== "function")
    throw new TypeError("type of prod & dev should be function.");
  if (process.env.NODE_ENV === "production") prod();
  if (process.env.NODE_ENV === "development") dev();
}

export function isNullOrUdf(val: any): boolean {
  return val === undefined || val === null;
}

/**
 * 用于安全取用对象键值
 * @param {*} obj 取值对象
 * @param {*} keyStr 索引字符串,结构'b.c',则获取obj.b.c
 * @param {*} dft 默认返回的值，当没有成功取值时或得到的值为null或undefined时
 */
export function safeValue(obj: object, keyStr = "", dft: any): any {
  if (Object.prototype.toString.call(obj) === "[object Object]") {
    if (keyStr) {
      if (keyStr.indexOf(".") < 0) {
        let res = obj[keyStr];
        return isNullOrUdf(res) ? dft : res;
      } else {
        let key = keyStr.split(".")[0];
        let resetKeyStr = keyStr.substr(key.length + 1);
        if (key in obj) {
          return safeValue(obj[key], resetKeyStr, dft);
        } else {
          return dft;
        }
      }
    } else {
      return dft;
    }
  } else {
    return dft;
  }
}

export function breakWords(words = "", num: number, did = "\n") {
  let str = "";
  let len = words.length;
  for (let i = 1; i <= len; i++) {
    str += words[i - 1];
    if (i % num === 0 && i !== len) {
      str += did;
    }
  }
  return str;
}
export function rgb() {
  //rgb颜色随机
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgb = "rgb(" + r + "," + g + "," + b + ")";
  return rgb;
}

export function isRightUrl(url: string): boolean {
  let bool = false;
  try {
    new URL(url);
    if (typeof url === "string" && !url.startsWith("#")) {
      bool = true;
    }
  } catch (e) {
    bool = false;
  }
  return bool;
}

export function formatNumber(s: any, n = false) {
  if (typeof n === "number") {
    if (Number(s) === 0) return "0";
    n = n >= 0 && n <= 20 ? n : 2;
    s = parseFloat((s + "").replace(/[^\d.-]/g, "")).toFixed(n) + "";
  } else {
    s = parseFloat((s + "").replace(/[^\d.-]/g, "")) + "";
  }

  const l = s.split(".")[0].split("").reverse();
  const r = s.split(".")[1];
  let t = "";
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? "," : "");
  }
  return t.split("").reverse().join("") + (!!r ? "." + r : "");
}

export function accSub(arg1, arg2) {
  if (isNaN(arg1)) {
    arg1 = 0;
  }
  if (isNaN(arg2)) {
    arg2 = 0;
  }
  arg1 = Number(arg1);
  arg2 = Number(arg2);

  var r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
  n = r1 >= r2 ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

export function isProd() {
  return process.env.NODE_ENV === "production";
}
export function withUnit(n: string, unit: string) {
  if (/^[\-\+]?\d+(\.\d+)?$/.test(n)) {
    return n + (unit || "");
  }
  return n;
}

export const getW = (num: string | number) => {
  if (num) {
    return (parseInt(num) / 10000).toFixed(2);
  } else {
    return 0;
  }
};

export const getAreaPath = (areaStr: string) => {
  // const str = "内蒙古自治区锡林郭勒盟正镶白旗前进大街2699号";
  const reg = /.+?(省|市|自治区|自治州|行政区|盟|旗|县|区)/g; // 省市区的正则
  const area = areaStr.match(reg) ?? [];
  const other = areaStr.split(area[area?.length - 1])[1];
  return [...area, other];
};
