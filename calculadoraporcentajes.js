function calcular() {
    let porcentaje = Number(document.getElementById("pt").value);
    let cantidad = Number(document.getElementById("ct").value);
    //calcular porcentaje de unn valor
    let resultado = cantidad * (porcentaje / 100);
    document.getElementById("resul").value = resultado;

}