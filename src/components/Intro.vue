<template>
    <div class="intro">
        <div class="grid-half info-text">
            <h1>It's the best time of the day!</h1>
            <p>
                I know you have been feeling hungry since you came to the office
                this morning and you are fully prepared to make the most
                important choice of the day:
            </p>
            <ul>
                <li>
                    <strong>Quick and easy</strong> find out the actual menus.
                </li>
                <li><strong>Fast and furious</strong> make your choice.</li>
                <li>
                    <strong>Gently and precisely</strong> order your favourite
                    meal.
                </li>
            </ul>
            <p>
                <strong>...Let your lunch breake be longer than usual.</strong>
            </p>
        </div>
        <div class="grid-half info-img-container">
            <img
                src="../assets/boy-girl-lunch-time.png"
                class="info-img"
                alt="boy-and-girl-eating"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Intro'
}
</script>

<style scoped lang="scss">
.intro {
    width: 100%;
    display: flex;
    align-items: center;
    border: 5px solid #79c150;
    border-radius: 15px;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);

    ul {
        list-style: disc inside;
    }
}

.info {
    text-align: left;

    &-img {
        max-width: 100%;
        max-height: 300px;

        &-container {
            text-align: center;
            max-height: 300px;
        }
    }
}
</style>
