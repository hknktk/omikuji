document.addEventListener('DOMContentLoaded',function(){
  document.getElementById("push").addEventListener("click",function(){
    this.classList.toggle("on");
    document.getElementById("bx").classList.toggle("active");
    document.getElementById("more").classList.toggle("on");
    document.getElementById("result").classList.toggle("active");
    document.getElementById("word").classList.toggle("active");
    document.getElementById("title").classList.toggle("active");

  })

function lucky () {
  var fortune = document.getElementById("result");
  const n =Math.random();
   if (n<0.10){
    fortune.textContent = '大吉';  
   } else if (n<0.25) {
    fortune.textContent = '中吉';
   } else if (n<0.5){
    fortune.textContent ='吉'; 
   } else if (n<0.6){
    fortune.textContent ='末吉'; 
   } else if (n<0.75){
    fortune.textContent ='小吉'; 
   } else if (n<0.9){
    fortune.textContent ='凶'; 
   }else {
    fortune.textContent ='大凶'; 
   };
};

 lucky();

  function comment () {
    var sentence = document.getElementById("word");
    var fortune = document.getElementById("result");
     if (fortune.textContent === '大吉'){
       sentence.textContent = 'おめでとうございます。すべてがあなたの思い通りに。あまり考えすぎず直感に身を任せた行動もあなたを良い結果に導くはず！';
           } else if (fortune.textContent === '中吉') {
      sentence.textContent = 'おめでとうございます。いつもよりちょっとリスクを冒して行動してもきっとうまくいくはず。運を味方に思い切った行動を！';
     } else if (fortune.textContent ==='吉' ){
      sentence.textContent = 'おめでとうございます。日々の努力が報われる1日。ポジティブな気持ちを忘れずに過ごしていこう！';
     } else if (fortune.textContent ==='末吉'){
      sentence.textContent = 'おめでとうございます。1日の目標を今すぐ立て、実行するための努力をすればさらに運勢アップ。目標達成のためのアプローチを工夫してみよう！';
     } else if (fortune.textContent ==='小吉'){
      sentence.textContent = 'おめでとうございます。些細なことにも気を配ることができればさらに運勢アップ。当たり前の日常に対しても感謝の気持ちを忘れずに！';
     } else if (fortune.textContent ==='凶'){
      sentence.textContent = '落ち込む必要は一切ありません。すべてはあなたの行動次第！1つ1つの行動に責任感をもって取り組むことができればきっとうまくいく！';
     }else  if (fortune.textContent ==='大凶') {
      sentence.textContent = 'がんばりすぎているあなたは知らず知らずのうちに疲労が蓄積しています。休むのも仕事。好きな音楽を聴いてリフレッシュをすれば1日の行動の質がアップするはず！';
     }
  };
    comment ();






  document.getElementById("more").addEventListener("click",function(){
    this.classList.toggle("on");
    document.getElementById("bx").classList.toggle("active");
    document.getElementById("push").classList.toggle("on");
    document.getElementById("result").classList.toggle("active");
     lucky();
     document.getElementById("title").classList.toggle("active");
     document.getElementById("word").classList.toggle("active");
     comment();

  })
})