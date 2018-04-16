export default function Rem(doc, win) {
  let docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

  function recalc() {
    const clientWidth = docEl.clientWidth/16;
    if (!clientWidth) {return};
    docEl.style.fontSize = clientWidth+'px';
  }
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}
