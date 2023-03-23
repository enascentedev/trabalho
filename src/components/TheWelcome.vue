<script>
export default {
  data() {
    return {
      image: { background: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(/src/assets/fundomundodedados.jpg)" }
    };
  }
};
// export default {
//   data() {
//     return {
//       fundovisivel: false
//     }
//   },
//   methods: {
//     handleclick() {
//       this.fundovisivel = !this.fundovisivel;
//     }
//   }
// }
</script>


<template >
  <div id="teste-backgroudcolor">
    <header class="image">
      <img v-if ="fundovisivel" alt="fundo" src= "../assets/fundomundodedados.jpg">
    
    <!-- <div v-if ="fundovisivel" class="h-screen bg-fixed" style ="background-image: url ('../assets/fundomundodedados.jpg')"></div> -->
      <div :style="image">
          <header class="mt-50 top-5 z-40">
            <nav class="flex items-center justify-between" aria-label="Global">
              <img class="h-30 w-200" src="https://master.webtrack.com.br/webprice.com.br/wp-content/uploads/2022/05/WebPriceW-copy-B-300.png" alt="" href="#nome do site ">
                <a href="#endereço do site " class="text-2xl font-semibold leading-6 text-gray-900">Quem somos</a>

                <a href="#" class="text-2xl font-semibold leading-6 text-gray-900"><RouterLink to="/produtos">Produtos</RouterLink></a>

                <a href="#" class="text-2xl font-semibold leading-6 text-gray-900"><RouterLink to="/cases">Cases</RouterLink></a>

                <a href="#" class="text-2xl font-semibold leading-6 text-gray-900"><RouterLink to="/contato">Contato</RouterLink></a >

                <a href="#" class="text-2xl font-semibold leading-6 text-gray-900">Login<span aria-hidden="true">&rarr;</span></a>

            </nav>
            <div class="lg:hidden" role="dialog" aria-modal="true">
              <div class="fixed inset-0 z-50"></div>
              <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-red px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                  <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <img class="h-8 w-auto" src="https://media.licdn.com/dms/image/C4D22AQFv1NSfQY6Ccg/feedshare-shrink_2048_1536/0/1678817471878?e=1681948800&v=beta&t=32rzuNwmKDzpaHBwb18YElKFz8SWcCOh1aSL7Y7gjO8" alt="">
                  </a>
                  <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Close menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
              </div>
            </div>
          </header>

        <div class="relative isolate pt-2">
          
          <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-5">
            <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div class="flex">
                <div class="relative flex items-center gap-x-4 rounded-full py-1 px-4 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span class="font-semibold text-blue-900 text-3xl">Você usa dados ?</span>
                  <span class="h-4 w-px bg-gray-900/10" aria-hidden="true"></span>
                  <a href="#" class="flex items-center gap-x-1">
                    <span class="absolute inset-0 text-lg" aria-hidden="true"></span>
                    <span class ="text-3xl">Faça o teste aqui</span>
                    <svg class="-mr-2 h-10 w-10 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
              <h1 class="mt-8 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Os dados do seu concorrente na palma da sua mão</h1>
              <p class="mt-6 text-lg leading-8 text-gray-600">Acompanhe as movimentações de mercado e monitore as ações do seu concorrente e tenha o melhor preço de venda.</p>
              <div class="mt-8 flex items-center gap-x-6">
                <a href="#" class="rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">começar</a>
                <button @click="handleclick" class="rounded-md bg-yellow-500 hover:bg-gray-400 text-white shadow-sm hover:bg-indigo-500 font-bold py-2 px-4 rounded-l">
                    com dados
                </button>
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <svg viewBox="0 0 366 729" role="img" class="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                <title>App screenshot</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect width="316" height="684" rx="36" />
                  </clipPath>
                </defs>
                <path fill="#4B5563" d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" />
                <path fill="#343E4E" d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" />
                <foreignObject width="316" height="684" transform="translate(24 24)" clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)">
                  <img src="https://media.licdn.com/dms/image/C4D22AQFv1NSfQY6Ccg/feedshare-shrink_2048_1536/0/1678817471878?e=1681948800&v=beta&t=32rzuNwmKDzpaHBwb18YElKFz8SWcCOh1aSL7Y7gjO8" alt="" />
                </foreignObject>
              </svg>
            </div>
          </div>
        </div>
      </div>
    <!--  -->
    <!--  -->
    <div class="bg-blue-900 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-6xl font-semibold leading-7 text-yellow-400">Web Global</h2>
          <p class="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">Queremos revolucionar o mercado online através do nosso conhecimento em tecnologia e negócios, democratizando o uso de Big Data para varejistas e fabricantes dos mais variados segmentos e portes.</p>
          <p class="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">Através de um sistema online você acessa relatórios, painéis, rankings e gráficos com informações atualizadas, várias vezes ao dia, do seu mercado e concorrência, trazendo agilidade e profundidade para suas análises.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z" />
                  <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z" />
                  <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z" />
                  <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z" />
                </svg>

                <span class="text-4xl">PARA FABRICANTES</span>
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p class="flex-auto text-4xl">Monitorando o mercado, fabricantes preveem os movimentos da concorrência e têm clareza para tomar decisões ágeis e assertivas baseadas em dados.</p>
                <p class="mt-6">
                  <a href="https://webprice.com.br/fabricantes/" class="text-2xl font-semibold leading-6 text-blue-400">Saiba mais <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>

            <div class="flex flex-col">
              <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z"></path>
                  <path clip-rule="evenodd" fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z"></path>
                </svg>
                <span class="text-4xl">PARA LOJISTAS</span>
              </dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                <p class="flex-auto text-4xl">Acessando informações de forma automática, empresas do varejo identificam quais e como players do mesmo segmento anunciam determinados produtos por categoria.</p>
                <p class="mt-6">
                  <a href="https://webprice.com.br/lojistas/" class="text-2xl font-semibold leading-6 text-blue-400">saiba mais <span aria-hidden="true">→</span></a>
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!--  -->
    <!--  -->
    <img src="../assets/mundo.jpeg" alt="clientes mundo">
    <div class="relative isolate overflow-hidden bg-yellow-300">
      <div class="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-blue sm:text-4xl">Base no Brasil .<br>Olhos no mundo.</h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue">Monitoramos e exportamos dados sem fronteiras.</p>
        </div>
      </div>
  
      
    </div>

    <!--  -->
    <iframe class="block w-full rounded-md px-3.5 py-2.5 text-center text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.318160050954!2d-51.17317052369289!3d-30.027728894370952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519798b7a814615%3A0xce1ce9c203be2b62!2sWebGlobal!5e0!3m2!1spt-BR!2sbr!4v1679421152070!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <!--  -->
    
    <footer class="bg-white w-full">
      <div class="w-full mt-10">
        
        <div class="flex justify-between  text-gray-900 sm:text-2xl">
          <div class="">
            <p>Endereço</p>
            <p>Rua Valdir Antônio Lopes, nº 221 </p>
            <p>1º, 3º e 4º andar</p>
            <p>Porto Alegre/RS CEP: 91330-000</p>
            
          </div>

          <div class="">
            <p>Telefones:</p>
            <p>Porto Alegre/RS + 55 (51) 3276.6485</p>
            <p>São Paulo/SP: + 55 (11) 97670.5858</p>
            
          </div>
          <div class="flex justify-center space-x-20 md:order-5">
          <a href="https://www.facebook.com/webglobalbr" class="text-gray-400 text-xl hover:text-gray-500">
            <span class="sr-only">Facebook</span>
            <svg class="h-20 w-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
            </svg>
          </a>

          <a href="https://www.instagram.com/webglobalbr/" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Instagram</span>
            <svg class="h-20 w-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="https://www.youtube.com/channel/UCpv7O-ow1mQwGZ-yi88aRZQ/featured" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">YouTube</span>
            <svg class="h-20 w-20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        </div>
      </div>
    </footer>
    <!--  -->
  </header>
    </div>
  
</template>

<style scoped>
  header .image {
    
    background-image: url(../assets/fundomundodedados.jpg);
    background-size: cover;
    background-position: center;
  }
  
</style> 