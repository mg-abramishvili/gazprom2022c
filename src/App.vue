<template>
    <div class="wrapper">
        <template v-for="(page, index) in pages">
            <div v-if="selected.page == index + 1" class="page">
                <img :src="page" alt="" />

                <div v-if="selected.page == 1" class="index">
                    <ul class="menu">
                        <li @click="selectPage(2)">Организационно-профсоюзная работа</li>
                        <li @click="selectPage(3)">Общественный контроль за состоянием условий и охраны труда</li>
                        <li @click="selectPage(6)">Правовая и колдоговорная работа</li>
                        <li @click="selectPage(7)">Социальная, спортивная и культурно-массовая работа</li>
                        <li @click="selectPage(12)">Информационная работа и работа с молодежью</li>
                    </ul>
                </div>
            </div>
        </template>
        <div v-if="views.panel" class="panel">
            <button :class="{ hidden: !prevButton }" @click="prevPage()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                </svg>
            </button>
            <button @click="selectPage(1)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
            </button>
            <button :class="{ hidden: !nextButton }" @click="nextPage()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                </svg>
            </button>
        </div>

        <div v-if="views.fadeout" class="fadeout"></div>

        <v-idle :duration="60" :events="['click', 'touchstart', 'touchmove', 'touchend', 'mousemove', 'scroll']" @idle="selectPage(1)" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            pages: [
                '/pages/01.svg',
                '/pages/02.svg',
                '/pages/03.svg',
                '/pages/04.svg',
                '/pages/05.svg',
                '/pages/06.svg',
                '/pages/07.svg',
                '/pages/08.svg',
                '/pages/09.svg',
                '/pages/10.svg',
                '/pages/11.svg',
                '/pages/12.svg',
                '/pages/13.svg',
            ],

            selected: {
                page: 1,
            },

            views: {
                panel: false,
                fadeout: false,
            }
        }
    },
    mounted() {
        document.oncontextmenu = new Function("return false;")
    },
    computed: {
        prevButton() {
            let index = this.selected.page - 1

            if(this.pages[index - 1] && this.selected.page != 2) {
                return true
            } else {
                return false
            }
        },
        nextButton() {
            let index = this.selected.page - 1

            if(this.pages[index + 1]) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        selectPage(page) {
            if(this.selected.page == page) {
                return
            }

            this.views.fadeout = true

            setTimeout(() => {
                this.selected.page = page

                if(this.selected.page == 1) {
                    this.views.panel = false
                } else {
                    this.views.panel = true
                }
            }, 150)

            setTimeout(() => {
                this.views.fadeout = false
            }, 300)
        },
        prevPage() {
            let index = this.selected.page - 1

            if(this.pages[index - 1]) {
                this.selectPage(this.selected.page - 1)
            }
        },
        nextPage() {
            let index = this.selected.page - 1

            if(this.pages[index + 1]) {
                this.selectPage(this.selected.page + 1)
            }
        }
    }
}
</script>

<style>
html, body {
        margin: 0;
        position: relative;
        width: 1920px;
        height: 1080px;
        overflow: hidden;
        font-family: 'HeliosCond';
        font-weight: 400;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        cursor: none;
    }
    .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: #fff;
        color: #333;
    }
    .page img {
        width: 100%;
        height: 100%;
    }
    .panel {
        position: fixed;
        bottom: 2vh;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 15;
        display: flex;
        align-items: center;
        margin: 0 auto;
        justify-content: center;
    }
    .panel button {
        background-color: #1D74BB;
        color: #fff;
        width: 6vh;
        height: 6vh;
        padding: 1.5vh;
        box-shadow: none;
        border: 0;
        border-radius: 100%;
        margin: 0 1vh;
    }
    .panel button:active {
        background-color: #107883;
        opacity: 0.8;
    }
    .panel button svg {
        width: 100%;
        height: 100%;
    }
    .index {
        position: absolute;
        z-index: 1;
        top: 18vh;
        left: 52.5vw;
        right: 0vh;
        display: flex;
        align-items: flex-start;
    }
    .index ul {
        padding: 0;
        margin: 0;
        list-style: none;
        padding-left: 2.7vh;
    }
    .index ul li {
        width: 40vh;
        height: 13.5vh;
        line-height: 1;
        background: transparent;
        opacity: 0.5;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: transparent;
    }
    .index ul li:nth-child(1) {
        width: 37vh;
        height: 13.5vh;
    }
    .index ul li:nth-child(2) {
        margin-top: 1vh;
        margin-left: 33vh;
    }
    .index ul li:nth-child(3) {
        margin-top: 1vh;
    }
    .index ul li:nth-child(4) {
        margin-left: 33vh;
        margin-top: 1vh;
        width: 44vh;
    }
    .index ul li:nth-child(5) {
        margin-top: 1vh;
    }
    .index ul li:active {
        background-color: rgba(29, 116, 187, 0.25);
        color: transparent;
    }
    .fadeout {
        position: absolute;
        z-index: 10;
        background-color: #fff;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        animation-name: fadeout;
        animation-duration: 0.2s;
    }
    @keyframes fadeout {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    .hidden {
        visibility: hidden;
    }
</style>
