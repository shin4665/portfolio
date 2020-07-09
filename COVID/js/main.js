'use strict'

{
  const page = document.getElementById('page');
  const page2 = document.getElementById('page2');
  const page3 = document.getElementById('page3');
  const page4 = document.getElementById('page4');
  const page5 = document.getElementById('page5');
  const BUTTON = document.getElementById('BUTTON');
  const BUTTON2 = document.getElementById('BUTTON2');
  const BUTTON3YES = document.getElementById('BUTTON3YES');
  const BUTTON3NO = document.getElementById('BUTTON3NO');
  const BUTTON4YES = document.getElementById('BUTTON4YES');
  const BUTTON4NO = document.getElementById('BUTTON4NO');
  const BUTTON5 = document.getElementById('BUTTON5');
  const BUTTON6YES = document.getElementById('BUTTON6YES');
  const BUTTON6NO = document.getElementById('BUTTON6NO');
  var elements = document.getElementsByName('checkbox1');
  var elements2 = document.getElementsByName('checkbox2');
  var fukidashi = document.getElementsByClassName('fukidashi');
  var text = document.getElementsByClassName('text');
  var close_css_fukidashi2 = document.getElementById('close_css_fukidashi2');

  if (matchMedia('only screen and (min-width: 480px)').matches) {
    close_css_fukidashi2.classList.add('close_css_fukidashi2');
    close_css_fukidashi2.insertAdjacentHTML('beforebegin',`<label><input type="checkbox" name="checkbox2" value="味覚の異常"><span class="text">味覚の異常</span><span class="fukidashi2" ontouchstart=””>症状の１つとして報告が相次いでいる「味覚や嗅覚の異常」については専門家の間で意見が分かれたため記載は見送られましたが、厚生労働省は異常を感じた場合には相談するよう呼びかけています。</span></label>`);
  };

  BUTTON.addEventListener('click', () => {
    page.classList.add('inactive');
    page2.classList.remove('inactive');
  }
);

BUTTON2.addEventListener('click', () => {
  for ( var a="", i=elements.length; i--; ) {
    if ( elements[i].checked ) {
      var a = elements[i].value ;
      break ;
    }
  }

  if(a === "") {
    page2.classList.add('inactive');
    page3.classList.remove('inactive');
  } else {
    window.location.href = "finish.html#consultation";
  }
}
);

BUTTON3YES.addEventListener('click', () => {
  window.location.href = "finish.html#consultation2";
}
);

BUTTON3NO.addEventListener('click', () => {
  page3.classList.add('inactive');
  page4.classList.remove('inactive');
}
);

BUTTON4YES.addEventListener('click', () => {
  page4.classList.add('inactive');
  page6.classList.remove('inactive');
}
);

BUTTON4NO.addEventListener('click', () => {
  page4.classList.add('inactive');
  page5.classList.remove('inactive');
}
);

BUTTON5.addEventListener('click', () => {
  for ( var a =0, i=elements2.length; i--; i>0) {
    if ( elements2[i].checked ) {
      a++;
    }
  };

  if(a >= 2) {
    window.location.href = "finish.html#consultation2";
  } else {
    window.location.href = "finish.html";
  }
}
);

BUTTON6YES.addEventListener('click', () => {
  window.location.href = "finish.html#consultation"
}
);

BUTTON6NO.addEventListener('click', () => {
  window.location.href = "finish.html"
}
);

}
