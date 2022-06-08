<template>

  <section class="src-components-formulario">

      <div class="jumbotron">
        
        <vue-form :state="formState" @submit.prevent="enviar()">
    
          <validate tag="div">
            <label for="nombre">Nombre</label>
            <input
            id="nombre"
            type="text" 
            v-model.trim="formData.nombre" 
            required 
            class="form-control"
            name="nombre" 
            caracteres-alumno
            no-espacios
            />
      
            <field-messages name="nombre" show="$dirty">
              <div class="alert alert-success mt-1">Nombre OK!</div>
              <div slot="required" class="alert alert-danger mt-1">Nombre es un campo requerido</div>
               <div class="alert alert-warning mt-1" slot="caracteres-alumno">El nombre debe estar entre 3 y 15 caractes</div>
            </field-messages>
          </validate>

          
          <validate tag="div">
            <label for="apellido">Apellido</label>
            <input
            id="apellido"
            type="text" 
            v-model.trim="formData.apellido" 
            required 
            class="form-control"
            name="apellido" 
            caracteres-alumno
            no-espacios
            />
      
            <field-messages name="apellido" show="$dirty">
              <div class="alert alert-success mt-1">Apellido OK!</div>
              <div slot="required" class="alert alert-danger mt-1">Apellido es un campo requerido</div>
               <div class="alert alert-warning mt-1" slot="caracteres-alumno">El apellido debe estar entre 3 y 15 caractes</div>
            </field-messages>
          </validate>

          

          <validate tag="div">
            <label for="nota">Nota</label>
            <input
            id="nota"
            type="number" 
            v-model.trim="formData.nota" 
            required 
            class="form-control"
            name="nota" 
            nota-valida
            />
           
            <field-messages name="nota" show="$dirty">
              <div class="alert alert-success mt-1">nota OK!</div>
              <div slot="required" class="alert alert-danger mt-1">La nota es un campo requerido</div>
              <div class="alert alert-warning mt-1" slot="nota-valida">La nota debe estar entre 0 y 10</div>
            </field-messages>
          </validate>
         
     
          <button class="btn btn-success mt-3 mb-3" :disabled="formState.$invalid" type="submit">Enviar</button>

        </vue-form>

        <table class="table table-dark align-middle align-self-center">
          <tr> 
            <!--   <th>Index</th> -->
              <th>Alumno</th>
              <th>Nota</th>
          </tr>
      
          <tr v-for="(alumno, index) in alumnos" :key="index" :style="{color: alumno.estiloNota}"> 
             <!--  <td>{{ index + 1 }}</td> -->
              <td>{{alumno.nombre +" "+ alumno.apellido}}</td>
              <td>{{alumno.nota}}</td>
          </tr>

          <tr v-if="this.getPromedio() > 0" :style="{color: this.getEstiloAlumno(this.getPromedio())}">
            <th scope="row">PROMEDIO</th>
            <td>{{this.getPromedio()}}</td>
          </tr>
          

      </table>

      </div>
  
  </section>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInitialData(),
        alumnos: [],
      }
    },
    methods: {
      getInitialData() {
        return {
          nombre:'',
          apellido:'',
          nota:'',
        }
      },
      enviar() {
        this.formData.estiloNota = this.getEstiloAlumno(this.formData.nota)
        this.alumnos.push(this.formData)
        this.formData = this.getInitialData()
        this.formState._reset()
      },

      getEstiloAlumno(nota) {
        let estilo
        if(nota < 4 && nota >= 0) {estilo = '#f71702'}
        if(nota >= 4 && nota < 7) {estilo = '#e7f702'}
        if(nota >= 7 && nota <= 10) {estilo = '#0af702'}

        return estilo
      },

      getPromedio() {
        let acum = 0
        let cont = 0

        this.alumnos.forEach(alumno => {
          acum += parseInt(alumno.nota)
          cont++
        })

        return acum > 0 ? acum / cont : 0
      }
      


    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
   .jumbotron {
    background-color: lightsalmon;
  }
</style>
