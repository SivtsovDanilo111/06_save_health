const arrayOfLoveWishes = [ ];
    
     let countOfPills = 5;
    document.getElementById('count-of-tablets').innerText='💊'.repeat(countOfPills)

    document.getElementById('btn_love_wishes').addEventListener('click', ()=> {
    let index = Math.floor(Math.random() * arrayOfLoveWishes.length);
    document.getElementById('love_wishes').innerText = arrayOfLoveWishes[index];
    
 countOfPills--
   console.log(countOfPills);

   document.getElementById('count-of-tablets').innerText = '💊'.repeat(countOfPills) + "❌".repeat(5-countOfPills)
   console.log("💊".repeat(countOfPills) + "❌".repeat(5-countOfPills))

   if (countOfPills == 0) {
    console.log('countOfPills = 0') 
  document.getElementById('btn_love_wishes').style.display = 'none'
   }
 })

 document.getElementById('btn-buy-tablets').addEventListener('click', ()=> { 
countOfPills = 5
document.getElementById('count-of-tablets').innerText='💊'.repeat(countOfPills)
document.getElementById('btn_love_wishes').style.display = 'inline-block'
 } )