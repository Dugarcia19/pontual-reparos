# Pontual Reparos de Calhas

Site profissional para Pontual Reparos de Calhas com layout pronto para publicação.

## Arquivos principais

- `index.html`
- `style.css`
- `script.js`

## Como usar localmente

1. Abra `index.html` no navegador.
2. O site carrega sem necessidade de servidor.

## O que foi incluído

- Header com menu e botão de WhatsApp
- Seção de serviços com cinco itens
- Benefícios, galeria e depoimentos
- Formulário de contato com validação básica
- Botão flutuante de WhatsApp
- Design responsivo para celular, tablet e desktop
- Metadados SEO para ajudar na indexação

## Informações de contato

- Telefone: (43) 99937-8092
- WhatsApp: https://wa.me/5543999378092
- E-mail: contato@pontualcalhas.com.br
- CNPJ: 48.479.862/0001-75
- Endereço: Rua Almirante Alexandrino, Afonso Pena — CEP 83040-420, São José dos Pinhais - PR

## Publicação online

### 1) Usar GitHub Pages

1. Crie um repositório no GitHub com o conteúdo desta pasta.
2. Envie os arquivos para o repositório.
3. No GitHub, abra `Settings` → `Pages`.
4. Selecione a branch `main` ou `master` e a pasta `/`.
5. Clique em `Save`.

Após alguns minutos, seu site estará disponível em `https://<seu-usuario>.github.io/<nome-do-repositório>/`.

## Links e deploys já configurados

- Netlify (produção): https://drayol-gesso.netlify.app
- Repositório principal: https://github.com/Dugarcia19/pontual-reparos
- Repositório do site (cópia): https://github.com/Dugarcia19/pontual-reparos-site

## Notas rápidas

- O site já foi publicado no Netlify (link acima).
- O código está em ambos os repositórios GitHub listados; o remoto `site` aponta para `pontual-reparos-site`.
- Para atualizar o site e publicar no Netlify novamente, rode:

```bash
npx netlify-cli deploy --dir=. --prod
```

## Próximos passos recomendados

- Validar texto e imagens finais (galeria e logo).
- Verificar meta tags e `og:image` para redes sociais.
- Habilitar GitHub Pages se desejar uma alternativa gratuita de hospedagem (Settings → Pages).

### 2) Usar Netlify

1. Crie uma conta no Netlify.
2. Conecte o repositório GitHub ou arraste a pasta para o painel "Deploys".
3. O Netlify publica automaticamente o site.

## Implantação com Git (passo a passo)

1. Inicialize o repositório local e faça o commit inicial:

```bash
git init
git add .
git commit -m "Initial: cleanup, header, styles consolidation, Netlify config"
git branch -M main
```

2. Crie um repositório no GitHub e adicione o remote (substitua `<URL-DO-REPO>`):

```bash
git remote add origin <URL-DO-REPO>
git push -u origin main
```

3. No Netlify, conecte o repositório GitHub e configure a branch `main`. Como este é um site estático, não é necessário comando de build — a pasta de publicação é a raiz do repositório.

4. Alternativamente, você pode fazer deploy manual usando o Netlify CLI:

```bash
npx netlify-cli deploy --dir=. --prod
```

Se quiser, posso tentar criar o repositório no GitHub e fazer o push remoto por você — basta me fornecer permissão (usar `gh` CLI) ou a URL do repositório remoto.

### 3) Aparecer no Google

- Após publicar, acesse o Google Search Console.
- Envie a URL do site para indexação.
- Aguarde o Google rastrear o site.

> Observação: a publicação real depende de uma hospedagem ativa. Eu deixei o site pronto, mas você precisará enviar os arquivos ao GitHub ou Netlify para que ele fique disponível na internet.
