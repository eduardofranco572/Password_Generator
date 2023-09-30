$(document).ready(function(){
    $('#customRange').on('input', function() {
        var range = $(this)
        var value = (range.val() - range.attr('min')) / (range.attr('max') - range.attr('min')) * 100
        range.css('background', 'linear-gradient(to right, #ABF7B6 0%, #ABF7B6 ' + value + '%, #17161E ' + value + '%, #17161E 100%)') 
    })

    $('#customRange').on('input', function() {
        const valor = $(this).val();
        $('#lengthChar').text(valor);
    });


    function verificarForcaSenha() {
        const Uppercase = $("#Uppercase").prop('checked')
        const Lowercase = $("#Lowercase").prop('checked')
        const Number = $("#Number").prop('checked')
        const Symbols = $("#Symbols").prop('checked')
        const range = parseInt($('#customRange').val()) 

        let nivelForca = 0
        let nivelSenha = '';

        if (Uppercase) nivelForca++
        if (Lowercase) nivelForca++
        if (Number) nivelForca++
        if (Symbols) nivelForca += 2

        // Ajuste: Leva em conta o comprimento da senha
        if (range >= 8 && range < 12 && nivelForca >= 1) nivelForca++
        else if (range >= 12 && nivelForca >= 1) nivelForca += 2

        if (nivelForca < 2) {
            nivelSenha = 'LOW';

        } else if (nivelForca <= 3) {
            nivelSenha = 'MEDIUM';

        } else {
            nivelSenha = 'HIGH';
        }

        if(range < 4) {
            nivelSenha = 'LOW';
        }

        if(nivelForca == 0){
            nivelSenha = 'No Characters';
        }

        const elemento = `
            <h1>STRENGTH</h1>
            <div class="simboloStre">
                <h1 class="nameStre">${nivelSenha}</h1>
                <div class="elementsStre">
                    ${generateStrengthElements(nivelSenha)}
                </div>  
            </div>   
        `

        $('.strength').empty().append(elemento);

        function generateStrengthElements(nivel) {
            switch(nivel) {
                case 'LOW':
                    return `
                        <div class="ele1StreLow"></div>
                        <div class="ele1StreLow"></div>
                        <div class="ele1StreLow"></div>
                        <div class="ele1StreLow"></div>
                    `;
                case 'MEDIUM':
                    return `
                        <div class="ele1StreMedium"></div>
                        <div class="ele1StreMedium"></div>
                        <div class="ele1StreMedium"></div>
                        <div class="ele1StreMedium"></div>
                    `;
                case 'HIGH':
                    return `
                        <div class="ele1StreHigh"></div>
                        <div class="ele1StreHigh"></div>
                        <div class="ele1StreHigh"></div>
                        <div class="ele1StreHigh"></div>
                    `;
                default:
                    return `
                        <div class="ele1StreERRO"></div>
                        <div class="ele1StreERRO"></div>
                        <div class="ele1StreERRO"></div>
                        <div class="ele1StreERRO"></div>
                    `;
            }
        }

        
    }
    
    $("#Uppercase, #Lowercase, #Number, #Symbols, #customRange").change(verificarForcaSenha)
    
    $('#customRange').on('input', verificarForcaSenha)
    
    $(document).ready(function() {
        $(".material-symbols-outlined").click(function() {
            var textoParaCopiar = $(this).prev('.senha').find('h1').text();
            copiarTexto(textoParaCopiar);
        });
    });
    
    function copiarTexto(texto) {
        var tempInput = $("<input>");
        $("body").append(tempInput);
        tempInput.val(texto).select();
        document.execCommand("copy");
        tempInput.remove();
        alert("Texto copiado para a área de transferência!");
    }
    


});







