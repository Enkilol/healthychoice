
function imgSwit() {
    var immagine = document.getElementById("ruota");
    immagine.setAttribute("src", "animazione.gif");
    setTimeout(trasferimento, 3000);
  }

function trasferimento(){
  window.location.href = "messaggio.html";
}


function determinaStagione() {
  const oggi = new Date();
  const mese = oggi.getMonth() + 1;
  let stagione = "";
  
  switch(mese) {
    case 12:
    case 1:
    case 2:
      stagione = "Inverno";
      break;
    case 3:
    case 4:
    case 5:
      stagione = "Primavera";
      break;
    case 6:
    case 7:
    case 8:
      stagione = "Estate";
      break;
    case 9:
    case 10:
    case 11:
      stagione = "Autunno";
      break;
    default:
      stagione = "Non definito";
  }
  
  return stagione;
}


function messaggio() {
    const lista = [

        { nome: "Mela", stagioni: ["Autunno", "Inverno"], vitamine: ["A", "B1", "B2", "B6", "C", "E"] },
        { nome: "Banana", stagioni: ["Autunno","Inverno", "Primavera", "Estate"], vitamine: ["A", "B6", "C"] },
        { pic: "https://images.pexels.com/photos/51312/kiwi-fruit-vitamins-healthy-eating-51312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" , nome: "Kiwi", stagioni: ["Inverno", "Primavera"], vitamine: ["A", "C", "E", "K"] },
        { nome: "Arancia", stagioni: ["Inverno"], vitamine: ["A", "B1", "B2", "B6", "C"] },
        { nome: "Limone", stagioni: ["Autunno","Inverno", "Primavera", "Estate"], vitamine: ["A", "B1", "B2", "B6", "C"] },
        { nome: "Pesca", stagioni: ["Estate"], vitamine: ["A", "B3", "C", "E"] },
        { nome: "Pera", stagioni: ["Autunno"], vitamine: ["A", "B1", "B2", "B6", "C"] },
        { nome: "Anguria", stagioni: ["Estate"], vitamine: ["A", "B1", "B2", "B6", "C"] },
        { nome: "Uva", stagioni: ["Autunno"], vitamine: ["A", "B1", "B2", "B6", "C"] },
        { nome: "Melone", stagioni: ["Estate"], vitamine: ["A", "B1", "B2", "B6", "C"] },
        { nome: "Mango", stagioni: ["Estate"], vitamine: ["A", "C", "E", "K"] },
        { nome: "Ciliegia", stagioni: ["Primavera", "Estate"], vitamine: ["A", "B1", "B2", "B6", "C"] },
        { nome: "Fragola", stagioni: ["Primavera", "Estate"], vitamine: ["A", "B1", "B2", "B6", "C", "E"] },
        { nome: "Mirtillo", stagioni: ["Estate"], vitamine: ["A", "B1", "B2", "B6", "C", "E"] },
        { nome: "Melograno", stagioni: ["Autunno"], vitamine: ["A", "B1", "B2", "B6", "C", "E"] },
        { nome: "Pompelmo", stagioni: ["Inverno"], vitamine: ["A", "B1", "B2", "B6", "C"] },
        { nome: 'Asparago', stagioni: ['Primavera'], vitamine: ['Vitamina K', 'Vitamina C', 'Folati'] },
  { nome: 'Barbabietola', stagioni: ['Inverno', 'Primavera'], vitamine: ['Vitamina A', 'Vitamina C', 'Acido folico'] },
  { nome: 'Broccoli', stagioni: ['Inverno', 'Primavera'], vitamine: ['Vitamina C', 'Vitamina K', 'Acido folico'] },
  { nome: 'Carote', stagioni: ['Inverno'], vitamine: ['Vitamina A', 'Vitamina C', 'Potassio'] },
  { nome: 'Cavolfiore', stagioni: ['Inverno', 'Primavera'], vitamine: ['Vitamina C', 'Vitamina K', 'Folati'] },
  { nome: 'Cavolo', stagioni: ['Inverno'], vitamine: ['Vitamina C', 'Vitamina K', 'Acido folico'] },
  { nome: 'Cetrioli', stagioni: ['Estate'], vitamine: ['Vitamina K', 'Vitamina C'] },
  { nome: 'Cipolle', stagioni: ['Inverno'], vitamine: ['Vitamina C', 'Fibre', 'Folati'] },
  { nome: 'Finocchi', stagioni: ['Inverno'], vitamine: ['Vitamina C', 'Fibre', 'Potassio'] },
  { nome: 'Lattuga', stagioni: ['Primavera', 'Estate'], vitamine: ['Vitamina C', 'Fibre'] },
  { nome: 'Melanzane', stagioni: ['Estate'], vitamine: ['Vitamina C', 'Fibre', 'Potassio'] },
  { nome: 'Patate', stagioni: ['Inverno'], vitamine: ['Vitamina C', 'Potassio', 'Fibre'] },
  { nome: 'Peperoni', stagioni: ['Estate'], vitamine: ['Vitamina C', 'Vitamina A', 'Fibre'] },
  { nome: 'Pomodori', stagioni: ['Estate'], vitamine: ['Vitamina C', 'Vitamina A', 'Potassio'] },
  { nome: 'Radicchio', stagioni: ['Inverno'], vitamine: ['Vitamina C', 'Fibre', 'Potassio'] },
  { nome: 'Spinaci', stagioni: ['Inverno', 'Primavera'], vitamine: ['Vitamina K', 'Vitamina C', 'Ferro'] },
  { nome: 'Zucchine', stagioni: ['Estate'], vitamine: ['Vitamina C', 'Fibre', 'Potassio'] }
      ];

// ora dovrei crare una cost che filtra la lista in base alla stagione in cui siamo

const stagioneCorrente = determinaStagione();
const advlista = lista.filter(vegetale => vegetale.stagioni.includes(stagioneCorrente));

    var x = advlista[Math.round(Math.random() * (advlista.length-1))]


///////////////////IMMAGINE////////////////////////////////////////////

const pic = x.pic

////////////////////NOME/////////////////////////////////////////// 
    
const doc = document.createElement('h2');
    doc.innerText = x.nome;
    
    const docDiv = document.getElementById('Nome');
    docDiv.appendChild(doc);
///////////////////VITAMINE////////////////////////////////////////////
    const vit = document.createElement('h3');
    vit.innerText = x.vitamine;

    const vitDiv =document.getElementById('Vitamine');
    vitDiv.appendChild(vit);

////////////////////STAGIONE//////////////////////////////////////////

      const stag = document.createElement('h3');
      stag.innerText = x.stagioni;

      const stagDiv = document.getElementById('Stagione');
      stagDiv.appendChild(stag);

}
