function mudaPara00(){
    if (document.querySelector('.body').offsetWidth >= 769) {
        document.getElementById('pagina').style.backgroundImage = 'url(background.png)';   
    }
    else {
        document.getElementById('pagina').style.backgroundImage = 'url(backgroundTablet.jpg)';
    }



    if (document.querySelector('.body').offsetWidth <= 375) {
        document.getElementById('botao11').style.borderRight = '3px solid white';
        document.getElementById('pagina').style.height = '667px'
    }
    else{
        document.getElementById('botao1').style.borderBottom = '3px solid white';
    }
    document.getElementById('botao2').style.borderBottom = '';
    document.getElementById('botao3').style.borderBottom = '';
    document.getElementById('botao4').style.borderBottom = '';
    document.getElementById('botao12').style.borderRight = '';
    document.getElementById('botao13').style.borderRight = '';
    document.getElementById('botao14').style.borderRight = '';
    document.querySelector('.caixaPaginaInicial').style.display = 'flex';
    document.querySelector('.caixaPaginaSecundaria').style.display = 'none';
    document.querySelector('.caixaPaginaTerciaria').style.display = 'none';
    document.querySelector('.caixaPaginaQuartenaria').style.display = 'none';
}



function mudaPara01(){
    document.getElementById('pagina').style.backgroundImage = 'url(destination.jpg)';   
    if (document.querySelector('.body').offsetWidth <= 375) {
        document.getElementById('botao12').style.borderRight = '3px solid white';
        document.getElementById('pagina').style.height = '850px'
    }
    else{
        document.getElementById('botao2').style.borderBottom = '3px solid white';
    }
    document.getElementById('botao1').style.borderBottom = '';
    document.getElementById('botao3').style.borderBottom = '';
    document.getElementById('botao4').style.borderBottom = '';
    document.getElementById('botao11').style.borderRight = '0px';
    document.getElementById('botao13').style.borderRight = '0px';
    document.getElementById('botao14').style.borderRight = '0px';
    document.querySelector('.caixaPaginaInicial').style.display = 'none';
    document.querySelector('.caixaPaginaSecundaria').style.display = 'flex';
    document.querySelector('.caixaPaginaTerciaria').style.display = 'none';
    document.querySelector('.caixaPaginaQuartenaria').style.display = 'none';
}



function mudaPara02(){
    document.getElementById('pagina').style.backgroundImage = 'url(crew.png)';
    if (document.querySelector('.body').offsetWidth <= 375) {
        document.getElementById('botao13').style.borderRight = '3px solid white';
        document.getElementById('pagina').style.height = '710px'
    }
    else{
        document.getElementById('botao3').style.borderBottom = '3px solid white';
    }
    document.getElementById('botao2').style.borderBottom = '';
    document.getElementById('botao1').style.borderBottom = '';
    document.getElementById('botao4').style.borderBottom = '';
    document.getElementById('botao12').style.borderRight = '0px';
    document.getElementById('botao11').style.borderRight = '0px';
    document.getElementById('botao14').style.borderRight = '0px';
    document.querySelector('.caixaPaginaInicial').style.display = 'none';
    document.querySelector('.caixaPaginaSecundaria').style.display = 'none';
    document.querySelector('.caixaPaginaTerciaria').style.display = 'flex';
    document.querySelector('.caixaPaginaQuartenaria').style.display = 'none';
}

if (document.querySelector('.body').offsetWidth < 769) {
        document.querySelector('.caixaPaginaTerciaria').style.bottom = '162px';
    }
    else{
        document.querySelector('.caixaPaginaTerciaria').style.bottom = '0px';
    }

function mudaPara03(){
    document.getElementById('pagina').style.backgroundImage = 'url(technology.jpg)';
    if (document.querySelector('.body').offsetWidth <= 375) {
        document.getElementById('botao14').style.borderRight = '3px solid white';
        document.getElementById('pagina').style.height = '710px'
    }
    else{
        document.getElementById('botao4').style.borderBottom = '3px solid white';
    }

    if (document.querySelector('.body').offsetWidth < 769) {
        document.querySelector('.titleTechnologyMobile').style.display = 'flex';
        document.querySelector('.titleTechnologyDesktop').style.display = 'none';
    }
    else{
        document.querySelector('.titleTechnologyMobile').style.display = 'none';
        document.querySelector('.titleTechnologyDesktop').style.display = 'flex';
    }
    document.getElementById('botao2').style.borderBottom = '';
    document.getElementById('botao3').style.borderBottom = '';
    document.getElementById('botao1').style.borderBottom = '';
    document.getElementById('botao12').style.borderRight = '0px';
    document.getElementById('botao13').style.borderRight = '0px';
    document.getElementById('botao11').style.borderRight = '0px';
    document.querySelector('.caixaPaginaInicial').style.display = 'none';
    document.querySelector('.caixaPaginaSecundaria').style.display = 'none';
    document.querySelector('.caixaPaginaTerciaria').style.display = 'none';
    document.querySelector('.caixaPaginaQuartenaria').style.display = 'flex';
}

/* Fim das funcoes para a nav */

function mudaDestinationPara00(){
    document.getElementById('imagemDestination').src = 'moon.png';
    document.querySelector('.moon').style.display = 'flex';
    document.querySelector('.mars').style.display = 'none';
    document.querySelector('.europa').style.display = 'none';
    document.querySelector('.titan').style.display = 'none';
}

function mudaDestinationPara01(){
    document.getElementById('imagemDestination').src = 'mars.png';
    document.querySelector('.moon').style.display = 'none';
    document.querySelector('.mars').style.display = 'flex';
    document.querySelector('.europa').style.display = 'none';
    document.querySelector('.titan').style.display = 'none';
}

function mudaDestinationPara02(){
    document.getElementById('imagemDestination').src = 'europa.png';
    document.querySelector('.moon').style.display = 'none';
    document.querySelector('.mars').style.display = 'none';
    document.querySelector('.europa').style.display = 'flex';
    document.querySelector('.titan').style.display = 'none';
}

function mudaDestinationPara03(){
    document.getElementById('imagemDestination').src = 'titan.png';
    document.querySelector('.moon').style.display = 'none';
    document.querySelector('.mars').style.display = 'none';
    document.querySelector('.europa').style.display = 'none';
    document.querySelector('.titan').style.display = 'flex';
}



/* Fim das funcoes para a segunda pagina */

function mudaCrewPara00(){
    document.getElementById('imagemCrew').src = 'douglas.png';
    document.getElementById('imagemCrewCelular').src = 'douglas.png';
    document.querySelector('.douglas').style.display = 'flex';
    document.querySelector('.mark').style.display = 'none';
    document.querySelector('.victor').style.display = 'none';
    document.querySelector('.anousheh').style.display = 'none';
}

function mudaCrewPara01(){
    document.getElementById('imagemCrew').src = 'mark.png';
    document.getElementById('imagemCrewCelular').src = 'mark.png';
    document.querySelector('.douglas').style.display = 'none';
    document.querySelector('.mark').style.display = 'flex';
    document.querySelector('.victor').style.display = 'none';
    document.querySelector('.anousheh').style.display = 'none';
}

function mudaCrewPara02(){
    document.getElementById('imagemCrew').src = 'victor.png';
    document.getElementById('imagemCrewCelular').src = 'victor.png';
    document.querySelector('.douglas').style.display = 'none';
    document.querySelector('.mark').style.display = 'none';
    document.querySelector('.victor').style.display = 'flex';
    document.querySelector('.anousheh').style.display = 'none';
}

function mudaCrewPara03(){
    document.getElementById('imagemCrew').src = 'anousheh.png';
    document.getElementById('imagemCrewCelular').src = 'anousheh.png';
    document.querySelector('.douglas').style.display = 'none';
    document.querySelector('.mark').style.display = 'none';
    document.querySelector('.victor').style.display = 'none';
    document.querySelector('.anousheh').style.display = 'flex';
}



/* Fim das funcoes para a terceira pagina */



function mudaTechnologyPara00(){
    document.getElementById('imagemTechnology').src = 'launchvehicle.jpg';
    document.querySelector('.launchvehicle').style.display = 'flex';
    document.querySelector('.spaceport').style.display = 'none';
    document.querySelector('.spacecapsule').style.display = 'none';
}

function mudaTechnologyPara01(){
    document.getElementById('imagemTechnology').src = 'spaceport.jpg';
    document.querySelector('.launchvehicle').style.display = 'none';
    document.querySelector('.spaceport').style.display = 'flex';
    document.querySelector('.spacecapsule').style.display = 'none';
}

function mudaTechnologyPara02(){
    document.getElementById('imagemTechnology').src = 'spacecapsule.jpg';
    document.querySelector('.launchvehicle').style.display = 'none';
    document.querySelector('.spaceport').style.display = 'none';
    document.querySelector('.spacecapsule').style.display = 'flex';
}




/* Fim das funcoes para a quarta pagina */



function abreMenuCelular(){
    document.querySelector('.navDivCelular').style.display = 'flex';
}

function fechaMenuCelular(){
    document.querySelector('.navDivCelular').style.display = 'none';
}