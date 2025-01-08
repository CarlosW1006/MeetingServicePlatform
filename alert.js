document.addEventListener('DOMContentLoaded', function () {
   const closeBtn = document.getElementById('close-btn');
   const verifyBtn = document.getElementById('verify-btn');
   const webNotify = document.getElementById('web-notify');
   const acceptBtn = document.getElementById('accept-btn');

   closeBtn.addEventListener('click', function() {
      webNotify.style.visibility = "hidden";
   }, false);

   verifyBtn.addEventListener('click', function() {
      webNotify.style.visibility = "visible";
   });

   acceptBtn.addEventListener('click', function() {
      window.open('https://topmeetingrtc.topoo.com.tw/5', '_blank');

      setTimeout(() => {
         webNotify.style.visibility = "hidden";
      }, 1000);
   })
});
