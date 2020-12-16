import './styles.scss';
import { getTranslatedText } from '../store/languages/Translations_function';

// https://codepen.io/Marczeli/pen/PoGbwzQ?editors=0011

// ten azync v tej fn chybe NIE potrzebny
let main = async (t: string) => {
  // Background
  let bg = document.createElement('div');
  bg.classList.add('popup-bg');
  // Container  
  let parent = document.createElement('div');
  parent.classList.add('popup-container');
  // Text
  let text = document.createElement('p');
  text.innerHTML = t;
  text.classList.add('popup-text')
  // Ok button
  let btnOk = document.createElement('button');
  btnOk.innerHTML = 'OK!';
  btnOk.classList.add('btn', 'popup-btn-left')
  // Cancel button
  let btnCancel = document.createElement('button');
  btnCancel.innerHTML = getTranslatedText('Cancel');
  btnCancel.classList.add('btn', 'popup-btn-right')

  parent.append(text)
  parent.append(btnOk);
  parent.append(btnCancel);

  bg.append(parent)

  document.querySelector('.mega_container').appendChild(bg);

  var result = await new Promise(function(resolve) {
    btnOk.addEventListener(
      'click',
      function() {
        resolve(true);
        this.parentElement.parentElement.remove();
      },
      { once: true }
    );

    btnCancel.addEventListener(
      'click',
      function() {
        resolve(false);
        this.parentElement.parentElement.remove();
      },
      { once: true }
    );
  });
  
  return result;
};

export const popup = async (text: string) => {
  let outcome = await main(text);

  if (outcome) {
    return true;
  } else {
    return false;
  }
};

export const confirm = (text: string) => {
    let div = document.createElement('div');
    div.classList.add('confirm-popup')
    div.addEventListener('click', function(){
        div.remove();
    })

    let p = document.createElement('p');
    p.innerHTML = text;
    div.append(p)

    document.body.append(div);

    setTimeout(() => {
        div.classList.add('swing-in')
    },0)

    setTimeout(() => {
        div.classList.add('swing-back')
        setTimeout(()=>{
            div.remove();
        }, 1000)
    }, 2000)
}




