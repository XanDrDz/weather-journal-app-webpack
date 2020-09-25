function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let webAdress = document.getElementById('name').value

    if(webAdress === "") {
        return false;
    } else {return true}
}

export { checkForName }
