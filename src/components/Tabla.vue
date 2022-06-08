<template>

  <section class="src-components-tabla">
    <div class="container-fluid mt-3">
      <div class="jumbotron">

        <!-- <table class="table">
         <thead>
            <tr>
              <th scope="col">Numero de Pregunta</th>
              <th scope="col">Respuesta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Respuesta 1</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Respuesta 2</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Respuesta 3</td>
            </tr>
          </tbody>
        </table> -->
         <table class="table table-dark align-middle align-self-center">
          <tr> 
              <th>Numero de Pregunta</th>
              <th>Respuesta</th>
          </tr>
      
          <tr v-for="(pregunta, index) in preguntas" :key="index"> 
              <td>{{pregunta.numeroPregunta}}</td>
              <td>{{pregunta.respuesta}}</td>
          </tr>
      </table>

      </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-tabla',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas: [
          {numeroPregunta: '1', respuesta: '[c]'},
          {numeroPregunta: '2', respuesta: '[c]'},
          {numeroPregunta: '3', respuesta: '[b]'},
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-tabla {
  }
  .jumbotron {
    background-color: rgb(38, 211, 202);
  }

</style>
