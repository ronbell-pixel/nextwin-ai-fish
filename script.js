function calcROI(){
  const calls=+document.getElementById('calls').value||0;
  const missed=+document.getElementById('missed').value||0;
  const job=+document.getElementById('job').value||0;
  const close=+document.getElementById('close').value||0;
  const recovered=(calls*(missed/100))*job*(close/100);
  const annual=recovered*12;
  document.getElementById('monthlyLost').textContent=recovered.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
  document.getElementById('annualLost').textContent=annual.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});
}
window.addEventListener('DOMContentLoaded',()=>{['calls','missed','job','close'].forEach(id=>document.getElementById(id)?.addEventListener('input',calcROI));calcROI();});
