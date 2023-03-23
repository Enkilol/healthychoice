
function imgSwit() {
  var immagine = document.getElementById("ruota");
  immagine.setAttribute("src", "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTZkNTczOTA0OTkyMDZjNDg3NjI3ZmIyNTg4MDg4NDZiNzk0YWQ3NiZjdD1n/wgJI5oiIydBVO44xdi/giphy.gif");
  setTimeout(trasferimento, 3000);
}

function trasferimento() {
  window.location.href = "messaggio.html";
}


function determinaStagione() {
  const oggi = new Date();
  const mese = oggi.getMonth() + 1;
  let stagione = "";

  switch (mese) {
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
    {immagine:"https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Mela", stagioni: ["Autunno", "Inverno"], vitamine: ["A", "B1", "B2", "B6", "C", "E"] },
    {immagine:"https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Banana", stagioni: ["Autunno", "Inverno", "Primavera", "Estate"], vitamine: ["A", "B6", "C"] },
    { immagine:"https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Kiwi", stagioni: ["Inverno", "Primavera"], vitamine: ["A", "C", "E", "K"] },
    {immagine:"https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Arancia", stagioni: ["Inverno"], vitamine: ["A", "B1", "B2", "B6", "C"] },
    {immagine:"https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Limone", stagioni: ["Autunno", "Inverno", "Primavera", "Estate"], vitamine: ["A", "B1", "B2", "B6", "C"] },
    { immagine:"https://images.pexels.com/photos/5403478/pexels-photo-5403478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Pesca", stagioni: ["Estate"], vitamine: ["A", "B3", "C", "E"] },
    {immagine:"https://images.pexels.com/photos/2095571/pexels-photo-2095571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Pera", stagioni: ["Autunno"], vitamine: ["A", "B1", "B2", "B6", "C"] },
    {immagine:"https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Anguria", stagioni: ["Estate"], vitamine: ["A", "B1", "B2", "B6", "C"] },
    {immagine:"https://images.pexels.com/photos/23042/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Uva", stagioni: ["Autunno"], vitamine: ["A", "B1", "B2", "B6", "C"] },
    { immagine:"https://images.pexels.com/photos/39350/melon-ham-fruit-meat-39350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Melone", stagioni: ["Estate"], vitamine: ["A", "B1", "B2", "B6", "C"] },
    {immagine:"https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Mango", stagioni: ["Estate"], vitamine: ["A", "C", "E", "K"] },
    {immagine:"https://images.pexels.com/photos/175727/pexels-photo-175727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Ciliegia", stagioni: ["Primavera", "Estate"], vitamine: ["A", "B1", "B2", "B6", "C"] },
    {immagine:"https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Fragola", stagioni: ["Primavera", "Estate"], vitamine: ["A", "B1", "B2", "B6", "C", "E"] },
    {immagine:"https://images.pexels.com/photos/583837/pexels-photo-583837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Mirtillo", stagioni: ["Estate"], vitamine: ["A", "B1", "B2", "B6", "C", "E"] },
    {immagine:"https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Melograno", stagioni: ["Autunno"], vitamine: ["A", "B1", "B2", "B6", "C", "E"] },
    {immagine:"https://images.pexels.com/photos/1435734/pexels-photo-1435734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: "Pompelmo", stagioni: ["Inverno"], vitamine: ["A", "B1", "B2", "B6", "C"] },
    {immagine:"https://images.pexels.com/photos/539431/pexels-photo-539431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: 'Asparago', stagioni: ['Primavera'], vitamine: ['Vitamina K', 'Vitamina C', 'Folati'] },
    {immagine:"https://images.pexels.com/photos/4443482/pexels-photo-4443482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: 'Barbabietola', stagioni: ['Inverno', 'Primavera'], vitamine: ['Vitamina A', 'Vitamina C', 'Acido folico'] },
    { immagine:"https://images.pexels.com/photos/161514/brocoli-vegetables-salad-green-161514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nome: 'Broccoli', stagioni: ['Inverno', 'Primavera'], vitamine: ['Vitamina C', 'Vitamina K', 'Acido folico'] },
    { immagine:"https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nome: 'Carote', stagioni: ['Inverno'], vitamine: ['Vitamina A', 'Vitamina C', 'Potassio'] },
    { immagine:"https://images.pexels.com/photos/4963827/pexels-photo-4963827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nome: 'Cavolfiore', stagioni: ['Inverno', 'Primavera'], vitamine: ['Vitamina C', 'Vitamina K', 'Folati'] },
    { immagine:"https://images.pexels.com/photos/134877/pexels-photo-134877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nome: 'Cavolo', stagioni: ['Inverno'], vitamine: ['Vitamina C', 'Vitamina K', 'Acido folico'] },
    { immagine:"https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nome: 'Cetrioli', stagioni: ['Estate'], vitamine: ['Vitamina K', 'Vitamina C'] },
    { immagine:"https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nome: 'Cipolle', stagioni: ['Inverno'], vitamine: ['Vitamina C', 'Fibre', 'Folati'] },
    { immagine:"https://images.pexels.com/photos/7511809/pexels-photo-7511809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nome: 'Finocchi', stagioni: ['Inverno'], vitamine: ['Vitamina C', 'Fibre', 'Potassio'] },
    {immagine:"https://images.pexels.com/photos/1199562/pexels-photo-1199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: 'Lattuga', stagioni: ['Primavera', 'Estate'], vitamine: ['Vitamina C', 'Fibre'] },
    { immagine:"https://images.pexels.com/photos/5187379/pexels-photo-5187379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nome: 'Melanzane', stagioni: ['Estate'], vitamine: ['Vitamina C', 'Fibre', 'Potassio'] },
    {immagine:"https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: 'Patate', stagioni: ['Inverno'], vitamine: ['Vitamina C', 'Potassio', 'Fibre'] },
    {immagine:"https://images.pexels.com/photos/915001/pexels-photo-915001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: 'Peperoni', stagioni: ['Estate'], vitamine: ['Vitamina C', 'Vitamina A', 'Fibre'] },
    {immagine:"https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: 'Pomodori', stagioni: ['Estate'], vitamine: ['Vitamina C', 'Vitamina A', 'Potassio'] },
    {immagine:"https://images.pexels.com/photos/7098655/pexels-photo-7098655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: 'Radicchio', stagioni: ['Inverno'], vitamine: ['Vitamina C', 'Fibre', 'Potassio'] },
    {immagine:"https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", nome: 'Spinaci', stagioni: ['Inverno', 'Primavera'], vitamine: ['Vitamina K', 'Vitamina C', 'Ferro'] },
    { immagine:"https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",nome: 'Zucchine', stagioni: ['Estate'], vitamine: ['Vitamina C', 'Fibre', 'Potassio'] }
  ];

  // ora dovrei crare una cost che filtra la lista in base alla stagione in cui siamo

  const stagioneCorrente = determinaStagione();
  const advlista = lista.filter(vegetale => vegetale.stagioni.includes(stagioneCorrente));

  var x = advlista[Math.round(Math.random() * (advlista.length - 1))]

  ///////////////////////Immagine////////////////////////////////////
  const img = document.createElement('img');
  img.src = x.immagine;

  const imgDiv = document.getElementById('Immagine');
  imgDiv.appendChild(img);

  ////////////////////NOME/////////////////////////////////////////// 

  const doc = document.createElement('h2');
  doc.innerText = x.nome;

  const docDiv = document.getElementById('Nome');
  docDiv.appendChild(doc);

  

  ///////////////////VITAMINE////////////////////////////////////////////
  const vit = document.createElement('h3');
  vit.innerText = x.vitamine;

  const vitDiv = document.getElementById('Vitamine');
  vitDiv.appendChild(vit);

  ////////////////////STAGIONE//////////////////////////////////////////

  const stag = document.createElement('h3');
  stag.innerText = x.stagioni;

  const stagDiv = document.getElementById('Stagione');
  stagDiv.appendChild(stag);

  var frutto = x

  return frutto;

}

const frutto = messaggio();

function shareOnTwitter(frutto) {
  const tweetUrl = "https://twitter.com/intent/tweet?url=&text=";
  const tweetText = `Healyhy picker mi ha consigliato di mangiare: ${frutto.nome}. Il prodotto contiene queste vitamine: ${frutto.vitamine} #frutta #verdura #salute #food #healthyfood #${frutto.nome}`;
  const mediaUrl = "";
  const url = tweetUrl + encodeURIComponent(tweetText) + "&media=" + encodeURIComponent(mediaUrl);
  window.open(url);
}
