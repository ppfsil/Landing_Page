let about = document.querySelector('#about')
let areaProfile = document.querySelector('#area')

async function getApiGithub() {
    try {
        const dataProfile = await fetch('https://api.github.com/users/ppfsil')
        const profile = await dataProfile.json()

        let content = `
            <img src="${profile.avatar_url}" alt="Foto do Perfil do Github - ${profile.name}">
            <article class="section_content">
                <h1>Histórias, desafios e conquistas: descubra quem eu sou além da tecnologia</h1>
                <p>
                Meu nome é Patrícia, sou uma pessoa colaboradora e orientada aos detalhes, com habilidades analíticas e acostumada a trabalhar em ambientes de ritmo acelerado. Atualmente, sou aluna do Programa Generation Brasil como Desenvolvedor Fullstack Java, onde venho desenvolvendo habilidades técnicas e comportamentais que solidifico na prática com o Projeto Integrador - uma rede social de apoio, inclusão e resiliência.

                
                </p>

                <div class="section_github flex">
                    <a class="btn" href="${profile.html_url}">Github</a>
                    <p>${profile.followers} Seguidores</p>
                    <p>${profile.public_repos} Repositórios</p>
                </div>
            </article>
        `
        about.innerHTML += content

    } catch (error) {
        console.log(error)
    }
}

function changeTheme() {
    document.body.classList.toggle('dark-theme')
}

getApiGithub()