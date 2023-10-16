<template>
    <footer>
        <div class="footer container">
            <div class="social">
                <router-link class="home" to="/">
                    <img src="../../assets/icon/g.svg" alt="">
                </router-link>

                <!-- Redes Sociais-->
                <div class="rede-social">
                    <button>
                        <i class='bx bxl-facebook'></i>
                    </button>
                    <button>
                        <i class='bx bxl-linkedin'></i>
                    </button>
                    <button>
                        <i class='bx bxl-twitter'></i>
                    </button>
                    <button>
                        <i class='bx bxl-instagram'></i>
                    </button>
                </div>
            </div>


            <div class="sobre">
                <div class="market">
                    <h2>Marketplace</h2>
                    <a href="/">Explore</a>
                    <a href="/">NFTs</a>
                    <a href="/">Colecionáveis</a>
                    <a href="/">Virtual</a>
                </div>
                <div class="companhia">
                    <h2>Companhia</h2>
                    <a href="/">Sobre nós</a>
                    <a href="/">Suporte</a>
                    <a href="/">Carreiras</a>
                    <a href="/">Boletim de Notícias</a>
                </div>
                <div class="recursos">
                    <h2>Rescursos</h2>
                    <a href="/">Parceiros</a>
                    <a href="/">Blogs</a>
                    <a href="/">Central de ajuda</a>
                    <a href="/">Ao vivo</a>
                </div>
            </div>


        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Footer',
    data() {
        return {};
    },

});
</script>

<style lang="scss" scoped>
footer {
    width: 100%;
    height: 100%;
    margin-top: 5rem;
    background-color: #08061F;
    color: #fff;

    .home {
        display: flex;
        justify-content: center;
        padding: 2rem 0;
    }

    .rede-social {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;

        button {
            background: none;
            border: none;
            color: #fff;
            margin: 0 0.7rem;
            background-color: #261437;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
        }

        button:hover {
            background: linear-gradient(91deg, #782EFD 0%, #A61FFB 47.81%, #DE0CF8 100%);
        }

        button i {
            margin-top: 4px;
            font-size: 1.7rem;
            font-weight: 500;
        }

        // #782EFD, #A61FFB, #DE0CF8
    }

    .sobre {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 2rem;

        .market,
        .companhia,
        .recursos {
            display: flex;
            flex-direction: column;
            text-align: center;
        }

        h2 {
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(to right, #523BFF 10%, #FF00F6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        a {
            color: #fff;
            margin: 0.3rem 0;
            font-size: 1.3rem;
        }
    }
}

@media screen and (min-width: 768px) {
    footer {
        .sobre {
            flex-direction: row;
            justify-content: space-around;

            .market,
            .companhia,
            .recursos {
                flex-direction: column;
            }

        }
    }
}

@media screen and (min-width: 1024px) {
    footer {
        .footer {
            display: flex;
            width: 100%;


            .social {
                width: 20%;
                margin-right: 5rem;
            }

            .sobre {
                flex-direction: row;
                justify-content: space-evenly;
                width: 100%;

                .market,
                .companhia,
                .recursos {
                    flex-direction: column;
                    margin-top: 1.2rem;
                }

            }
        }


    }
}
</style>