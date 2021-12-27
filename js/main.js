function Prozent_1()
{
    var Prozent = document.getElementById("Prozent").value;

    var Nummer = document.getElementById("Nummer").value;
    document.getElementById("Wert1").value = (Nummer / 100) * Prozent;
}
function Prozent_2(){
    var Nummer1 = document.getElementById("Nummer1").value;
    var Nummer2 = document.getElementById("Nummer2").value;
    document.getElementById("Wert2").value = (Nummer1 * 100) / Nummer2 + "%";
}
