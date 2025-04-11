function toggleTopButtons33(){
  const Br1 = document.getElementById('top')
  const Br2 = document.getElementById('top1')
  if(window.scrollY > 300) {
    Br1.style.display = 'block';
    Br2.style.display = 'block';
  }
  else {
    Br1.style.display = 'none';
    Br2.style.display = 'none';
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





function changeCountry() { 
  var select = document.getElementById('Country');
  var selectedValue = select.a=value;

  if (selectedValue) {
    window.location.href = selectedValue;
  }
}




const translations = {
    en: {
        title: 'About the country',
        sectionTitle1: 'England',
        sectionTitle2: 'Some quick example text to build on the card title and make up the bulk of the   cards   content',
        sectionTitle3: 'Go Shoping',
        sectionTitle33: 'Economy',
        sectionDesc11: 'England',
    },
    uk: {
        title: 'Про країну',
        sectionTitle13: 'Англія',
        sectionTitle23: 'Some quick example text to build on the card title and make up the bulk of the   cards   content',
        sectionTitle33: 'Ходіть за покупками',
      sectionTitle31: 'Економіка',
      sectionDesc131: 'Англія'
       
    }
  };
  
  // Обробник події для вибору мови
  document.getElementById("languageSelector").addEventListener("change", function() {
    const selectedLanguage = this.value;
  
    // Оновлюємо тексти всіх елементів на сторінці
    document.getElementById("title").innerText = translations[selectedLanguage].title;
    document.getElementById("sectionTitle1").innerText = translations[selectedLanguage].sectionTitle1;
    document.getElementById("sectionTitle2").innerText = translations[selectedLanguage].sectionTitle2;
    document.getElementById("sectionTitle3").innerText = translations[selectedLanguage].sectionTitle3;
    document.getElementById("sectionDesc1").innerText = translations[selectedLanguage].sectionDesc1;
    document.getElementById("sectionDesc2").innerText = translations[selectedLanguage].sectionDesc2;
    document.getElementById("sectionDesc3").innerText = translations[selectedLanguage].sectionDesc3;
  });