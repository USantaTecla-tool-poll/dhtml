function changeForUpdatedGeneral(event) {
    let anchored = document.getElementsByName("anchored")[0];
    if (anchored.checked){
        var general = document.getElementsByName("general")[0];
        for(let input of document.getElementsByTagName("input")){
            input.value = general.value;
        }
		anchored.checked = false;
    }
    trace();
}

function trace() {
    var result = {};
    for(campo of ["general", "rigor", "creation", "attraction"]){
        result[campo] = document.getElementsByName(campo)[0].value;
    }
    console.log(result);
}