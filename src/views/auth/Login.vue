<template>
    <div class="flex flex-col justify-center ">
        <LoginForm/>
    <!-- <div class="flex  min-h-screen bg-gray-100">
        <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
            <h3 class="text-2xl font-bold text-center">Login to your account</h3>
            <form action="">
                <div class="mt-4">
                    <div>
                        <label class="block" for="email">Email</label>
                                <input v-model="user.email" type="text" placeholder="Email"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="mt-4">
                        <label class="block">Password</label>
                                <input v-model="user.password" type="password" placeholder="Password"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="flex items-baseline justify-between">
                        <button @click="login" class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                        <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                </div>
            </form>
        </div>
    </div> -->
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import axios from 'axios'
export default {
    components: {
        LoginForm,
    },
    // data(){
    //   return {
    //       authClient:null,
    //     user:[{
    //         email:'',
    //         password:''
    //     }],
    //   }
    // },
    
    // mounted(){
    //     // this.authClient = axios.create({
    //     //         baseURL: 'http://lara-api.test',
    //     //         withCredentials: true, // required to handle the CSRF token
    //     //     })
    // },
    // methods:{
    //     login(){
    //        this.authClient.get('/sanctum/csrf-cookie')
    //         .then(response=>{
    //             console.log(response);
    //         }).catch(error=>{
    //             console.log("ERROR",error);
    //         })
    //     }
    // }
}
</script>

<style scoped>
</style>