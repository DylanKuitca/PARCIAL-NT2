import Vue from 'vue'
import vueForm from 'vue-form'

var options = { 
    validators: {
        'no-espacios': function (params) {
            return !params.includes(' ')
        }, 
        'caracteres-alumno': function(value) {
            return value.length <= 15 && value.length >= 3
        }, 
        'nota-valida': function(value) {
            return value <= 10 && value >= 0
        }
    }
}

Vue.use(vueForm,options)