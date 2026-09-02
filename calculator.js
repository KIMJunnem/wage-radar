
const won=n=>Math.round(n).toLocaleString('ko-KR')+'원';
function calc(){
 const hourly=Number(document.querySelector('#hourly').value||0);
 const regular=Number(document.querySelector('#regular').value||0);
 const overtime=Number(document.querySelector('#overtime').value||0);
 const night=Number(document.querySelector('#night').value||0);
 const holiday=Number(document.querySelector('#holiday').value||0);
 const five=document.querySelector('#five').value==='yes';
 let total=hourly*regular;
 if(five){ total += hourly*1.5*overtime + hourly*.5*night + hourly*1.5*holiday; }
 else { total += hourly*overtime + hourly*holiday; }
 document.querySelector('#gross').textContent=won(total);
 document.querySelector('#detail').textContent=five
  ? '5인 이상 가정: 연장 1.5배, 야간은 기본근로와 겹치는 시간에 0.5배 추가, 휴일 8시간 이내 1.5배를 단순 적용한 참고값입니다.'
  : '5인 미만 가정의 단순 참고값입니다. 실제 법 적용과 계약조건에 따라 달라질 수 있습니다.';
}
document.addEventListener('input',e=>{if(e.target.closest('.calc'))calc()});window.addEventListener('DOMContentLoaded',calc);
