# 📝 Todo App - Documentação Completa

Um **aplicativo completo de gerenciamento de tarefas** desenvolvido com **HTML, CSS e JavaScript puro** (vanilla JS). Ideal para aprender os fundamentos do desenvolvimento web frontend!

---

## 🎯 O Que Você Vai Aprender

### HTML
- ✅ Estrutura semântica (`<header>`, `<main>`, `<footer>`)
- ✅ Formulários e inputs com validação
- ✅ Elementos interativos (buttons, checkboxes, atributos data-*)
- ✅ Acessibilidade básica (labels, roles)
- ✅ Boas práticas de HTML5

### CSS
- ✅ **Variáveis CSS** (custom properties) para reutilizar valores
- ✅ **Flexbox** para layouts responsivos
- ✅ **Grid** para seções estruturadas
- ✅ **Animações** (@keyframes) e transições suaves
- ✅ **Gradientes** de cores modernas
- ✅ **Media Queries** para responsividade mobile-first
- ✅ **Pseudo-classes** (:hover, :focus, :disabled, :checked)
- ✅ **Box Shadow** e efeitos visuais

### JavaScript
- ✅ **DOM Manipulation** (createElement, appendChild, innerHTML)
- ✅ **Event Listeners** (click, keypress, change)
- ✅ **Array Methods** (push, filter, find, forEach, map)
- ✅ **Objetos e Arrays** como estrutura de dados
- ✅ **LocalStorage** para persistência de dados
- ✅ **Funções** e escopo em JavaScript
- ✅ **Strings e métodos** (trim, slice, etc)
- ✅ **Validação de entrada** e tratamento de erros
- ✅ **Arrow Functions** e Callbacks

---

## 📂 Estrutura de Arquivos

```
todo-app/
├── index.html          # 🏗️  Estrutura HTML
├── style.css           # 🎨 Estilos CSS
├── script.js           # ⚡ Lógica JavaScript
├── README.md           # 📖 Este arquivo
├── FLUXOGRAMA.md       # 🔄 Diagramas de fluxo
└── ANOTACOES.md        # 📝 Anotações de aprendizado
```

---

## 🚀 Como Usar

### 1. Abrir o Projeto

#### Opção A: Live Server (VS Code) - RECOMENDADO
```bash
# Instale a extensão "Live Server" no VS Code
# Clique com botão direito em index.html
# Selecione "Open with Live Server"
# App abre em http://localhost:5500
```

#### Opção B: GitHub Codespaces
```bash
# Acesse: https://github.com/codespaces
# Crie codespace em seu repositório
# Abra terminal e execute:
python3 -m http.server 8000
# Acesse: http://localhost:8000
```

#### Opção C: Simples (browser local)
```bash
# Apenas abra o arquivo:
# Clique duplo em index.html
# OU arraste para o navegador
# ⚠️ localStorage pode não funcionar
```

### 2. Usar a Aplicação

| Ação | Como Fazer |
|------|-----------|
| 📝 **Adicionar Tarefa** | Digite na caixa e clique "Adicionar" ou pressione ENTER |
| ✅ **Marcar Concluída** | Clique no checkbox da tarefa |
| 🗑️ **Deletar Tarefa** | Clique no botão "Deletar" (aparece ao passar mouse) |
| 🔍 **Filtrar** | Clique em "Todas", "Pendentes" ou "Concluídas" |
| 🧹 **Limpar Concluídas** | Clique em "Limpar Concluídas" para remover todas concluídas |

---

## 💡 Conceitos Explicados

### HTML Semântico

```html
<!-- Bom: Semântico ✅ -->
<header>
  <h1>Título Principal</h1>
</header>

<!-- Ruim: Sem semântica ❌ -->
<div>
  <div>Título Principal</div>
</div>
```

**Por que semântica?**
- Melhor para SEO (Google entende melhor)
- Melhor para acessibilidade (leitores de tela)
- Código mais legível para devs

### CSS: Variáveis

```css
:root {
  --primary-color: #6366f1;
  --spacing-sm: 1rem;
}

/* Usar variável */
button {
  background-color: var(--primary-color);
  padding: var(--spacing-sm);
}

/* Trocar uma variável em um lugar muda em todos! */
:root {
  --primary-color: #ff0000; /* Agora todos botões são vermelhos */
}
```

### CSS: Flexbox

```css
.container {
  display: flex;
  flex-direction: column;      /* Itens em coluna */
  justify-content: center;     /* Centraliza na horizontal */
  align-items: center;         /* Centraliza na vertical */
  gap: 1rem;                   /* Espaço entre itens */
}
```

**Antes (sem flexbox):**
```
Item 1
Item 2
Item 3
```

**Depois (com flexbox):**
```
        [Item 1]
        [Item 2]
        [Item 3]
```

### CSS: Animações

```css
@keyframes slideIn {
  from {
    opacity: 0;              /* Invisível */
    transform: translateX(-20px);  /* Deslocado esquerda */
  }
  to {
    opacity: 1;              /* Visível */
    transform: translateX(0); /* Posição normal */
  }
}

.todo-item {
  animation: slideIn 0.3s ease;  /* Usa animação */
}
```

**Resultado:** Tarefas aparecem vindo da esquerda! 🎬

### JavaScript: Array Methods

```javascript
const todos = [
  { id: 1, text: "Estudar", completed: false },
  { id: 2, text: "Trabalhar", completed: true },
  { id: 3, text: "Exercitar", completed: false }
];

// PUSH: Adiciona ao final
todos.push({ id: 4, text: "Dormir", completed: false });

// FILTER: Cria novo array com condição
const pendentes = todos.filter(t => !t.completed);
// Resultado: [id:1, id:3]

// FIND: Encontra um elemento
const tarefa = todos.find(t => t.id === 2);
// Resultado: { id: 2, text: "Trabalhar", completed: true }

// MAP: Transforma cada elemento
const textos = todos.map(t => t.text);
// Resultado: ["Estudar", "Trabalhar", "Exercitar", "Dormir"]

// FOREACH: Executa função para cada elemento
todos.forEach(t => console.log(t.text));
// Imprime: Estudar, Trabalhar, Exercitar, Dormir
```

### JavaScript: LocalStorage

```javascript
// SALVAR
const dados = { nome: "João", idade: 30 };
localStorage.setItem('usuario', JSON.stringify(dados));
// Armazena como string: '{"nome":"João","idade":30}'

// CARREGAR
const usuario = JSON.parse(localStorage.getItem('usuario'));
// Converte string de volta para objeto
console.log(usuario.nome); // "João"

// DELETAR
localStorage.removeItem('usuario');

// LIMPAR TUDO
localStorage.clear();
```

**Por que JSON.stringify/parse?**
- localStorage só guarda texto
- JSON converte objeto para texto e vice-versa

---

## 🎨 Funcionalidades

### ✅ Implementadas

| Feature | Status | Descrição |
|---------|--------|-----------|
| ➕ Adicionar tarefas | ✅ | Valida entrada (min 3 caracteres) |
| ✏️ Deletar tarefas | ✅ | Com confirmação antes |
| ✓ Marcar concluída | ✅ | Toggle entre concluída/pendente |
| 🔍 Filtrar | ✅ | Todas, Pendentes, Concluídas |
| 📊 Estatísticas | ✅ | Total, Concluídas, Pendentes |
| 🧹 Limpar concluídas | ✅ | Remove todas de uma vez |
| 💾 Persistência | ✅ | Salva em localStorage |
| 📱 Responsividade | ✅ | Funciona em mobile |
| 🎬 Animações | ✅ | Slide-in ao adicionar |
| ♿ Acessibilidade | ✅ | Semântica HTML, labels |

### 🔄 Próximas Melhorias

- [ ] Editar tarefas após criação
- [ ] Prioridades (Alta, Média, Baixa)
- [ ] Data/hora limite
- [ ] Categorias de tarefas
- [ ] Dark mode com toggle
- [ ] Exportar tarefas (JSON, CSV)
- [ ] Busca/filtro por texto
- [ ] Undo/Redo
- [ ] Sincronização com API backend
- [ ] Múltiplas listas

---

## 🎓 Desafios de Aprendizado

### 🌟 Nível 1: Básico (Fácil)

**Objetivo:** Entender CSS e HTML

1. **Mudar cores**
   ```
   Altere as variáveis CSS em :root
   Exemplo: --primary-color de #6366f1 para #ff0000
   ```

2. **Mudar placeholder do input**
   ```html
   <!-- Arquivo: index.html linha ~42 -->
   <!-- Mude: -->
   placeholder="Adicione uma nova tarefa..."
   <!-- Para: -->
   placeholder="O que você precisa fazer?"
   ```

3. **Aumentar/diminuir tamanho do título**
   ```css
   /* arquivo: style.css linha ~81 */
   .header h1 {
     font-size: var(--font-size-2xl);  /* Mude para 3rem */
   }
   ```

4. **Adicionar ícone ao botão**
   ```html
   <!-- Arquivo: index.html linha ~44 -->
   <!-- Mude: -->
   <button id="addBtn" class="add-btn">Adicionar</button>
   <!-- Para: -->
   <button id="addBtn" class="add-btn">➕ Adicionar</button>
   ```

**Como validar:** Abra app no browser e veja mudanças!

---

### 🎯 Nível 2: Intermediário (Médio)

**Objetivo:** Entender JavaScript e manipulação de DOM

1. **Adicionar data de criação**
   ```javascript
   /* Arquivo: script.js linha ~68 */
   /* Modifique a renderização para mostrar data */
   
   // Hint: Use new Date().toLocaleDateString('pt-BR')
   ```

2. **Ordenar tarefas por data (mais recente primeiro)**
   ```javascript
   /* Arquivo: script.js função renderTodos */
   /* Antes de forEach, ordene: */
   
   filteredTodos.sort((a, b) => b.createdAt - a.createdAt);
   ```

3. **Contar caracteres enquanto digita**
   ```javascript
   /* Arquivo: script.js */
   /* Adicione listener ao input: */
   
   todoInput.addEventListener('input', (e) => {
     console.log(`Caracteres: ${e.target.value.length}`);
   });
   ```

4. **Duplo-clique para editar (avançado)**
   ```javascript
   /* Arquivo: script.js função renderTodos */
   /* Adicione ondblclick ao <li>: */
   
   ondblclick="editTodo(${todo.id})"
   
   /* E crie função editTodo() */
   ```

---

### ⭐ Nível 3: Avançado (Difícil)

**Objetivo:** Recursos complexos e otimizações

1. **Sistema de Prioridades**
   ```javascript
   /* Modifique o objeto todo para: */
   {
     id: Date.now(),
     text: "Tarefa",
     completed: false,
     priority: "high",  // high, medium, low
     createdAt: new Date()
   }
   
   /* Adicione filtro por prioridade */
   /* Mostre ícones diferentes para cada prioridade */
   ```

2. **Categorias de Tarefas**
   ```javascript
   /* Adicione campo category ao objeto */
   /* Crie seções por categoria */
   /* Ex: "Trabalho", "Pessoal", "Saúde" */
   ```

3. **Dark Mode**
   ```css
   /* Crie tema escuro em CSS */
   :root.dark-mode {
     --bg-color: #1e1e1e;
     --text-primary: #ffffff;
     /* ... */
   }
   
   /* Adicione botão toggle em HTML */
   /* E JavaScript para mudar tema */
   ```

4. **Exportar Tarefas (JSON)**
   ```javascript
   function exportarJSON() {
     const json = JSON.stringify(todos, null, 2);
     const blob = new Blob([json], { type: 'application/json' });
     const url = URL.createObjectURL(blob);
     const a = document.createElement('a');
     a.href = url;
     a.download = 'minhas-tarefas.json';
     a.click();
   }
   ```

5. **Undo/Redo**
   ```javascript
   /* Mantenha histórico de estados */
   let history = [JSON.parse(JSON.stringify(todos))];
   let historyIndex = 0;
   
   function undo() {
     if (historyIndex > 0) {
       historyIndex--;
       todos = JSON.parse(JSON.stringify(history[historyIndex]));
       renderTodos();
     }
   }
   ```

---

## 🔍 Entendendo o Código

### Fluxo Principal (passo a passo)

```
1. Página carrega
   └─ HTML renderizado no navegador

2. JavaScript carregado
   └─ addEventListener registra eventos

3. Evento: DOMContentLoaded
   └─ init() executa
   └─ loadTodos() recupera dados do localStorage
   └─ renderTodos() desenha HTML
   └─ updateStats() calcula números

4. Usuário interage (clica botão)
   └─ addEventListener detecta
   └─ Função correspondente executa
   └─ Array todos é modificado
   └─ saveTodos() salva em localStorage
   └─ renderTodos() redesenha
   └─ updateStats() atualiza números

5. Loop volta ao passo 4
   └─ Aguarda próximo evento
```

### Arquivo: index.html

```html
<!DOCTYPE html>           ← Declara HTML5
<html lang="pt-BR">       ← Idioma português
<head>                    ← Metadados (não visível)
  <meta charset="UTF-8"> ← Suporta acentos
  <meta name="viewport" ...>  ← Responsividade
  <title>...</title>      ← Título da aba
  <link rel="stylesheet" href="style.css">  ← Importa CSS
</head>
<body>                    ← Conteúdo visível
  <div class="container"> ← Agrupa tudo
    <header>              ← Cabeçalho
    <main>                ← Conteúdo principal
      <section>           ← Seção temática
      <input>             ← Campo de entrada
      <button>            ← Botão
      <ul>                ← Lista
        <li>              ← Item da lista (criado por JS)
    <footer>              ← Rodapé
  <script src="script.js">  ← Importa JavaScript
```

### Arquivo: style.css

```css
* { }                     ← Seletor universal (tudo)
:root { }                 ← Variáveis globais
body { }                  ← Corpo (fundo, fonte)
.container { }            ← Classe container
@keyframes { }            ← Definir animação
@media { }                ← Responsividade
```

**Ordem de leitura:** Reset → Variáveis → Elementos → Classes → Media queries

### Arquivo: script.js

```javascript
let todos = [];           ← Estado global (array)
let currentFilter = '';   ← Estado do filtro

const xxxInput = ...      ← Seletores (conectam HTML)
const addBtn = ...

addBtn.addEventListener   ← Registra eventos
addBtn.addEventListener   ← ...

function addTodo() { }    ← Funções principais
function toggleTodo() { }
function deleteTodo() { }
function renderTodos() { }
function updateStats() { }
function saveTodos() { }
function loadTodos() { }

init()                    ← Executa na inicialização
```

---

## 🐛 Erros Comuns

### ❌ Erro: "Tarefas não aparecem"

**Causa:** JavaScript não carregou

**Solução:**
1. Abra DevTools (F12)
2. Vá em Console
3. Procure por erros (vermelho)
4. Verifique se arquivo script.js existe
5. Use Live Server, não abra arquivo direto

---

### ❌ Erro: "localStorage não funciona"

**Causa:** Arquivo aberto direto (não via servidor)

**Solução:**
```bash
# Use Live Server do VS Code
# OU use servidor local:
python3 -m http.server 8000
# OU use GitHub Codespaces
```

---

### ❌ Erro: "Tarefas desaparecem ao recarregar"

**Causa:** Dados não estão sendo salvos

**Solução:**
1. Abra DevTools (F12)
2. Vá em Application → LocalStorage
3. Verifique se há entrada 'todos'
4. Se vazio, localStorage não está salvando
5. Certifique-se que `saveTodos()` é chamado

---

### ❌ Erro: "Textos com caracteres especiais aparecem estranhos"

**Causa:** Função `escaparHTML()` pode ter erro

**Solução:**
```javascript
function escaparHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;  // textContent, não innerHTML
  return div.innerHTML;
}
```

---

## 📚 Recursos de Aprendizado

### Documentação Oficial

- [MDN: DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [MDN: LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN: Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [MDN: CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [MDN: CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

### Guias Visuais

- [CSS-Tricks: Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS-Tricks: Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript.info: Eventos](https://javascript.info/introduction-browser-events)

### Vídeos

- [Traversy Media: DOM Crash Course](https://www.youtube.com/watch?v=0ik6X7EL53I)
- [The Net Ninja: JavaScript DOM](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gfoKa5la9dsdCNDxwGJ-5G)
- [freeCodeCamp: Web Development](https://www.youtube.com/watch?v=ysEN5RaKOlY)

### Prática Online

- [Codepen.io](https://codepen.io) - Editar e compartilhar código
- [JSFiddle](https://jsfiddle.net) - Testar JavaScript rápido
- [Dev.to](https://dev.to) - Artigos sobre desenvolvimento

---

## 🎯 Checklist: O Que Você Aprendeu

Marque cada item que você compreendeu:

### HTML
- [ ] DOCTYPE e <html> tag
- [ ] <head> vs <body>
- [ ] Tags semânticas (<header>, <main>, <section>)
- [ ] Atributos (id, class, data-*)
- [ ] Formulários (<input>, <button>)
- [ ] Estrutura hierárquica

### CSS
- [ ] Seletores (*, .class, #id, tag)
- [ ] Propriedades (color, size, padding, margin)
- [ ] Box Model (margin, border, padding, content)
- [ ] Display e Flexbox
- [ ] Variáveis CSS (--nome)
- [ ] Pseudo-classes (:hover, :focus, :active)
- [ ] Animações (@keyframes, animation)
- [ ] Media queries (@media)
- [ ] Gradientes
- [ ] Transform (translate, scale, rotate)

### JavaScript
- [ ] Variáveis (let, const, var)
- [ ] Tipos de dados (string, number, boolean, object, array)
- [ ] Operadores (=, ==, ===, !==, &&, ||)
- [ ] Condicionais (if/else, ternário)
- [ ] Loops (for, forEach, while)
- [ ] Funções e Arrow Functions
- [ ] Escopo (global, local, block)
- [ ] Arrays e métodos (push, filter, find, map, forEach)
- [ ] Objetos e propriedades
- [ ] DOM Manipulation (getElementById, createElement, appendChild)
- [ ] Event Listeners (addEventListener, onclick)
- [ ] Callbacks e Arrow Functions
- [ ] LocalStorage (setItem, getItem, parse, stringify)
- [ ] Validação de entrada
- [ ] Console e debugging

---

## 🚀 Próximos Projetos

Depois de dominar este, tente:

1. **Portfolio Pessoal** (Beginner)
   - Página estática com seus projetos
   - Seções: Sobre, Projetos, Contato
   - Menu responsivo

2. **Landing Page** (Beginner)
   - Página de apresentação de produto
   - Hero section com CTA
   - Testimonials, pricing

3. **Calculator** (Beginner)
   - Calculadora com HTML, CSS, JS
   - Operações básicas (+, -, *, /)
   - Display de resultado

4. **Weather App** (Intermediate)
   - Busca cidades via API
   - Mostra previsão do tempo
   - Ícones e cores dinâmicas

5. **Social Media Clone** (Intermediate)
   - Simulação de rede social
   - Posts, likes, comentários
   - Scroll infinito

---

## 💬 FAQ

### P: Posso usar este código em meus projetos?
**R:** Sim! É código de aprendizado. Fique à vontade para reutilizar e adaptar.

### P: Como eu adiciono mais funcionalidades?
**R:** Veja a seção "Desafios de Aprendizado" acima para ideias específicas.

### P: Qual é o melhor editor para começar?
**R:** [VS Code](https://code.visualstudio.com/) é gratuito e ótimo para iniciantes.

### P: Preciso de servidor para rodar?
**R:** Não, mas localStorage só funciona com servidor. Use Live Server!

### P: Como debugar erros?
**R:** Abra DevTools (F12) → Console. Erros aparecem em vermelho.

### P: Quanto tempo para aprender tudo isso?
**R:** 
- Entender código: 2-3 dias
- Dominar conceitos: 1-2 semanas
- Criar projetos similares: 3-4 semanas

---

## 📊 Estatísticas do Projeto

| Métrica | Valor |
|---------|-------|
| Linhas HTML | ~70 |
| Linhas CSS | ~250 |
| Linhas JavaScript | ~200 |
| **Total** | **~520 linhas** |
| Conceitos ensinados | 30+ |
| Funcionalidades | 8+ |
| Tempo para entender | 2-3 horas |
| Tempo para dominar | 1-2 semanas |

---

## 🎓 O Que Você Realizou

### Parabéns! 🎉

Você criou um **aplicativo web funcional completo** que:

✅ Gerencia dados (CRUD: Create, Read, Update, Delete)  
✅ Persiste dados (LocalStorage)  
✅ Responde a eventos (User Interactions)  
✅ Renderiza dinamicamente (JavaScript manipula HTML)  
✅ Tem design profissional (CSS moderno)  
✅ É responsivo (funciona em mobile)  
✅ Tem animações suaves  
✅ É acessível  

**Isso é mais do que a maioria dos iniciantes consegue fazer!**

---

## 🔗 Links Úteis

- 📖 [Documentação Completa do Projeto](./FLUXOGRAMA.md)
- 🎨 [Paleta de Cores Usada](https://coolors.co/6366f1-4f46e5-10b981-ef4444)
- 🔤 [Fonte Usada: Segoe UI](https://docs.microsoft.com/en-us/typography/font-list/segoe-ui)
- 🚀 [Deploy grátis: Vercel, Netlify](https://vercel.com)

---

## 📝 Autor

Desenvolvido como parte do **Frontend Learning Path 2026**

**Última atualização:** Junho 2026

---

## 📞 Suporte

Dúvidas? Verifique:

1. ✅ [FLUXOGRAMA.md](./FLUXOGRAMA.md) - Diagramas de fluxo
2. ✅ Arquivo específico (index.html, style.css, script.js)
3. ✅ [MDN Web Docs](https://developer.mozilla.org)
4. ✅ Console (F12) para erros
5. ✅ Stack Overflow para perguntas específicas

---

**Bom aprendizado! 🚀**

Lembre-se: O melhor jeito de aprender é **fazendo**. Modifique o código, quebre coisas, conserte, e aprenda!
