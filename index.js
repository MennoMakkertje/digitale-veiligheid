document.getElementById("SAMENVATTINGbtn").addEventListener("click", function() {
  // Bepaal het doel-element
  const doelSectie =  document.querySelector('.samenvatting');

  // Bereken de positie van het element, minus een offset voor de sticky header (bijv. 80px)
  const offset = doelSectie.getBoundingClientRect().top + window.pageYOffset - 80;

  // Scroll naar de berekende positie
  window.scrollTo({
    top: offset,
    behavior: "smooth"
  });
});

document.getElementById("PROJECTbtn").addEventListener("click", function() {
    // Bepaal het doel-element
    const doelSectie =  document.querySelector('.vraagstuk');
  
    // Bereken de positie van het element, minus een offset voor de sticky header (bijv. 80px)
    const offset = doelSectie.getBoundingClientRect().top + window.pageYOffset - 80;
  
    // Scroll naar de berekende positie
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });

  document.getElementById("PVAbtn").addEventListener("click", function() {
    // Bepaal het doel-element
    const doelSectie =  document.querySelector('.PVA');
  
    // Bereken de positie van het element, minus een offset voor de sticky header (bijv. 80px)
    const offset = doelSectie.getBoundingClientRect().top + window.pageYOffset - 80;
  
    // Scroll naar de berekende positie
    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  });