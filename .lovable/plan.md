# Página premium de vendas do PlayStation 5

## Resultado
Transformar a página inicial existente em uma apresentação independente e responsiva do PlayStation 5, com identidade grafite, branco e vermelho, sem preços ou contatos inventados. A página secundária existente será preservada.

## Implementação
- Criar um cabeçalho fixo com marca “PS5”, navegação interna para Benefícios, Especificações, Oferta e FAQ, além do CTA “Quero meu PS5”.
- Reconstruir a primeira dobra com a mensagem solicitada, dois CTAs internos e uma representação autoral do console e controle feita em CSS, sem imagens externas.
- Adicionar as seções completas de benefícios, especificações, oferta, confiança, FAQ, CTA final e rodapé com o aviso de independência.
- Usar os componentes de botão existentes e aplicar interações discretas, estados de foco acessíveis e navegação suave.
- Adaptar a composição, grades, tipografia e menus para desktop e celular.

## Conteúdo e comportamento
- Todos os textos técnicos e comerciais seguirão exatamente o briefing, incluindo “Consulte o preço”.
- Os CTAs de compra levarão à seção de oferta; os CTAs de especificações levarão à seção correspondente.
- O FAQ será interativo com elementos nativos expansíveis.
- Nenhuma afirmação sugerirá vínculo oficial com Sony ou PlayStation.

## Detalhes técnicos
- Substituir apenas o conteúdo da rota inicial e adicionar estilos sem remover a estrutura do TanStack Start.
- Manter tokens semânticos em `src/styles.css`, sem cores avulsas nos componentes.
- Atualizar os metadados da página inicial para o novo conteúdo e preservar as demais rotas.
- Registrar a decisão visual do projeto e validar a página no preview em desktop e mobile, além de conferir erros de build e execução.
