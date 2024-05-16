<v-app-bar>
    Login
</v-app-bar>

<script>

    export default {

        methods: {
        goTo(path) {
        this.$router.push(path)
        }
   } 
}
    
</script>