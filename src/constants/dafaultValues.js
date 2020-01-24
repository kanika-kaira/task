export const defaultMenuType = "menu-default"; // 'menu-default', 'menu-sub-hidden', 'menu-hidden';
export const defaultStartPath = `/`;
export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = "en";

const _env = "dev";

export const baseApiUrl =
    //<<<<<<< HEAD
    _env == "prod" ? "https://api.incredso.com/" : "http://10.10.10.223:9001/";
//=======
// _env == "prod" ? "https://api.incredso.com/" : "http://localhost:9002/";
//>>>>>>> b0a95b84d2e07e06eb28509b20c3700f1319cc01
// export const SOCKET_HOST =
//   _env == "prod" ? "https://api.incredso.com/" : "http://192.168.43.34:9002/";
export const baseurl =
    _env == "prod" ? "https://api.incredso.com/" : "http://localhost:5000/";

export const secret = 'SECRET_SECRET_YOU_GOT_A_SECRET'
export const localeOptions = [
    { id: "en", name: "English" }
    //{id:'es',nexample.com
];

export const minScore = 17;
export const searchPath = "/app/layouts/search";

