document.getElementById("exp1").addEventListener("click", function() {
    // Bepaal het doel-element
    const doelSectie =  document.querySelector('.Daniël');
  
    // Bereken de positie van het element, minus een offset voor de sticky header (bijv. 80px)
    const offset = doelSectie.getBoundingClientRect().top + window.pageYOffset - 80;
  
    // Scroll naar de berekende positie
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });