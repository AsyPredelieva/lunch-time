<template>
    <main class="login-container">
        <div class="container">
            <h2>Lunch time</h2>
            <form>
                <div class="form-field">
                    <label for="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div class="form-field">
                    <label for="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <button class="cta-btn">Log in</button>
            </form>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            // users
        }
    }
}
</script>

<style scoped lang="scss">
.login-container {
    width: 100%;
    background: url('../assets/login-bckgr.png') right top 40px no-repeat;
    background-size: contain;
}

.container {
    margin: 40px auto;
}

form {
    width: 465px;
    max-width: 100%;
    margin: 0 auto;
}
</style>
