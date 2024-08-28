const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  const newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  // Put your code here
  return "<p>" + pregunta.titulo + "</p>"
}

function imprimeTodasLasRespuestas(pregunta) {
  // Put your code here
  return pregunta.respuestas.length
}

function imprimeUnaRespuesta(respuesta) {
  // Put your code here
  return imprimeLabel(respuesta)+imprimeInput(respuesta)
}

function imprimeLabel(respuesta) {
  // Put your code here
  return `<label for=${pregunta.respuestas[respuesta].value}>${pregunta.respuestas.label} </label>`
}

function imprimeInput(respuesta) {
  // Put your code here
  return `<input id=${pregunta.respuestas.id} name=${pregunta.respuestas.name} type="radio" value=${pregunta.respuestas.value}>`
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);