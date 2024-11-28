# 🎮 Show do Milhão - Jogo Interativo

Um jogo de perguntas e respostas inspirado no famoso *Show do Milhão*. O objetivo é responder perguntas organizadas por níveis de dificuldade, acumulando pontos a cada acerto. Uma resposta errada finaliza o jogo.

---

## 📋 Funcionalidades

- **Fluxo do jogo**:
  - Perguntas organizadas por dificuldade (fácil, médio, difícil).
  - Cada resposta correta soma pontos, com maior pontuação para níveis difíceis.
  - Uma resposta errada finaliza o jogo.

- **Sistema de ranking**:
  - Armazena e exibe os melhores desempenhos dos jogadores.

- **Interface amigável**:
  - Tela inicial, tela de jogo com perguntas e alternativas, e tela final com pontuação e opção de reiniciar o jogo.

---

## 🚀 Tecnologias Utilizadas

### **Front-end**
- **React** com **React Router** para navegação.
- **Axios** para comunicação com APIs.
- **CSS** ou **Bootstrap** para estilização.

### **Back-end 1 (Node.js)**
- **Express.js** para criação de rotas.
- **Axios** para comunicação com o Spring Boot.
- **Cors** para gerenciar permissões de requisição.

### **Back-end 2 (Spring Boot)**
- **Spring Boot** com JPA para persistência de dados.
- Banco de dados H2 para armazenamento.

---

## 🛠️ Configuração e Execução

### **Pré-requisitos**
- Node.js (v16 ou superior)
- Java (JDK 17 ou superior)
- Maven
- Gerenciador de pacotes (npm ou yarn)

### **1. Clonando o repositório**
```bash
git clone https://github.com/andrielcf/show-do-milhao.git
cd show-do-milhao
