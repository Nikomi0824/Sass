<!-- eslint-disable vue/multi-word-component-names -->
<template>
     <form> 
            <div class="Input contener">
                <input   placeholder="Your name">
                <input  placeholder="Email">
            </div>
           <input placeholder="Your name">
            <button v-on:click="Conclusion">send</button>
        </form>
      
</template>

<script>

export default{
    name:'ContactBlockInput',
  
}
</script>

<style scoped lang="scss">
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
            border: 1px solid #CAD1E1;
            border-radius: 4px;
            width: 749.73px;
            height: 81.65px;
        }
    .Input{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        width: 100%;
        input{
            border: 1px solid #CAD1E1;
            border-radius: 4px;
            width: 362.49px;
            height: 50.72px;
        }
    }

}
</style>