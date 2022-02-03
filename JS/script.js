function calculateBMI() {
    var weight = parseFloat(document.getElementById("txt-weight").value);
    var heightCM = parseFloat(document.getElementById("txt-height").value);
    var heightM = heightCM / 100;
    var bmi = (weight / (heightM * heightM)).toFixed(2);
    document.getElementById("txt-bmi").innerHTML = "BMI: " + bmi;

}