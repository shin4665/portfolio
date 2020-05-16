'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.random();
    if(n < 0.25 ){
      btn.textContent ='大吉';
    } else if (n < 0.8){
      btn.textContent ='吉';
    } else {
      btn.textContent ='凶'
    }
  });
}
