$(document).ready(function(){

    let quantidadeCaracteres = 0; 

    function pegandodados() {
        const Uppercase = $("#Uppercase").prop('checked')
        const Lowercase = $("#Lowercase").prop('checked')
        const Number = $("#Number").prop('checked')
        const Symbols = $("#Symbols").prop('checked')
        quantidadeCaracteres = parseInt($('#customRange').val()) 
    }

    $('#customRange').on('input', pegandodados)

    function RandomLower(){
        return String.fromCharCode(Math.floor( Math.random() * 26) + 97)
    }

    function RandomUpper(){
        return String.fromCharCode(Math.floor( Math.random() * 26) + 65)
    }

    function RandomNumber(){
        return String.fromCharCode(Math.floor( Math.random() * 10) + 48)
    }

    function RandomSymbols(){
        const symbols = '!@#$%^&*(){}[]=<>/,.'
        return symbols[Math.floor(Math.random() * symbols.length)]
    }

    function RandomCharacters(){
        let result = '';

        const functions = [];

        if ($("#Uppercase").prop('checked')) {
            functions.push(RandomUpper);
        }

        if ($("#Lowercase").prop('checked')) {
            functions.push(RandomLower);
        }

        if ($("#Number").prop('checked')) {
            functions.push(RandomNumber);
        }

        if ($("#Symbols").prop('checked')) {
            functions.push(RandomSymbols);
        }

        if (functions.length === 0) {
            alert('Selecione pelo menos uma opção de caractere.');
            return;
        }

        for (let i = 0; i < quantidadeCaracteres; i++) {
            const randomFunction = functions[Math.floor(Math.random() * functions.length)];
            result += randomFunction();
        }

        console.log(result);
        $('#senha').text('');
        $('#senha').append(result);
    }

    $('#gerar').click(RandomCharacters);

})
