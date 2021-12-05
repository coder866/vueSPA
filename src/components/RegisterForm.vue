<template>
 <div class="flex flex-row justify-between">
     <div>
    <form @submit.prevent="registerUser">
        <BaseInput
            type="text"
            label="Name"
            name="name"
            v-model="user.name"
            placeholder="Big Bugs"
            class="mb-2"
        />
        <BaseInput
            type="email"
            label="Email"
            name="email"
            v-model="user.email"
            placeholder="bigbugs@mail.com"
            class="mb-2"
        />
        <BaseInput
            type="password"
            label="Password"
            name="password"
            v-model="user.password"
            class="mb-2"
        />
        <BaseInput
            type="password"
            label="Confirm Password"
            name="password-confirm"
            v-model="user.passwordConfirm"
            class="mb-4"
        />
        
        <BaseBtn type="submit" text="Register" />
        <FlashMessage :error="error" />
    </form>
    </div>
    <div class="pre">
        <pre>{{user}}</pre>
    </div>

    </div>
</template>

<script>
import { getError } from '@/utils/helpers.js'
import BaseBtn from '@/components/BaseBtn.vue'
import BaseInput from '@/components/BaseInput.vue'
import AuthService from '@/services/AuthService.js'
import FlashMessage from '@/components/FlashMessage.vue'


export default {
    name: 'RegisterForm',
    components: {
        BaseBtn,
        BaseInput,
        FlashMessage,
        
    },
    data() {
        return {
           user:{ 
                name: null,
                email: null,
                password: null,
                passwordConfirm: null,
                },
            error: null,
        }
    },
    methods: {
        registerUser() {
            this.error = null
            const payload = {
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
                password_confirmation: this.user.passwordConfirm,
            }
            console.log("payLOAD1",payload)
            AuthService.registerUser(payload)
                .then(() => this.$router.push('/dashboard'))
                .catch((error) => (this.error = getError(error)))
        },
    },
}
</script>
