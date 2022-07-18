//creo un array che contiene gli oggetti 


const team =[

                {
                    'NOME': 'Wayne Barnett',
                    'RUOLO' : 'Founder & CEO',
                    'IMMAGINE' : 'wayne-barnett-founder-ceo.jpg',
                },

                {
                    'NOME' : 'Angela Caroll',
                    'RUOLO' : 'Chief Editor',
                    'IMMAGINE': 'angela-caroll-chief-editor.jpg',

                },

                {
                    'NOME' : 'Walter Gordon',
                    'RUOLO' : 'Office Manager',
                    'IMMAGINE': 'walter-gordon-office-manager.jpg',

                },

                {
                    'NOME' : 'Angela Lopez',
                    'RUOLO' : 'Social Media Manager',
                    'IMMAGINE': 'angela-lopez-social-media-manager.jpg',

                },

                {
                    'NOME' : 'Scott Estrada	',
                    'RUOLO' : 'Developer',
                    'IMMAGINE':'scott-estrada-developer.jpg',

                },

                {
                    'NOME' : 'Barbara Ramos',
                    'RUOLO' : 'Graphic Designer',
                    'IMMAGINE':'barbara-ramos-graphic-designer.jpg',

                },
            ];      	         

for (let i = 0; i < team.length; i++){
    
    console.log(team[i].NOME,("     ") ,team[i].RUOLO,("       "),team[i].IMMAGINE);
  
    
    


    
}