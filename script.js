
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

const arreyOfObjects = [
  {
    id:1,
    title: "Вітамін А",
    photo: "",
    description: "Вітамін A – це жиророзчинний вітамін, необхідний для здоров’я зору, імунної системи та росту клітин. Він міститься у двох формах: ретинол (у продуктах тваринного походження) та каротиноїди (у рослинних джерелах, таких як морква, гарбуз, шпинат). Дефіцит вітаміну A може спричинити проблеми із зором, сухість шкіри та зниження імунітету. ",
    rating: "5",
    type: "",
  },
  {
    id:2,
    title: "Вітамін С",
    photo: "",
    description: "Вітамін C – водорозчинний вітамін, що діє як потужний антиоксидант, зміцнює імунітет, сприяє загоєнню ран і засвоєнню заліза. Міститься у цитрусових, ягодах, ківі, перці та броколі. Дефіцит може викликати слабкість, кровоточивість ясен і повільне загоєння ран.",
    rating: "4",
    type: "",
  },
  {
    id:3,
    title: "Вітамін D",
    photo: "",
    description: "Вітамін D – жиророзчинний вітамін, необхідний для здоров'я кісток та зубів, оскільки сприяє засвоєнню кальцію. Організм виробляє його під впливом сонячного світла, а також отримує з риби, яєць і молочних продуктів. Недостатність вітаміну D може призвести до ослаблення імунітету та проблем з кістками.",
    rating: "5",
    type: "",
  },
  {
    id:4,
    title: "Вітамін B3",
    photo: "",
    description: "Вітамін B3 (ніацин) – водорозчинний вітамін, що підтримує енергетичний обмін, здоров’я шкіри, нервової системи та серця. Його джерела – м’ясо, риба, горіхи, злаки та бобові. Дефіцит може спричинити втому, депресію та захворювання пелагру.",
    rating: "3",
    type: "",
  },
  {
    id:5,
    title: "Омега-3",
    photo: "",
    description: "Омега-3 – це незамінні жирні кислоти, необхідні для здоров’я серця, мозку та суглобів. Вони зменшують запалення, підтримують роботу нервової системи та покращують стан шкіри. Основні джерела – жирна риба (лосось, оселедець, скумбрія), лляне насіння, чіа та горіхи. Дефіцит може призводити до підвищеного ризику серцевих захворювань і порушень когнітивних функцій.",
    rating: "4",
    type: "",
  },
  {
    id:6,
    title: "Magnesium",
    photo: "",
    description: "Магній – це важливий мінерал, що підтримує роботу м’язів, нервової системи та серця, а також сприяє зміцненню кісток. Він допомагає зменшити стрес, покращує сон і нормалізує рівень цукру в крові. Магній міститься у горіхах, насінні, зелених овочах, бананах і темному шоколаді. Недостатність магнію може викликати судоми, втому та дратівливість.",
    rating: "3",
    type: "",
  },
]
// console.log(arreyOfObjects);
arreyOfObjects.forEach((item) => {
 // console.log(item);

  let divVitamin = document.createElement('div');
  divVitamin.innerText = item.title;
  divVitamin.classList.add('vitamins');

  document.getElementById('p-vitamins').appendChild(divVitamin);

  divVitamin.innerHTML = `  

          <h3>${item.title}</h3>
          <hr>
          <img src="img/vitamins/vitamin-a.png">
          <p>${item.description}</p>
          <span>${'⭐'.repeat(item.rating)+'🤍'.repeat(5-item.rating)}</span>
          <p>type</p>
          <span>${item.id}</span>\
          `
})
