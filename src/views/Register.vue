<template>
    <main class="container-register">
        <div class="container">
            <h2>Register</h2>
            <form class="grid-container">
                <div class="grid-half">
                    <div class="form-field">
                        <label for="Name">Name</label>
                        <input type="text" id="name" />
                    </div>
                    <div class="form-field">
                        <label for="last-name">Last Name</label>
                        <input type="text" id="last-name" />
                    </div>
                    <div class="form-field">
                        <label for="department">Department</label>
                        <input type="text" id="department" />
                    </div>
                </div>
                <div class="grid-half">
                    <div class="form-field">
                        <label for="email">Email</label>
                        <input type="text" id="email" />
                    </div>
                    <div class="form-field">
                        <label for="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div class="form-field">
                        <label for="re-password">Repeat password:</label>
                        <input type="password" id="re-password" />
                    </div>
                </div>
                <div class="grid-full">
                    <button class="cta-btn">Submit</button>
                </div>
            </form>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Register'
}
</script>

<style scoped lang="scss">
.container {
    margin: 40px auto;

    &-register {
        width: 100%;
        background: url('../assets/register-bckgr.png') center top 120px
            no-repeat;
        background-size: contain;
    }
}

.grid-full {
    margin: 0 auto;
    text-align: center;
}
</style>
