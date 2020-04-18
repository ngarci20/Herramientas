function readyB() {
document.getElementById("bundle1").style.display = "block";
document.getElementById("bundle2").style.display = "none";
}

function readyC() {
document.getElementById("compile2").style.display = "none";
document.getElementById("compile1").style.display = "block";

}

function Bundle() {
    document.getElementById("bundle1").style.display = "none";
    document.getElementById("bundle2").style.display = "block";
}

function Compile() {
    document.getElementById("compile1").style.display = "none";
    document.getElementById("compile2").style.display = "block";
}