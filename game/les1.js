const video = document.getElementById("videoV");
const naarVraag = document.getElementById("naarVraag");
const tekstP = document.getElementById("tekstP");
const container = document.querySelector('.container');
const volgendeIMG = document.getElementById("volgendeIMG");
const vorigeIMG =  document.getElementById("vorigeIMG");
const tekstVraag = document.getElementById("tekstVraag");
const checkbox1T = document.querySelector('label[for="checkbox1"] span');
const checkbox2T = document.querySelector('label[for="checkbox2"] span');
const checkbox3T = document.querySelector('label[for="checkbox3"] span');
const checkbox4T = document.querySelector('label[for="checkbox4"] span');
const checkbox5T = document.querySelector('label[for="checkbox5"] span');
const checkbox6T = document.querySelector('label[for="checkbox6"] span');
const checkbox7T = document.querySelector('label[for="checkbox7"] span');
const checkboxes = document.querySelectorAll('.antwoorden input[type="checkbox"]');
const spans = document.querySelectorAll('.antwoorden span');
const form  = document.querySelector('form');

var gegeven1 = [];
var gegeven2 = [];
var gegeven3 = [];
var gegeven4 = [];
var hoeveelVragen = 0;
var aantalFout = 0;


document.getElementById("naarOverzicht").style.display = "none";
document.getElementById("naarLes1").style.display = "none";
document.querySelector('.rechtsA').style.display = "none";
document.querySelector('.linksA').style.display = "none";
document.getElementById("resultaatP").style.display = "none";
video.addEventListener('ended', () => {
    document.getElementById("tekstP").innerHTML = "Klik op de knop om naar de vragen te gaan.";
    naarVraag.style.visibility = "visible"
    naarVraag.style.display = "unset"
    naarVraag.addEventListener('click', naarVragen);
    // Controleer of de video in volledig scherm is
    if (document.fullscreenElement === video) {
        // Verlaat volledig scherm
        document.exitFullscreen().catch(err => {
          console.error("Kon volledig scherm niet verlaten:", err);
        });
    }
})
async function removeEvent() {
    vorigeIMG.removeEventListener('click', naarVragen);
    naarVraag.removeEventListener('click', naarVragen);
    vorigeIMG.removeEventListener('click', vraag2);
    volgendeIMG.removeEventListener('click', vraag2);
    vorigeIMG.removeEventListener('click', vraag3);
    volgendeIMG.removeEventListener('click', vraag3);
    volgendeIMG.removeEventListener('click', vraag4);
    form.removeEventListener('submit', sub1);
    form.removeEventListener('submit', sub2);
    form.removeEventListener('submit', sub3);
    form.removeEventListener('submit', sub4);
}

function updateGridTemplateRows() {
    if (window.matchMedia("(max-width: 700px)").matches) {
      // Als scherm kleiner is dan 701px
      container.style.gridTemplateRows = "75px auto auto";
    } else {
      // Als scherm groter is dan 700px
      container.style.gridTemplateRows = "75px 75px auto";
    }
  }


async function naarVragen() {
    await removeEvent();
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    document.querySelector('.rechtsA').style.removeProperty("display");
    document.querySelector('.linksA').style.removeProperty("display");
    document.querySelector('.vragen').style.display = "flex";
    
// Update direct bij het laden van de pagina
updateGridTemplateRows();

// Update wanneer het schermformaat verandert
window.addEventListener("resize", updateGridTemplateRows);

    video.style.display = "none";
    naarVraag.style.display = "none";
    tekstP.innerHTML = "Op alle vragen kan je meerdere antwoorden invullen, soms moet je dit doen maar niet altijd!<br> Klik na het beantwoorden van de vraag op NAKIJKEN om te kijken of de vraag goed is.<br> Na de laatste vraag ziet u hoeveel vragen u goed en fout heeft."
    tekstVraag.innerHTML = "1. Als wie doen criminelen zich voor bij phishing?"

    document.querySelector('label[for="checkbox5"]').style.display = "none";
    document.querySelector('label[for="checkbox6"]').style.display = "none";
    document.querySelector('label[for="checkbox7"]').style.display = "none";
    hoeveelVragen = 4;


    if(gegeven1.length === 0){
        checkbox1T.textContent = "Betrouwbare organisatie";
        checkbox2T.textContent = "Bank"; 
        checkbox3T.textContent = "School";
        checkbox4T.textContent = "verkoper";
        
        form.addEventListener('submit', sub1);
        volgendeIMG.addEventListener('click', vraag2)
    }
    else {
        checkbox1T.textContent = "Betrouwbare organisatie";
        checkbox2T.textContent = "Bank"; 
        checkbox3T.textContent = "School";
        checkbox4T.textContent = "verkoper";

        checkbox1T.style.color = "green";
        checkbox2T.style.color = "green";
        checkbox3T.style.color = "red";
        checkbox4T.style.color = "red";

        vorigeIMG.style.visibility = "hidden";
        volgendeIMG.style.visibility = "visible";
        volgendeIMG.addEventListener('click', vraag2)


        checkboxes.forEach(checkbox => {
            // Controleer of de waarde van de checkbox in de array zit
            if (gegeven1.includes(checkbox.value)) {
                checkbox.checked = true; // Selecteer de checkbox
            } 
            else {
                checkbox.checked = false; // Deselecteer de checkbox
            }
        });
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
        });

    }
}
function sub1(e){
    e.preventDefault();

    let antwoorden = ['1', '2'];
    let gegeven = [];
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true) {
            gegeven.push(item.value);
            gegeven1.push(item.value);
        }
    })
    if(gegeven.length === 0){
        alert("kies eerst je antwoorden")
    }
    else{
        volgendeIMG.style.visibility = "visible";

        checkbox1T.style.color = "green";
        checkbox2T.style.color = "green";
        checkbox3T.style.color = "red";
        checkbox4T.style.color = "red";

        
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
        });
        if (JSON.stringify(gegeven) !== JSON.stringify(antwoorden)){aantalFout = aantalFout + 1}
    }
}
async function vraag2() {
    await removeEvent();
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    document.querySelector('label[for="checkbox1"]').style.display = "";
    document.querySelector('label[for="checkbox2"]').style.display = "";
    document.querySelector('label[for="checkbox3"]').style.display = "";
    document.querySelector('label[for="checkbox4"]').style.display = "";
    document.querySelector('label[for="checkbox5"]').style.display = "";
    document.querySelector('label[for="checkbox6"]').style.display = "";
    document.querySelector('label[for="checkbox7"]').style.display = "";


    tekstVraag.innerHTML = "2. Welke gegevens willen criminelen van je hebben?";
    checkbox1T.textContent = "Telefoonnummer";
    checkbox2T.textContent = "Lievelingskleur"; 
    checkbox3T.textContent = "adres";
    checkbox4T.textContent = "wachtwoord";
    checkbox5T.textContent = "Naam";
    checkbox6T.textContent = "Kleur ogen";
    checkbox7T.textContent = "Lengte";
    
    if(gegeven2.length === 0){
        volgendeIMG.style.visibility = "hidden";
        vorigeIMG.style.visibility = "visible";
        vorigeIMG.addEventListener('click', naarVragen)
    
        // Verander de tekstkleur naar zwart
        spans.forEach(span => {
            span.style.color = 'black';
        });
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false;
            checkbox.checked = false;
        });
    
        const form  = document.querySelector('form');
        
        form.addEventListener('submit', sub2)
        volgendeIMG.addEventListener('click', vraag3)
    }
    else{
        checkbox1T.style.color = "green";
        checkbox2T.style.color = "red";
        checkbox3T.style.color = "green";
        checkbox4T.style.color = "green";
        checkbox5T.style.color = "green";
        checkbox6T.style.color = "red";
        checkbox7T.style.color = "red";
        vorigeIMG.style.visibility = "visible";
        volgendeIMG.style.visibility = "visible";
        vorigeIMG.addEventListener('click', naarVragen)
        volgendeIMG.addEventListener('click', vraag3)


        checkboxes.forEach(checkbox => {
            // Controleer of de waarde van de checkbox in de array zit
            if (gegeven2.includes(checkbox.value)) {
                checkbox.checked = true; // Selecteer de checkbox
            } else {
                checkbox.checked = false; // Deselecteer de checkbox
            }
        });
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
        });

    }
}
function sub2(e){
    e.preventDefault();

    let antwoorden = ['1', '3', '4', '5'];
    let gegeven = [];
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true) {
            gegeven.push(item.value);
            gegeven2.push(item.value);
        }
    })
    if(gegeven.length === 0){
        alert("kies eerst je antwoorden")
    }
    else{
        volgendeIMG.style.visibility = "visible";
        vorigeIMG.style.visibility = "visible";

        checkbox1T.style.color = "green";
        checkbox2T.style.color = "red";
        checkbox3T.style.color = "green";
        checkbox4T.style.color = "green";
        checkbox5T.style.color = "green";
        checkbox6T.style.color = "red";
        checkbox7T.style.color = "red";

        const checkboxes = document.querySelectorAll('.antwoorden input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
        });
        if (JSON.stringify(gegeven) !== JSON.stringify(antwoorden)){aantalFout = aantalFout + 1}
    }
}
async function vraag3(){
    await removeEvent();
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    document.querySelector('label[for="checkbox3"]').style.display = "none";
    document.querySelector('label[for="checkbox4"]').style.display = "none";
    document.querySelector('label[for="checkbox5"]').style.display = "none";
    document.querySelector('label[for="checkbox6"]').style.display = "none";
    document.querySelector('label[for="checkbox7"]').style.display = "none";


    tekstVraag.innerHTML = "3.	Is phishing een makkelijke manier van oplichten voor criminelen?";
    checkbox1T.textContent = "Ja";
    checkbox2T.textContent = "Nee"; 

    
    if(gegeven3.length === 0){
        volgendeIMG.style.visibility = "hidden";
        vorigeIMG.style.visibility = "visible";
        vorigeIMG.addEventListener('click', vraag2)
    
        // Verander de tekstkleur naar zwart
        spans.forEach(span => {
            span.style.color = 'black';
        });
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false;
            checkbox.checked = false;
        });
    
        const form  = document.querySelector('form');
        
        form.addEventListener('submit', sub3)
        vorigeIMG.addEventListener('click', vraag2)
        volgendeIMG.addEventListener('click', vraag4)
    }
    else{
        checkbox1T.style.color = "green";
        checkbox2T.style.color = "red";
        vorigeIMG.style.visibility = "visible";
        volgendeIMG.style.visibility = "visible";
        vorigeIMG.addEventListener('click', vraag2)
        volgendeIMG.addEventListener('click', vraag4)


        checkboxes.forEach(checkbox => {
            // Controleer of de waarde van de checkbox in de array zit
            if (gegeven3.includes(checkbox.value)) {
                checkbox.checked = true; // Selecteer de checkbox
            } else {
                checkbox.checked = false; // Deselecteer de checkbox
            }
        });
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
        });

    }
}
function sub3(e){
    e.preventDefault();

    let antwoorden = ['1'];
    let gegeven = [];
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true) {
            gegeven.push(item.value);
            gegeven3.push(item.value);
        }
    })
    if(gegeven.length === 0){
        alert("kies eerst je antwoorden")
    }
    else{
        volgendeIMG.style.visibility = "visible";
        vorigeIMG.style.visibility = "visible";

        checkbox1T.style.color = "green";
        checkbox2T.style.color = "red";
        const checkboxes = document.querySelectorAll('.antwoorden input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
        });
        if (JSON.stringify(gegeven) !== JSON.stringify(antwoorden)){aantalFout = aantalFout + 1}
    }
}
async function vraag4(){
     await removeEvent();
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    document.querySelector('label[for="checkbox3"]').style.display = "";
    document.querySelector('label[for="checkbox4"]').style.display = "";
    document.querySelector('label[for="checkbox5"]').style.display = "none";
    document.querySelector('label[for="checkbox6"]').style.display = "none";
    document.querySelector('label[for="checkbox7"]').style.display = "none";


    tekstVraag.innerHTML = "4.	Waar kom je waarschijnlijk phishing tegen?";
    checkbox1T.textContent = "E-mails";
    checkbox2T.textContent = "Sms'jes"; 
    checkbox3T.textContent = "Kranten";
    checkbox4T.textContent = "Online advertenties"

    
    if(gegeven4.length === 0){
        volgendeIMG.style.visibility = "hidden";
        vorigeIMG.style.visibility = "visible";
        vorigeIMG.addEventListener('click', vraag3)
    
        // Verander de tekstkleur naar zwart
        spans.forEach(span => {
            span.style.color = 'black';
        });
        checkboxes.forEach(checkbox => {
            checkbox.disabled = false;
            checkbox.checked = false;
        });
    
        const form  = document.querySelector('form');

        form.addEventListener('submit', sub4)
        volgendeIMG.addEventListener('click', resultaat)
        vorigeIMG.addEventListener('click', vraag3)
    }
    else{
        checkbox1T.style.color = "green";
        checkbox2T.style.color = "green";
        checkbox3T.style.color = "red";
        checkbox4T.style.color = "green";
        vorigeIMG.style.visibility = "visible";
        volgendeIMG.style.visibility = "visible";
        vorigeIMG.addEventListener('click', vraag3)
        volgendeIMG.addEventListener('click', resultaat)


        checkboxes.forEach(checkbox => {
            // Controleer of de waarde van de checkbox in de array zit
            if (gegeven4.includes(checkbox.value)) {
                checkbox.checked = true; // Selecteer de checkbox
            } else {
                checkbox.checked = false; // Deselecteer de checkbox
            }
        });
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
        });

    }
}
function sub4(e){
    e.preventDefault();

    let antwoorden = ['1', '2', '4'];
    let gegeven = [];
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true) {
            gegeven.push(item.value);
            gegeven4.push(item.value);
        }
    })
    if(gegeven.length === 0){
        alert("kies eerst je antwoorden")
    }
    else{
        volgendeIMG.style.visibility = "visible";
        vorigeIMG.style.visibility = "visible";

        checkbox1T.style.color = "green";
        checkbox2T.style.color = "green";
        checkbox3T.style.color = "red";
        checkbox4T.style.color = "green";
        const checkboxes = document.querySelectorAll('.antwoorden input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.disabled = true;
        });
        if (JSON.stringify(gegeven) !== JSON.stringify(antwoorden)){aantalFout = aantalFout + 1}
    }
}
async function resultaat() {
    await removeEvent();
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    document.querySelector('label[for="checkbox1"]').style.display = "none";
    document.querySelector('label[for="checkbox2"]').style.display = "none";
    document.querySelector('label[for="checkbox3"]').style.display = "none";
    document.querySelector('label[for="checkbox4"]').style.display = "none";
    document.querySelector('label[for="checkbox5"]').style.display = "none";
    document.querySelector('label[for="checkbox6"]').style.display = "none";
    document.querySelector('label[for="checkbox7"]').style.display = "none";

    tekstVraag.innerHTML = "U heeft " + aantalFout + " van de 4 vragen fout.";
    document.getElementById("resultaatP").style.removeProperty("display");
    document.getElementById("naarOverzicht").style.removeProperty("display");
    document.getElementById("naarLes1").style.removeProperty("display");

    volgendeIMG.style.visibility = "hidden";
    vorigeIMG.addEventListener('click', vraag4)
    document.querySelector('button[type="submit"]').style.display = "none"
}
console.log(gegeven1);
console.log(gegeven2);
console.log(gegeven3);
console.log(gegeven4);
