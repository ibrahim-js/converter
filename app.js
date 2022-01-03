document.addEventListener("DOMContentLoaded", () => {
    const cours_de_change = document.getElementById("change-input");
    const dh = document.getElementById("dh");
    const eur = document.getElementById("eur");
    const convert_btn = document.getElementById("convert");

    function est_correct() {
        if(Number(cours_de_change.value) && (Number(dh.value) || Number(eur.value)) && !(Number(dh.value) && Number(eur.value))) {
            return true;
        };

        return false;
    };

    function convert() {
        if(!est_correct()) {
            return alert("Veuillez bien remplir tous les champs s'il vous plaît!");
        };

        if(Number(dh.value)) {
            eur.value = Number(dh.value) / Number(cours_de_change.value);
        } else if(Number(eur.value)) {
            dh.value = Number(eur.value) * Number(cours_de_change.value);
        } else {
            return alert("Veuillez bien remplir tous les champs s'il vous plaît!");
        };
    };
    
    dh.addEventListener("keyup", () => eur.value = "");
    eur.addEventListener("keyup", () => dh.value = "");
    convert_btn.addEventListener("click", convert);
});
