const video = document.getElementById("videoV");
const naarVraag = document.getElementById("naarVraag");



video.addEventListener('ended', () => {
    document.getElementById("tekstP").innerHTML = "Klik op de knop om naar het lessenoverzicht te gaan.";
    naarVraag.style.visibility = "visible"
    naarVraag.addEventListener('click', naarOverzicht);
    // Controleer of de video in volledig scherm is
    if (document.fullscreenElement === video) {
        // Verlaat volledig scherm
        document.exitFullscreen().catch(err => {
          console.error("Kon volledig scherm niet verlaten:", err);
        });
    }
})

function naarOverzicht(){
    window.location.href = "overzicht.html";
}