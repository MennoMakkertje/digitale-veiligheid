const sideCheckbox = document.getElementById("tegel-active");

document.getElementById("btn1").addEventListener("click", function() {
  sideCheckbox.checked = false;
    // Bepaal het doel-element
    const doelSectie =  document.querySelector('.inleiding');
  
    // Bereken de positie van het element, minus een offset voor de sticky header (bijv. 80px)
    const offset = doelSectie.getBoundingClientRect().top + window.pageYOffset - 80;
  
    // Scroll naar de berekende positie
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });

  document.getElementById("btn2").addEventListener("click", function() {
    sideCheckbox.checked = false;
    // Bepaal het doel-element
    const doelSectie =  document.querySelector('.lesmethode');
  
    // Bereken de positie van het element, minus een offset voor de sticky header (bijv. 80px)
    const offset = doelSectie.getBoundingClientRect().top + window.pageYOffset - 80;
  
    // Scroll naar de berekende positie
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });

  document.getElementById("btn3").addEventListener("click", function() {
    sideCheckbox.checked = false;
    // Bepaal het doel-element
    const doelSectie =  document.querySelector('.Eindspel');
  
    // Bereken de positie van het element, minus een offset voor de sticky header (bijv. 80px)
    const offset = doelSectie.getBoundingClientRect().top + window.pageYOffset - 80;
  
    // Scroll naar de berekende positie
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });

  document.getElementById("btn4").addEventListener("click", function() {
    sideCheckbox.checked = false;
    // Bepaal het doel-element
    const doelSectie =  document.querySelector('.Website');
  
    // Bereken de positie van het element, minus een offset voor de sticky header (bijv. 80px)
    const offset = doelSectie.getBoundingClientRect().top + window.pageYOffset - 80;
  
    // Scroll naar de berekende positie
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });

  document.getElementById("btn1A").addEventListener("click", function() {
    sideCheckbox.checked = false;
    // Bepaal het doel-element
    const doelSectie = document.querySelector('.inleiding');
  
    // Bereken de positie van het element, minus een offset voor de sticky header (bijv. 80px)
    const offset = doelSectie.getBoundingClientRect().top + window.pageYOffset - 80;
  
    // Scroll naar de berekende positie
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });
  
  document.getElementById("btn2A").addEventListener("click", function() {
    sideCheckbox.checked = false;
    // Bepaal het doel-element
    const doelSectie = document.querySelector('.lesmethode');
  
    // Bereken de positie van het element, minus een offset voor de sticky header (bijv. 80px)
    const offset = doelSectie.getBoundingClientRect().top + window.pageYOffset - 80;
  
    // Scroll naar de berekende positie
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });
  
  document.getElementById("btn3A").addEventListener("click", function() {
    sideCheckbox.checked = false;
    // Bepaal het doel-element
    const doelSectie = document.querySelector('.Eindspel');
  
    // Bereken de positie van het element, minus een offset voor de sticky header (bijv. 80px)
    const offset = doelSectie.getBoundingClientRect().top + window.pageYOffset - 80;
  
    // Scroll naar de berekende positie
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });
  
  document.getElementById("btn4A").addEventListener("click", function() {
    sideCheckbox.checked = false;
    // Bepaal het doel-element
    const doelSectie = document.querySelector('.Website');
  
    // Bereken de positie van het element, minus een offset voor de sticky header (bijv. 80px)
    const offset = doelSectie.getBoundingClientRect().top + window.pageYOffset - 80;
  
    // Scroll naar de berekende positie
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });
  