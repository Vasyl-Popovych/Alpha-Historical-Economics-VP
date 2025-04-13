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
    
    // Плавний скрол догори
    function scrollToTop1() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    
    // Плавний скрол догори
    function scrollToTop2() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  
  
    
  
  // Функція для обробки зміни вибору країни
  document.getElementById('Cuntry').addEventListener('change', function() {
      var url = this.value;
      if (url) { // Якщо вибрана країна
          window.location.href = url; // Перенаправлення на обраний сайт
      }
    });
    
    // При завантаженні сторінки
    document.addEventListener("DOMContentLoaded", () => {
      // Отримуємо вибрану мову з localStorage або встановлюємо за замовчуванням
      const selectedLanguage = localStorage.getItem("selectedLanguage") || "uk";
    
      // Встановлюємо вибрану мову у випадаючому меню
      const languageSwitcher = document.getElementById("languageSwitcher");
      if (languageSwitcher) {
          languageSwitcher.value = selectedLanguage;
      }
    
      // Оновлюємо контент на сторінці відповідно до вибраної мови
      updateLanguage(selectedLanguage);
    });
    
    // Обробка зміни мови
    document.getElementById("languageSwitcher").addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
    
      // Зберігаємо вибрану мову в localStorage
      localStorage.setItem("selectedLanguage", selectedLanguage);
    
      // Оновлюємо контент сторінки відповідно до вибраної мови
      updateLanguage(selectedLanguage);
    });
    
    // Функція для оновлення текстів на сторінці
    function updateLanguage(language) {
      const translations = {
          uk: {
              contryTittle: "Білорусь",
              aboutContry: "Про країну",
              aboutText: `
                  Білорусь — незалежна країна, розташована в Східній Європі. Вона межує з Росією на сході, Україною на півдні, Польщею на заході, а також Литвою і Латвією на півночі. Столиця країни, Мінськ, є важливим політичним, культурним та економічним центром Білорусі.
              `,
              economy: "Економіка",
              footerText: `
                  Країна — це географічно окреслена територія, що має політичні, культурні та соціальні характеристики, а також певну ступінь самоврядування або влади.
              `
          },
          en: {
              contryTittle: "Belarus",
              aboutContry: "About the Country",
              aboutText: `
                  Belarus is an independent country located in Eastern Europe. It borders Russia to the east, Ukraine to the south, Poland to the west, and Lithuania and Latvia to the north. The capital of the country, Minsk, is an important political, cultural and economic center of Belarus.
              `,
              economy: "Economy",
              footerText: `
                  A country is a geographically defined territory with political, cultural, and social characteristics, as well as a certain degree of self-governance or power.
              `
          }
      };
    
      // Оновлюємо текстові елементи сторінки
      document.getElementById("contryTittle").textContent = translations[language].contryTittle;
      document.getElementById("aboutContry").textContent = translations[language].aboutContry;
      document.querySelector(".r3 p").textContent = translations[language].aboutText;
      document.getElementById("Economy").textContent = translations[language].economy;
      document.querySelector("footer .lo p:first-of-type").textContent = translations[language].footerText;
    }