const getNumber = () => {
    const MakeArandomNumber = Math.floor(Math.random() * 16777215);
    const GenerateAhexadecimalCode = "#" + MakeArandomNumber.toString(16);
   
    document.body.style.backgroundColor = GenerateAhexadecimalCode;
document.getElementById("PrintHere").innerText = GenerateAhexadecimalCode;

}

document.getElementById("Clickmeh").addEventListener("click", getNumber);