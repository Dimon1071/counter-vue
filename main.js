const App = {
  data() {
    return {
      title: 'Счетчик',
      placeholderString: 'Введите название заметки',
      inputValue: '',
      noutes: []
    }    
  },

  methods: {
    addNewNote(){
      if(this.inputValue != '') {
        this.noutes.push(this.inputValue)
        this.inputValue = ''
      } 
    },

    toUpperCase(item) {
      return item.toUpperCase()
    },

    deleteNote(index) {
      this.noutes.splice(index, 1)
    },
    
  },

  computed: {
    doubleCountComputed() {
      return this.noutes.length * 2
    }
  },

  watch: {
    inputValue(value) {
      if(value.length > 10) {
        this.inputValue = ''
      }
    }
  }

};

Vue.createApp(App).mount('#app')

