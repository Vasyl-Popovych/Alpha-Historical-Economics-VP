function toggleTopButtons33(){
  const Br1 = document.getElementById('top')
  const Br2 = document.getElementById('top1')
  const Br3 = document.getElementById('top2')
  const Br4 = document.getElementById('top3')
  if(window.scrollY > 300) {
    Br1.style.display = 'block';
    Br2.style.display = 'block';
    
    Br3.style.display = 'block';
    Br4.style.display = 'block';
  }
  else {
    Br1.style.display = 'none';
    Br2.style.display = 'none';

    Br3.style.display = 'none';
    Br4.style.display = 'none';
  }
}
// Викликаємо одразу після завантаження DOM
document.addEventListener("DOMContentLoaded", toggleTopButtons33);
  
// Викликаємо при скролі
window.addEventListener("scroll", toggleTopButtons33);

 function scrollToTop1() {
  window.scrollTo({top: 0, behavior: "smooth"})
 }

 function scrollToTop2() {
  window.scrollTo({top: 0, behavior: "smooth"})
 }



 
// Функція для обробки зміни вибору країни
document.getElementById('Cuntry').addEventListener('change', function() {
  var url = this.value;
  if (url) { // Якщо вибрана країна
      window.location.href = url; // Перенаправлення на обрану країну
  }
});

function changeCountry() { 
  var select = document.getElementById('Country');
  var selectedValue = select.a=value;

  if (selectedValue) {
    window.location.href = selectedValue;
  }
}


// Об'єкт з перекладами
const translations = {
  en: {
    aboutContry: 'About the country',
    HistoryCulture: 'History and culture',
  Economy: 'Economy',
  selectCountry: 'Select Country',
contryTittle: 'England',
foterContry: 'Economy', 
foterContry1: 'History'

  },

  uk: {
    aboutContry: 'Про країну',
    HistoryCulture: 'Історія і культура',
  Economy: 'Економіка',
  selectCountry: 'Вибір країни',
contryTittle: 'Англія',
foterContry: 'Еконо́міка',
foterContry1: 'Історія'
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const hiddenTitle = document.getElementById("hiddenTitle");
  if (hiddenTitle) {
      const observer = new MutationObserver(() => {
          document.title = hiddenTitle.textContent.trim();
      });
      observer.observe(hiddenTitle, { childList: true, subtree: true });
  }
});