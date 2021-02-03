var app = new Vue({
    el: '#app',
    mounted: function () {
        console.log(this.contatti);
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
            nome: '',
            avatar:''
        }
    },
    methods: {
        attivo(i) {
            this.active.nome = this.contatti[i].nome;
            this.active.avatar = this.contatti[i].avatar;
            
        }
    }
}); 