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
            },
            {
                nome: 'Fabio',
                avatar:'css/img/avatar_2.jpg',
            },
            {
                nome: 'Samuele',
                avatar:'css/img/avatar_3.jpg',
            },
            {
                nome: 'Sara',
                avatar:'css/img/avatar_io.jpg',
            },
            {
                nome: 'Pippo',
                avatar:'css/img/avatar_4.jpg',
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