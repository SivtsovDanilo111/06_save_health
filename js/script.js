
const arrayOfLoveWishes = [
  "Їжте більше овочів і фруктів – мінімум 5 порцій на день.",
  "Включайте у раціон цільнозернові продукти.",
  "Обмежте споживання цукру та рафінованих вуглеводів.",
  "Вживайте більше білкової їжі – рибу, яйця, бобові, горіхи.",
  "Пийте достатньо води – не менше 1,5-2 літрів на день.",
  "Уникайте надмірного вживання солі.",
  "Відмовтеся від фастфуду та оброблених продуктів.",
  "Їжте маленькими порціями, але регулярно.",
  "Уникайте переїдання, особливо перед сном.",
  "Замінюйте шкідливі жири (трансжири) на корисні (оливкова олія, авокадо).",
  "Регулярно займайтеся спортом – хоча б 30 хвилин на день.",
  "Робіть зарядку вранці, щоб розбудити організм.",
  "Ходіть пішки не менше 10 000 кроків на день.",
  "Використовуйте сходи замість ліфта.",
  "Робіть перерви на розминку під час роботи за комп’ютером.",
  "Практикуйте йогу або розтяжку для гнучкості.",
  "Плавайте – це корисно для всіх груп м’язів.",
  "Ведіть активний спосіб життя навіть у вихідні (велопрогулянки, піші походи).",
  "Робіть дихальні вправи для покращення роботи легенів.",
  "Виконуйте силові тренування хоча б 2 рази на тиждень.",
  "Дотримуйтеся режиму сну – спіть не менше 7-8 годин.",
  "Уникайте стресів – навчіться керувати емоціями.",
  "Практикуйте медитацію або техніки релаксації.",
  "Обмежте час перед екраном, особливо перед сном.",
  "Проводьте більше часу на свіжому повітрі.",
  "Спілкуйтеся з близькими – соціальна підтримка важлива для здоров’я.",
  "Знайдіть хобі, яке приносить радість і розслаблення.",
  "Регулярно проходьте медичні обстеження.",
  "Відмовтеся від шкідливих звичок – куріння, надмірного вживання алкоголю.",
  "Радійте життю і більше смійтеся – це зміцнює імунітет!"
];

const arrayOfImages = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "doctor-isolated-white-background.jpg"
];

let countOfPills = 5;
const countDisplay = document.getElementById('count-of-tablets');
const loveWishesBtn = document.getElementById('btn_love_wishes');
const buyTabletsBtn = document.getElementById('btn-buy-tablets');

countDisplay.innerText = '💊'.repeat(countOfPills);

loveWishesBtn.addEventListener('click', () => {
  let index = Math.floor(Math.random() * arrayOfLoveWishes.length);
  document.getElementById('love_wishes').innerText = arrayOfLoveWishes[index];

  countOfPills--;
  console.log(countOfPills);

  countDisplay.innerText = '💊'.repeat(countOfPills) + "❌".repeat(5 - countOfPills);
  console.log("💊".repeat(countOfPills) + "❌".repeat(5 - countOfPills));

  if (countOfPills === 0) {
      console.log('countOfPills = 0');
      loveWishesBtn.disabled = true; 
  }
});

buyTabletsBtn.addEventListener('click', () => {
  countOfPills = 5;
  countDisplay.innerText = '💊'.repeat(countOfPills);
  loveWishesBtn.disabled = false; 
});

let galeryImage = 1;

document.getElementById("main-image").setAttribute("src", `img/galery/${arrayOfImages[galeryImage-1]}`)

document.getElementById('right-arrow').addEventListener('click', () => {
  galeryImage++;
  console.log(galeryImage);
  if (galeryImage == arrayOfImages.length + 1 ) galeryImage = 1;

  document.getElementById("main-image").setAttribute("src", `img/galery/${arrayOfImages[galeryImage-1]}`)
});

document.getElementById("main-image").setAttribute("src", `img/galery/${arrayOfImages[galeryImage-1]}`)

document.getElementById('left-arrow').addEventListener('click', () => {
  galeryImage--;
  console.log(galeryImage);
  if (galeryImage == 0 ) galeryImage = 4;

  document.getElementById("main-image").setAttribute("src", `img/galery/${arrayOfImages[galeryImage-1]}`)
});

fetch('js/vitamins.json')
  .then(response => response.json())
  .then(data => {

data.forEach((item, index) => {
 

  let divVitamin = document.createElement('div');
  divVitamin.innerText = item.title;
 divVitamin.classList.add('vitamin');



  divVitamin.innerHTML = `  
          <p>${item.id}</p>
          <h3>${item.title}</h3>
          <hr>
          <img src="img/vitamins/${item.photo}" alt="картина для ${item.title}" onerror="this.onerror=null;this.src='img/vitamins/default.png';" >
          <p>${item.description}</p>
          <div>
          <img src="img/schema/${item.schema}" alt ="схема для вітамінів" onerror="this.onerror=null;this.src='img/schema/defaut_schema.png';" >
              <p>${'⭐'.repeat(item.rating)+'🤍'.repeat(5-item.rating)}</p>
              <p>${item.type}</p>
          </div>
         
          
          `
            document.getElementById('p-vitamins').appendChild(divVitamin);
})
 
  })
  .catch(error =>
     console.error('Error fetching data:', error)); //<img src=img/vitamins/vitamin-a.png alt="vitamin" >