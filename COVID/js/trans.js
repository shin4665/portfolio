'use strict';

{
  var page = document.getElementById('page');
  var page2 = document.getElementById('page2');
  var page3 = document.getElementById('page3');
  var page4 = document.getElementById('page4');
  var page5 = document.getElementById('page5');
  var BUTTON = document.getElementById('BUTTON');
  var BUTTON2 = document.getElementById('BUTTON2');
  var BUTTON3YES = document.getElementById('BUTTON3YES');
  var BUTTON3NO = document.getElementById('BUTTON3NO');
  var BUTTON4YES = document.getElementById('BUTTON4YES');
  var BUTTON4NO = document.getElementById('BUTTON4NO');
  var BUTTON5 = document.getElementById('BUTTON5');
  var BUTTON6YES = document.getElementById('BUTTON6YES');
  var BUTTON6NO = document.getElementById('BUTTON6NO');
  var elements = document.getElementsByName('checkbox1');
  var elements2 = document.getElementsByName('checkbox2');
  var fukidashi = document.getElementsByClassName('fukidashi');
  var text = document.getElementsByClassName('text');
  var close_css_fukidashi2 = document.getElementById('close_css_fukidashi2');

  if (matchMedia('only screen and (min-width: 480px)').matches) {
    close_css_fukidashi2.classList.add('close_css_fukidashi2');
    close_css_fukidashi2.insertAdjacentHTML('beforebegin', "<label><input type=\"checkbox\" name=\"checkbox2\" value=\"\u5473\u899A\u306E\u7570\u5E38\"><span class=\"text\">\u5473\u899A\u306E\u7570\u5E38</span><span class=\"fukidashi2\" ontouchstart=\u201D\u201D>\u75C7\u72B6\u306E\uFF11\u3064\u3068\u3057\u3066\u5831\u544A\u304C\u76F8\u6B21\u3044\u3067\u3044\u308B\u300C\u5473\u899A\u3084\u55C5\u899A\u306E\u7570\u5E38\u300D\u306B\u3064\u3044\u3066\u306F\u5C02\u9580\u5BB6\u306E\u9593\u3067\u610F\u898B\u304C\u5206\u304B\u308C\u305F\u305F\u3081\u8A18\u8F09\u306F\u898B\u9001\u3089\u308C\u307E\u3057\u305F\u304C\u3001\u539A\u751F\u52B4\u50CD\u7701\u306F\u7570\u5E38\u3092\u611F\u3058\u305F\u5834\u5408\u306B\u306F\u76F8\u8AC7\u3059\u308B\u3088\u3046\u547C\u3073\u304B\u3051\u3066\u3044\u307E\u3059\u3002</span></label>");
  }

  ;
  BUTTON.addEventListener('click', function () {
    page.classList.add('inactive');
    page2.classList.remove('inactive');
  });
  BUTTON2.addEventListener('click', function () {
    for (var a = "", i = elements.length; i--;) {
      if (elements[i].checked) {
        var a = elements[i].value;
        break;
      }
    }

    if (a === "") {
      page2.classList.add('inactive');
      page3.classList.remove('inactive');
    } else {
      window.location.href = "finish.html#consultation";
    }
  });
  BUTTON3YES.addEventListener('click', function () {
    window.location.href = "finish.html#consultation2";
  });
  BUTTON3NO.addEventListener('click', function () {
    page3.classList.add('inactive');
    page4.classList.remove('inactive');
  });
  BUTTON4YES.addEventListener('click', function () {
    page4.classList.add('inactive');
    page6.classList.remove('inactive');
  });
  BUTTON4NO.addEventListener('click', function () {
    page4.classList.add('inactive');
    page5.classList.remove('inactive');
  });
  BUTTON5.addEventListener('click', function () {
    for (var a = 0, i = elements2.length; i--; i > 0) {
      if (elements2[i].checked) {
        a++;
      }
    }

    ;

    if (a >= 2) {
      window.location.href = "finish.html#consultation2";
    } else {
      window.location.href = "finish.html";
    }
  });
  BUTTON6YES.addEventListener('click', function () {
    window.location.href = "finish.html#consultation";
  });
  BUTTON6NO.addEventListener('click', function () {
    window.location.href = "finish.html";
  });
}