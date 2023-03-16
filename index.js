'use strict';

const question = document.querySelectorAll('.question')
const answer = document.querySelectorAll('.content-answer')
const hidden = document.querySelector('.hidden')

for(let i=0; i < question.length; i++) {
 question[i].addEventListener('click', function() {
 //  answer[i].classList.toggle('hidden')
 //  // question[i].style.fontSize ='1.2em'
 //  if(question[i].style.fontSize ='1rem') {
 //   question[i].style.fontSize ='2rem'
 //  }else if (question[i].style.fontSize ='2rem') {
 //   question[i].style.fontSize ='1rem'
 //  }
 // })
  if(answer[i].classList.contains('hidden')) {
   answer[i].classList.remove('hidden');
   question[i].style.fontSize ='1.3rem';
   question[i].style.color ='black'
   
  } else {
   answer[i].classList.add('hidden')
   question[i].style.fontSize ='1rem'
   question[i].style.color ='grey'
  }
 })
}