function calculateBMI() {
    var weight = parseFloat(document.getElementById("txt-weight").value);
    var heightCM = parseFloat(document.getElementById("txt-height").value);
    var heightM = heightCM / 100;
    var bmi = (weight / (heightM * heightM)).toFixed(2);
    document.getElementById("txt-bmi").innerHTML = "BMI: " + bmi;

    if (bmi < 16) {
        document.getElementById("txt-remark").innerHTML = "Serve Thickness ";



    } else if (bmi >= 16.1 && bmi <= 17) {
        document.getElementById("txt-remark").innerHTML = "Modrate Thickness";



    } else if (bmi >= 17.1 && bmi <= 18.4) {
        document.getElementById("txt-remark").innerHTML = "Mild Thickness";


    } else if (bmi > 18.5 && bmi <= 25) {
        document.getElementById("txt-remark").innerHTML = "Normal ";

    } else if (bmi >= 25.1 && bmi <= 29.9) {
        document.getElementById("txt-remark").innerHTML = "Over Weight";


    } else if (bmi >= 30 && bmi <= 35) {
        document.getElementById("txt-remark").innerHTML = "Obse Class I";

    } else if (bmi >= 35.1 && bmi <= 40) {
        document.getElementById("txt-remark").innerHTML = "Obse Class II";

    } else if (bmi >= 41) {
        document.getElementById("txt-remark").innerHTML = "Dead";

    }
}