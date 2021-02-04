var app = new Vue({
    el: '#app',
    mounted: function () {
        console.log(this.contatti);
        console.log(this.contatti[0].nome);
    },
    data: {
        
        contatti: [
            {
                nome: 'Michele',
                avatar:'css/img/avatar_1.jpg',
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'Sushi??',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Si andiamo a pranzo',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'ok a dopo!',
                    status: 'sent'
                    }
                    ],
            },
            {
                nome: 'Berny',
                avatar:'css/img/avatar_8.jpg',
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'Usciamo',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Si andiamo al parco',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'ok alle 3',
                    status: 'sent'
                    }
                    ],
            },
            {
                nome: 'Angelo',
                avatar:'css/img/avatar_7.jpg',
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'Sushi??',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Si andiamo a pranzo',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'ok a dopo!',
                    status: 'sent'
                    }
                    ],
            },
            {
                nome: 'Fabio',
                avatar:'css/img/avatar_2.jpg',
                messages: [
                    {
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                    },
                    {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                    },
                    {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                    }
                    ],
            },
            {
                nome: 'Roberto',
                avatar:'css/img/avatar_3.jpg',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                    }
                    ],
            },
            {
                nome: 'Sara',
                avatar:'css/img/avatar_io.jpg',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Che fai',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Studio, tu?',
                    status: 'received'
                    }
                    ],
            },
            {
                nome: 'Mladen',
                avatar:'css/img/avatar_4.jpg',
                messages: [
                    {
                    date: '10/01/2020 15:30:55',
                    text: 'Andiamo al Clorophilla?',
                    status: 'sent'
                    },
                    {
                    date: '10/01/2020 15:50:00',
                    text: 'Si andiamo!',
                    status: 'received'
                    }
                    ],
            },
            {
                nome: 'Valerio De Vivo',
                avatar:'css/img/avatar_5.jpg',
            },
        ],
        active: {
            nome: 'Michele' ,
            avatar:'css/img/avatar_1.jpg'
        },
        write:'',
        search:'',
        hover: '',
        indice: ''
    },
    methods: {

        //. user attivo 
        attivo(i) {
            this.active.nome = this.contatti[i].nome;
            this.active.avatar = this.contatti[i].avatar;
        },

        //. Invio messaggio 
        writeMex(){
            this.contatti.forEach(element => {

                if (element.nome == this.active.nome) {
                    moment.locale();         
                    let data = moment().format('l,HH:m:ss');

                    //.. INVIO 
                    element.messages.push({
                        date: data,
                        text: this.write,
                        status: 'received'
                    });

                    
                    //.. RISPOSTA OK 
                    setTimeout(() => element.messages.push({
                        date: data,
                        text: 'si',
                        status: 'sent'
                    }) , 2000);
                }

            });
            this.write = '';
        },

        //. INFO 

        hoverinfo(i) {
            (this.hover == 'active') ? this.hover = '' : this.hover = 'active';
            console.log(i);
            this.indice = i;
        },

        
    }
}); 