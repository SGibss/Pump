function ascende() {
    let div = document.getElementById("login");
    div.style.backgroundColor = "#ffbb33";
    div.style.color = "black";
}

function apaga() {
    let div = document.getElementById("login");
    div.style.backgroundColor = "#ff4500";
    div.style.color = "white";
}

function forms_orange(id) {
    let campo = document.getElementById(id);
    campo.style.border = "5px solid orange";
}

function empty_alert(id_alert, id_campo) {
    let campo = document.getElementById(id_campo).value;
    let div = document.getElementById(id_alert);
    if (campo == "")
        div.innerHTML = "<img src='img/alert.png' width='30'>";
    else
        div.innerHTML = "";
}

function empty_alert(id_alert, id_campo) {
    let campo = document.getElementById(id_campo).value;
    let div = document.getElementById(id_alert);
    if (campo == "")
        div.innerHTML = "<img src='img/alert.png' width='30'>";
    else
        div.innerHTML = "";
}

function current_location(id_campo) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
                    .then(response => response.json())
                    .then(data => {
                        const address = data.address;
                        const cidade = address.city || address.town || address.village || "";
                        const pais = address.country || "";
                        document.getElementById(id_campo).value = `${cidade}, ${pais}`;
                    })
                    .catch(error => {
                        document.getElementById("alert_location").innerText = "Erro ao buscar endereço.";
                        console.error(error);
                    });
            }
        );
    }
}

const auto_location = document.getElementById('location');

auto_location.addEventListener('focus', () => {
    const container = document.getElementById('campo_location_ext');

    // Limpar o conteúdo atual
    container.innerHTML = '';

    // Criar três novos inputs
    for (let i = 0; i < 3; i++) {
        const novoInput = document.createElement('input');
        novoInput.type = 'text';
        switch (i) {
            case 0:
                novoInput.placeholder = `Digite o seu cep`;
                novoInput.id = 'cep';

                novoInput.addEventListener('blur', () => {
                    const cepVal = document.getElementById('cep').value;
                    const estadoCampo = document.getElementById('estado');
                    const bairroCampo = document.getElementById('bairro');
                
                    // Limpar o conteúdo atual
                    estadoCampo.value = '';
                    bairroCampo.value = '';
                
                    const ajax = new XMLHttpRequest();
                    ajax.open('GET', 'https://viacep.com.br/ws/'+cepVal+'/json/');
                    ajax.send();
                
                    ajax.onload= function() {
                        let obj = JSON.parse(this.responseText);
                
                        document.getElementById('estado').value = obj.estado;
                        document.getElementById('bairro').value = obj.bairro;
                    }
                });
                break;
            case 1:
                novoInput.placeholder = `Digite o seu estado`;
                novoInput.id = 'estado';
                break;
            case 2:
                novoInput.placeholder = `Digite o seu bairro`;
                novoInput.id = 'bairro';
                break;
        }
        novoInput.style.display = 'block';
        novoInput.style.marginBottom = '8px';
        container.appendChild(novoInput);
    }
});




