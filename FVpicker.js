function messaggio() {
    const lista = [

        { nome: "Mela", stagioni: ["Autunno", "Inverno"], vitamine: ["A", "B1", "B2", "B6", "C", "E"] },
        { nome: "Banana", stagioni: ["Tutto l'anno"], vitamine: ["A", "B6", "C"] },
        { nome: "Kiwi", stagioni: ["Inverno", "Primavera"], vitamine: ["A", "C", "E", "K"] },
        { nome: "Arancia", stagioni: ["Inverno"], vitamine: ["A", "B1", "B2", "B6", "C"] },
        { nome: "Limone", stagioni: ["Tutto l'anno"], vitamine: ["A", "B1", "B2", "B6", "C"] },
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

    var x = lista[Math.round(Math.random() * (lista.length-1))]
    var mex = ("La frutta/verdura che puoi provare oggi: " + x.nome + ". La stagione ideale per il consumo: " + x.stagioni + ". Le vitamine contenute in questo alimento sono: " + x.vitamine);
    
    const doc = document.createElement('h1');
    doc.innerText = mex;
    const docDiv = document.getElementById('devmes');
    docDiv.appendChild(doc);
}
