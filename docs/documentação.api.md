# API
Descrição: Fica todos os controllers de rotas da API, mas não de outras funções do backend.
Se é uma rota que os usuários da aplicação fazem acesso está ali, ou sejam, tudo que é um
uma recurso publico da API rest. Essa camada não trata nada de regras, só entende o que foi
pedido, e passa para o service responsavel e retorna a resposta. Por exemplo, você quer fazer
login, ele entende que você quer fazer login, passa para o service de autentificação e retorna
a resposta com o status code correto de acordo com a resposta do service.

# COMMON
Descrição: Aqui fica tudo que é comum para a API no geral.

# CONSTANTS
Descrição: Local que todos os arquivos de configuração ficam localizados, status code, e arquivos
de que deixam a API padronizada. É nessa camada que a API e os services padronizam a troca de
de mensagens. Por exemplo, se um service responde algo, a api procura o que essa resposta quer
dizer e manda o status code correto em relação a resposta do service. Se precisar mudar só precisar
mexer na constante e a regra vale para toda a aplicação.

# LOADERS
Descrição: tudo que é algo que é carregado como algo para api funcionar. Servidor HTTP, banco de dados,
etc. Aqui fica tudo que é carregado ao iniciar o servidor. Mas por exemplo, se não usar algo posso
não carregar. Ficou modular.

# MIDDLEWARE
Descrição: todos os middleware que são de contexto geral da aplicação como um todo e não exclusivo de
um recurso publico da api, é por aqui que posso saber se é um usuário normal ou sua aplicação react,
me pedindo algo por exemplo e enviar. Também centralizo tratamento de erros, log, autentificação,
load balancer, etc.

# MODELS
Descrição: Models do banco de dados. Inclusive pode ter model em bancos diferentes e o service não
precisa pensar como funciona. Toda a interação com o banco de dados fica aqui, se precisar mudar
o banco só precisa mudar o model e não o service, essa camada abstrai isso.

# ROUTES
Descrição: todas as rotas da aplicação que não são de recurso publico, por exemplo o react me pedir
uma biblioteca ou fazer upload de arquivos e fotos.

# SCRIPTS
Descrição: Automatização

# SECURITY
Descrição: Chaves publica e privada para autentificação.

# SERVICES
Descrição: São os provedores de recurso da aplicação. Tudo que é regra de negócio fica encapsulado
no service, e ele só responde para o resto da aplicação. Ele não se preocupa se o os dados vão
para o mongodb ou para o postgres, ele so manda o que quer que salve e o model cuida disso.
Segui o principio de responsabilidade unica até aonde eu consegui.

# UTILS
Descrição: Funções que auxiliam em algo mas não são usadas internamente nos services.

# VALIDATORS
Descrição: Tudo que tem haver com validar alguma coisa fica encapsulado e padronizado ali,
se é pra validar um e-mail, toda a aplicação vai validar da mesma forma e se precisar mudar
como queremos validar algo, muda apenas em um lugar.



