# Adote Futuros
<p align="center"><img src="img/adoteFuturos.jpg"width="70%" height="90%" /></p>

   Entre os jovens que estão no sistema de adoção, quanto mais velhos ficam menores são as probabilidades de serem adotados. Quando pensamos nos jovens que não são adotados na infância, algo preocupante é a questão da educação básica, muitas vezes esses jovens que vieram de lares conturbados não conseguem concluir sequer o ensino fundamental devido a falta de oportunidade. Com isso em mente esse projeto visa expor essa realidade e procurar pessoas que deem apoio financeiro ou até mesmo de tempo (na forma de palestras ou aulas), de modo que isso ajude na instrução desses jovens. O apoio seria voltado para financiar cursos que instruam esses jovens sobre as possibilidades de carreiras profissionais e como prosseguir nos estudos para conseguir trabalhar na profissão que desejar. Desta forma os jovens não sairão desamparados para ingressar na sua vida adulta. 


    Arquitetura MVC                                                                                                                                    
    |                                                                                                                                              
    \--📂 HOGARAPIFINAL                                                                                                                               
        |   README.md                                                                                                                            
        |   .env
        |   .gitignore
        |   package-lock.json
        |   package.json
        |   **server.js**
        \--📂 node_modules
        \--📂 assets
        \--📂src
            |
            |   **app.js**
            |
            📂---configs
            |   **dbconnect.js
            |
            📂---controller
            |       **blogController.js
            |       institutoController.js
            |       solicitanteController.js
            |       voluntarioController.js**
            |
            📂---model
            |       **blogSchema.js
            |       institutoSchema.js
            |       solicitanteSchema.js
            |       voluntarioSchema.js**
            |       
            |
            📂---routes
            |       **blogRoutes.js
            |       institutoRoutes.js
            |       solicitanteRoutes.js
            |       voluntarioRoutes.js**
            |__      teste.js**
