//creo un array che contiene gli oggetti 


const team = [

    {
        'NOME': 'Wayne Barnett',
        'RUOLO': 'Founder & CEO',
        'IMMAGINE': 'wayne-barnett-founder-ceo.jpg',
    },

    {
        'NOME': 'Angela Caroll',
        'RUOLO': 'Chief Editor',
        'IMMAGINE': 'angela-caroll-chief-editor.jpg',

    },

    {
        'NOME': 'Walter Gordon',
        'RUOLO': 'Office Manager',
        'IMMAGINE': 'walter-gordon-office-manager.jpg',

    },

    {
        'NOME': 'Angela Lopez',
        'RUOLO': 'Social Media Manager',
        'IMMAGINE': 'angela-lopez-social-media-manager.jpg',

    },

    {
        'NOME': 'Scott Estrada	',
        'RUOLO': 'Developer',
        'IMMAGINE': 'scott-estrada-developer.jpg',

    },

    {
        'NOME': 'Barbara Ramos',
        'RUOLO': 'Graphic Designer',
        'IMMAGINE': 'barbara-ramos-graphic-designer.jpg',

    }
];
let containerCardDom = document.getElementById('container-card');

for (let i = 0; i < team.length; i++) {

    //console.log ([team[i].NOME,]);

    console.log([team[i].NOME, team[i].RUOLO, team[i].IMMAGINE]);


    creaCard(team[i])                              



}






function creaCard(team) {


containerCardDom.innerHTML +=   
                                       `<div class="card">
                                      <img src="./img/${team.IMMAGINE}"/>
                                      <h1>${team.NOME}</h1>
                                      <h2>${team.RUOLO}</h2>
                                     </div>` ;




}
