const isChrome = !!window.chrome;
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || navigator.userAgent.includes('Macintosh');
const swordBookGold = document.querySelector("#sword-gold");
const icon = document.querySelector("img.icon");
const flipPage = document.querySelector("#page-browser");
const flipPageReverse = document.querySelector("#page-browser-reverse");
const wavingFlag = document.querySelector("#dragon-flag");

const matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

if ((matched) && (!isChrome) && (!isIOS)) {
  icon.src = '/assets/icons/fqt-logo-dark.svg';
  swordBookGold.src = '/assets/icons/sword-gold-dark.svg';
  flipPage.src = '/assets/animations/flip-page/flip-page-dark.svg';
  flipPageReverse.src = '/assets/animations/flip-page/flip-page-reverse-dark.svg';
  wavingFlag.src = '/assets/animations/waving-flag-dark.svg'
}