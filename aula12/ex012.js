var agora = new Date
var hora = agora.getHours
if (hora < 12 && hora >= 6){
    console.log('BOM DIA')
} else if (hora >= 12 && hora <= 19){
    console.log('BOA TARDE')
} else{
    console.log('BOA NOITE')
}