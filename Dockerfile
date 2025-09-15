# Estágio 1: Construir a aplicação React
FROM node:20-alpine AS build
WORKDIR /app

# Copiar arquivos do gerenciador de pacotes
COPY package.json bun.lockb ./

# Instalar o Bun e as dependências
RUN npm install -g bun
RUN bun install --frozen-lockfile

# Copiar o restante do código-fonte da aplicação
COPY . .

# Construir a aplicação para produção
RUN bun run build

# Estágio 2: Servir a aplicação com Nginx
FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html

# Remover a pasta pública padrão do Nginx
RUN rm -rf ./*

# Copiar os arquivos construídos do estágio de build
COPY --from=build /app/dist .

# Copiar a configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor a porta 80
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]