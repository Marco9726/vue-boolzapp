const {
    createApp
} = Vue;

createApp({
    data(){
        return {
            chatActive: 0,
            newMessage: '',
            search: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                        }
                    ]
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ]
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ]
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ]
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                        }
                    ]
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                        }
                    ]
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                        }
                    ]
                }
            ]
        }
    },
    // computed: {
    //     filterContacts(){
    //         if (this.search != ''){

    //         }
    //         let filteredChat = this.contacts.filter((user) => {
    //             return user.name.includes(this.search)
    //         })

    //         return filteredChat
    //     }
    // },
    methods: {
        //creo il metodo per visualizzare l'orario in formato 'ora:minuto'
        messageTime(index){
            // seleziono la proprietà 'date' nell'array attivo (chatActive) e divido l'ora dalla data, poi prendo in considerazione l'ora [1]
            const timeMessage = this.contacts[this.chatActive].messages[index].date.split(' ')[1].split(':')
            //ritorno i primi due elementi dell'array (ora e minuti) con i due punti in mezzo
            return timeMessage[0] + ':' + timeMessage[1];
        },
        //creo il metodo per cambiare il valore di chatActive in base all'index del v-for
        chooseChat(index){
            this.chatActive = index;
        },
        //creo metodo per mandare un nuovo messaggio nella chat
        sendMessage(){
            const dt = luxon.DateTime;
            //nuovo oggetto che ha come valore di 'message' newMessage, e come 'date' la data attuale tramite luxon
            let newObject = {
                date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                message: this.newMessage,
                status: 'sent'
            }
            //inserisco quest'oggetto nell'array messages della chat attiva
            this.contacts[this.chatActive].messages.push(newObject)
        },
        //creo metodo del messaggio di risposta dopo 1 secondo
        answerMessage(){
            setTimeout(() => {
                const dt = luxon.DateTime;
                 //nuovo oggetto che ha come valore di 'message' ok, e come 'date' la data attuale tramite luxon
                let answer = {
                    date: dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS),
                    message: 'ok',
                    status: 'received'
                }
                //inserisco quest'oggetto nell'array messages della chat attiva
                this.contacts[this.chatActive].messages.push(answer)

            }, 1000)

        },
        //creo il metodo per filtrare i contatti
        filterContacts(){
            //creo un vuovo array 'gemello' di contacts
            this.contacts = this.contacts.map((contact) => { 
                //se il name minuscolo include il search minuscolo, la prorietà del contact è visibile, altrimenti il contrario
                if(contact.name.toLowerCase().includes( this.search.toLowerCase() )){
                    contact.visible = true;
                }else {
                    contact.visible = false;
                }
                return contact
            })
        },
        //creo il metodo per mostrare l'arrow nel messaggio all'over di quest'ultimo
        showArrow(index){
            let arrows = document.getElementsByClassName('down-arrow');
            //rimuovo la classe 'd-none' all'arrow in posizione index
            arrows[index].classList.remove('d-none')
        },
        //creo il metodo per nascondere l'arrow nel messaggio al leave di quest'ultimo
        hideArrow(index){
            let arrows = document.getElementsByClassName('down-arrow');
            //aggiungo la classe 'd-none' all'arrow in posizione index
            arrows[index].classList.add('d-none')
        }

    }
}).mount('#app')






