function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("agendaPage").classList.remove("hidden");
        // Armazenar o estado do login, como um token de autenticação, em localStorage ou cookies
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
}

function addEntry() {
    var entryInput = document.getElementById("entry");
    var entryValue = entryInput.value;

    fetch('https://tarotai.onrender.com/ai/agenda', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: entryValue })
    })
        .then(response => {

            return response.json()
        })
        .then(data => {
            console.log(data)
            // Adicionar o valor retornado na agenda
            if (data.result !== 'Não') {
                var entryList = document.getElementById("entryList");
                var newEntry = document.createElement("li");
                newEntry.textContent = data.result;

                var deleteButton = document.createElement("button");
                deleteButton.textContent = "Remover";
                deleteButton.addEventListener("click", function () {
                    entryList.removeChild(newEntry);
                });

                newEntry.appendChild(deleteButton);
                entryList.appendChild(newEntry);

                // Limpar o campo de input
                entryInput.value = "";
            } else {
                alert("Não foi possível adicionar a entrada. Tente novamente.");
            }

        })
        .catch(error => {
            console.log("Erro na requisição:", error);
        });

    // Simulação de requisição e adição na agenda
    // Neste exemplo, apenas exibimos o valor na lista de entrada
    // var entryList = document.getElementById("entryList");
    // var newEntry = document.createElement("li");
    // newEntry.textContent = entryValue;
    // entryList.appendChild(newEntry);

    // Limpar o campo de input
    entryInput.value = "";
}


function logout() {
    document.getElementById("agendaPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
    // Limpar o estado do login, como o token de autenticação em localStorage ou cookies
}
