!function(e){"use strict";!function(t,a){var s=e(".days"),r=e(".hours"),n=e(".minutes"),o=e(".seconds");function l(){var e=function(e){var t=Date.parse(e)-Date.parse(new Date),a=Math.floor(t/1e3%60),s=Math.floor(t/1e3/60%60),r=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/864e5),hours:r,minutes:s,seconds:a}}(a);s.html(e.days),r.html(("0"+e.hours).slice(-2)),n.html(("0"+e.minutes).slice(-2)),o.html(("0"+e.seconds).slice(-2)),e.total<=0&&clearInterval(u)}l();var u=setInterval(l,1e3)}(0,new Date(Date.parse(new Date)+216e7+468e5))}(jQuery);
