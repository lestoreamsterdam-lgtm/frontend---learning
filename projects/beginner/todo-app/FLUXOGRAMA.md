# 🔄 Diagrama de Fluxo - Todo App

## 1️⃣ FLUXO GERAL DA APLICAÇÃO

```
┌─────────────────────────────────────────────────────────────┐
│                    PÁGINA CARREGA                            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │   DOMContentLoaded (evento)        │
        │   Dispara função init()            │
        └────────────────┬───────────────────┘
                         │
            ┌────────────┼────────────┐
            ▼            ▼            ▼
      ┌─────────┐  ┌──────────┐  ┌──────────┐
      │loadTodos│  │renderTos │  │updateStat│
      │         │  │         │  │         │
      │localStorage
      │ →todos  │  │todos →  │  │Calcula  │
      │         │  │HTML <li>│  │números  │
      └─────────┘  └──────────┘  └──────────┘
            │            │            │
            └────────────┼────────────┘
                         ▼
          ┌─────────────────────────────┐
          │  APP PRONTA PARA USAR! ✅    │
          └─────────────────────────────┘
```

---

## 2️⃣ FLUXO: ADICIONAR TAREFA

```
USUÁRIO DIGITA NO INPUT
         │
         ▼
    ┌─────────────────┐
    │ Clica Adicionar │  (ou pressiona Enter)
    │  OU Enter       │
    └────────┬────────┘
             │
             ▼
    ┌──────────────────────────┐
    │  addEventListener        │
    │  ('click' ou 'keypress') │
    └─────────────────┬────────┘
                      │
                      ▼
         ┌────────────────────────┐
         │  addTodo() executada   │
         └────────────┬───────────┘
                      │
                      ▼
      ┌───────────────────────────────┐
      │ const text = input.value.trim()│
      │ Pega texto e remove espaços   │
      └────────────────┬──────────────┘
                       │
            ┌──────────┴──────────┐
            │                     │
            ▼                     ▼
     ┌─────────────┐       ┌──────────────┐
     │ Text vazio?│       │Text < 3 char?│
     └──┬────┬────┘       └──┬────┬───���───┘
        │    │                │    │
    SIM │    │ NÃO        SIM │    │ NÃO
        ▼    ▼                ▼    ▼
    ┌────┐ ┌────────────────────────────┐
    │ERRO│ │  Cria objeto TODO:         │
    └────┘ │ {                          │
            │   id: 1717846403000,      │
            │   text: "Estudar JS",     │
            │   completed: false        │
            │ }                         │
            └──────────────┬────────────┘
                           │
                           ▼
            ┌──────────────────────────┐
            │ todos.push(todo)         │
            │ Adiciona ao array        │
            └──────────────┬───────────┘
                           │
                           ▼
            ┌──────────────────────────┐
            │ todoInput.value = ''     │
            │ Limpa o input            │
            └──────────────┬───────────┘
                           │
                ┌──────────┼──────────┐
                ▼          ▼          ▼
          ┌─────────┐ ┌──────────┐ ┌──────────┐
          │saveTodo │ │renderTodo│ │updateStat│
          │         │ │          │ │          │
          │Salva no │ │Desenha   │ │Atualiza  │
          │Local-   │ │nova <li> │ │números   │
          │Storage  │ │na lista  │ │na tela   │
          └─────────┘ └──────────┘ └──────────┘
                │          │          │
                └──────────┼──────────┘
                           ▼
         ┌──────────────────────────────┐
         │  TAREFA ADICIONADA! ✅       │
         │  Input focado para nova      │
         └──────────────────────────────┘
```

---

## 3️⃣ FLUXO: MARCAR COMO CONCLUÍDA

```
USUÁRIO CLICA NO CHECKBOX
         │
         ▼
    ┌──────────────────┐
    │ onchange evento  │
    │ toggleTodo(id)   │
    └────────┬─────────┘
             │
             ▼
    ┌─────────────────────────────┐
    │ todos.find(t => t.id === id)│
    │ Encontra tarefa pelo ID     │
    └────────────┬────────────────┘
                 │
                 ▼
      ┌──────────────────────────┐
      │ todo.completed           │
      │ !todo.completed (inverte)│
      │                          │
      │ false → true (concluída) │
      │ true → false (pendente)  │
      └────────────┬─────────────┘
                   │
            ┌──────┼──────┐
            ▼      ▼      ▼
         ┌─────┐┌────┐┌────────┐
         │Save ││Rend││Update  │
         │Todos││er  ││Stats   │
         └─────┘└────┘└────────┘
            │      │      │
            └──────┼──────┘
                   ▼
    ┌─────────────────────────────┐
    │ Checkbox marcado/desmarcado │
    │ Tarefa riscada/normal       │
    │ Números atualizados         │
    └─────────────────────────────┘
```

---

## 4️⃣ FLUXO: DELETAR TAREFA

```
USUÁRIO CLICA EM "DELETAR"
         │
         ▼
    ┌──────────────────────┐
    │ onclick="deleteTodo" │
    └────────┬─────────────┘
             │
             ▼
    ┌─────────────────────────┐
    │ confirm('Tem certeza?') │
    │ Mostra diálogo          │
    └────┬────────────┬───────┘
    CANCELAR│        │OK
         ▼            ▼
      ┌─────┐    ┌──────────────────┐
      │PARA │    │ todos = todos    │
      │     │    │ .filter(t =>     │
      └─────┘    │ t.id !== id)     │
                 │                  │
                 │ Remove tarefa    │
                 └────────┬─────────┘
                          │
                   ┌──────┼──────┐
                   ▼      ▼      ▼
                ┌─────┐┌────┐┌────────┐
                │Save ││Rend││Update  │
                │Todos││er  ││Stats   │
                └─────┘└────┘└────────┘
                   │      │      │
                   └──────┼──────┘
                          ▼
           ┌───────────────────────────┐
           │ TAREFA DELETADA! 🗑️       │
           │ Lista renderizada         │
           │ Números atualizados       │
           └───────────────────────────┘
```

---

## 5️⃣ FLUXO: FILTRAR TAREFAS

```
USUÁRIO CLICA EM FILTRO
("Todas", "Pendentes", "Concluídas")
         │
         ▼
    ┌────────────────────────┐
    │ addEventListener       │
    │ ('click')              │
    └──────────┬─────────────┘
               │
               ▼
    ┌──────────────────────────┐
    │ filterBtns.forEach       │
    │ Para CADA botão          │
    └──────────┬───────────────┘
               │
               ▼
    ┌──────────────────────────────┐
    │ Remove classe "active"       │
    │ de TODOS os botões           │
    │                              │
    │ filterBtns.forEach(b =>      │
    │   b.classList.remove()       │
    └──────────┬───────────────────┘
               │
               ▼
    ┌──────────────────────────────┐
    │ Adiciona "active" ao clicado │
    │ e.target.classList.add()     │
    └──────────┬───────────────────┘
               │
               ▼
    ┌──────────────────────────────┐
    │ currentFilter =              │
    │ e.target.dataset.filter      │
    │                              │
    │ Lê atributo data-filter      │
    │ ("all", "pending", etc)      │
    └──────────┬───────────────────┘
               │
               ▼
    ┌──────────────────────────────┐
    │ renderTodos()                │
    │ Refaz a lista               │
    │ Aplicando filtro             │
    └──────────┬───────────────────┘
               │
        ┌──────┴──────┐
        ▼             ▼
    ┌────────────┐┌──────────────────┐
    │if currentF ││filteredTodos =    │
    │ilter:      ││todos.filter(...)  │
    │            ││                   │
    │ 'pending'  ││Mantém só:         │
    │ 'completed'││- Pendentes (false)│
    │ 'all'      ││- Concluídas (true)│
    └────────────┘└──────────────────┘
               │
               ▼
    ┌─────────────────────────────┐
    │ LISTA FILTRADA! ✅          │
    │ Botão ativo destacado       │
    └─────────────────────────────┘
```

---

## 6️⃣ FLUXO: RENDERIZAR LISTA

```
renderTodos() chamada
         │
         ▼
    ┌────────────────────────┐
    │ todoList.innerHTML = ''│
    │ Limpa lista            │
    └────────────┬───────────┘
                 │
                 ▼
    ┌────────────────────────────┐
    │ Aplica filtro              │
    │ Se "pending": remove true  │
    │ Se "completed": remove fal │
    │ Se "all": mantém todas     │
    └────────────┬───────────────┘
                 │
            ┌────┴────┐
            ▼         ▼
       ┌────────┐ ┌──────────┐
       │Há      │ │Nenhuma   │
       │tarefas?│ │tarefa?   │
       └────┬───┘ └──┬───┬───┘
       SIM │         │SIM│ NÃO
           ▼         ▼   ▼
        ┌─────────────┐┌────────────┐
        │forEach      ││Mostra      │
        │cada tarefa  ││emptyState  │
        └──────┬──────┘└────────────┘
               │
               ▼
    ┌───────────────────────────────┐
    │ createElement('li')           │
    │ Cria novo <li>               │
    └───────────┬───────────────────┘
                │
                ▼
    ┌────────────────────────────────┐
    │ li.className = 'todo-item ...' │
    │ Se completed: adiciona classe  │
    │ 'completed' (estilo diferente) │
    └───────────┬────────────────────┘
                │
                ▼
    ┌────────────────────────────────┐
    │ li.innerHTML = `               │
    │   <input checkbox ... >        │
    │   <span>Texto da tarefa</span> │
    │   <button>Deletar</button>     │
    │ `                              │
    │                                │
    │ Insere HTML dentro do <li>     │
    └───────────┬────────────────────┘
                │
                ▼
    ┌────────────────────────────────┐
    │ todoList.appendChild(li)       │
    │ Adiciona <li> à lista          │
    └───────────┬────────────────────┘
                │
                ▼
    ┌────────────────────────────────┐
    │ Próxima tarefa...              │
    │ (volta ao forEach)             │
    └───────────┬────────────────────┘
                │
                ▼
    ┌────────────────────────────────┐
    │ LISTA RENDERIZADA! ✅          │
    │ Todos os <li> na tela         │
    └────────────────────────────────┘
```

---

## 7️⃣ FLUXO: ATUALIZAR ESTATÍSTICAS

```
updateStats() chamada
         │
         ▼
    ┌──────────────────────┐
    │ const total =        │
    │ todos.length         │
    │                      │
    │ Conta todos os itens │
    └────────────┬─────────┘
                 │
                 ▼
    ┌──────────────────────────────────┐
    │ const completed =                │
    │ todos.filter(t =>                │
    │   t.completed                    │
    │ ).length                         │
    │                                  │
    │ Conta tarefas com completed=true │
    └────────────┬─────────────────────┘
                 │
                 ▼
    ┌──────────────────────────────────┐
    │ const pending =                  │
    │ total - completed                │
    │                                  │
    │ Subtração simples                │
    └────────────┬─────────────────────┘
                 │
                 ▼
    ┌──────────────────────────────────┐
    │ totalCount.textContent = total   │
    │ completedCount.textContent = ..  │
    │ pendingCount.textContent = ..    │
    │                                  │
    │ Atualiza números na tela         │
    └────────────┬─────────────────────┘
                 │
                 ▼
    ┌──────────────────────────────────┐
    │ clearBtn.disabled = completed==0 │
    │ Desabilita botão "Limpar" se nenhuma
    │ tarefa concluída                 │
    └────────────┬─────────────────────┘
                 │
                 ▼
    ┌────────────────────────────────────┐
    │ ESTATÍSTICAS ATUALIZADAS! ✅       │
    │ Números e botão corretos          │
    └────────────────────────────────────┘
```

---

## 8️⃣ FLUXO: PERSISTÊNCIA (LocalStorage)

```
SALVAR (saveTodos)
         │
         ▼
    ┌─────────────────────────────┐
    │ JSON.stringify(todos)       │
    │                             │
    │ Converte array em string:  │
    │ [{...}, {...}]             │
    │ ↓                           │
    │ "[{...}, {...}]"           │
    └────────────┬────────────────┘
                 │
                 ▼
    ┌──────────────────────────────────┐
    │ localStorage.setItem(            │
    │   'todos',                       │
    │   stringificado                  │
    │ )                                │
    │                                  │
    │ Salva no navegador (persistente) │
    └────────────┬─────────────────────┘
                 │
                 ▼
    ┌──────────────────────────────────┐
    │ DADOS SALVOS! 💾                 │
    │ Mesmo fechando, ficam salvos     │
    └──────────────────────────────────┘


CARREGAR (loadTodos)
         │
         ▼
    ┌──────────────────────────────────┐
    │ const stored =                   │
    │ localStorage.getItem('todos')    │
    │                                  │
    │ Recupera string                  │
    └────────────┬─────────────────────┘
                 │
                 ▼
    ┌──────────────────────────────────┐
    │ if (stored) { ... }              │
    │                                  │
    │ Se tem algo salvo                │
    └────────────┬─────────────────────┘
                 │
                 ▼
    ┌──────────────────────────────────┐
    │ JSON.parse(stored)               │
    │                                  │
    │ Converte string de volta        │
    │ "[{...}, {...}]"               │
    │ ↓                               │
    │ [{...}, {...}]                 │
    │ (array JavaScript)               │
    └────────────┬─────────────────────┘
                 │
                 ▼
    ┌──────────────────────────────────┐
    │ todos = parse(stored)            │
    │                                  │
    │ Atribui ao array                 │
    └────────────┬─────────────────────┘
                 │
                 ▼
    ┌──────────────────────────────────┐
    │ DADOS CARREGADOS! ✅             │
    │ App sincronizada com dados       │
    └──────────────────────────────────┘
```

---

## 9️⃣ FLUXO COMPLETO: VISÃO GERAL

```
                    ┌─────────────────────────┐
                    │  PÁGINA CARREGA         │
                    └────────────┬────────────┘
                                 │
                ┌────────────────┼────────────────┐
                │                │                │
                ▼                ▼                ▼
          ┌──────────┐    ┌──────────┐    ┌─────────────┐
          │loadTodos │    │renderTod │    │updateStats  │
          │(localStorage│     os      │    │             │
          │ → array)   │    (array →  │    │(Calcula #s) │
          └──────────┘    │ HTML)     │    └─────────────┘
                │          │HTML)     │    │
                └──────────┴─────────┬┘
                                     │
                                     ▼
        ┌────────────────────────────────────────┐
        │       APP PRONTA! ✅                    │
        │  Listening para eventos do usuário     │
        └────────────┬───────────────────────────┘
                     │
        ┌────────────┼────────────┬──────────────┬─────────────┐
        │            │            │              │             │
        ▼            ▼            ▼              ▼             ▼
    ┌───────┐   ┌────────┐  ┌─────────┐   ┌──────────┐   ┌─────────┐
    │Clica  │   │Clica   │  │Clica em │   │Clica em  │   │Clica em │
    │Adiclo │   │Check   │  │Deletar  │   │Filtro    │   │Limpar   │
    └───┬───┘   └────┬───┘  └────┬────┘   └────┬─────┘   └────┬────┘
        │            │           │             │              │
        ▼            ▼           ▼             ▼              ▼
   ┌────────────────────────────────────────────────────────────┐
   │         EXECUTA FUNÇÃO CORRESPONDENTE                      │
   │                                                             │
   │  addTodo() / toggleTodo() / deleteTodo() /                │
   │  filterBtns listener / clearCompleted()                   │
   └────────────┬──────────────────────────────────────────────┘
                │
                ▼
   ┌────────────────────────────────────────────────────────────┐
   │              ATUALIZA DADOS (Array todos)                  │
   │                                                             │
   │  - Adiciona item                                           │
   │  - Muda completed true/false                              │
   │  - Remove item                                            │
   │  - Filtra visualização                                    │
   └────────────┬──────────────────────────────────────────────┘
                │
                ▼
   ┌────────────────────────────────────────────────────────────┐
   │                  TRIPLO UPDATE                             │
   │                                                             │
   │  saveTodos()    → Salva em localStorage 💾                │
   │  renderTodos()  → Desenha HTML na tela 🎨                 │
   │  updateStats()  → Atualiza números 📊                     │
   └────────────┬──────────────────────────────────────────────┘
                │
                ▼
   ┌────────────────────────────────────────────────────────────┐
   │              PÁGINA ATUALIZADA! ✅                         │
   │                                                             │
   │  - Dados salvos                                            │
   │  - Visuals atualizados                                    │
   │  - Números corretos                                       │
   │                                                             │
   │  Volta a aguardar próximo evento do usuário...             │
   └────────────────────────────────────────────────────────────┘
```

---

## 🔟 ESTRUTURA DE DADOS

```
┌─────────────────────────────────────┐
│      ARRAY: todos = [...]           │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ OBJETO: {                   │   │
│  │   id: 1717846403000,        │   │
│  │   text: "Estudar HTML",     │   │
│  │   completed: false,         │   │
│  │   createdAt: Date           │   │
│  │ }                           │   │
│  ├─────────────────────────────┤   │
│  │ OBJETO: {                   │   │
│  │   id: 1717846404500,        │   │
│  │   text: "Aprender CSS",     │   │
│  │   completed: true,          │   │
│  │   createdAt: Date           │   │
│  │ }                           │   │
│  ├─────────────────────────────┤   │
│  │ OBJETO: {                   │   │
│  │   id: 1717846406000,        │   │
│  │   text: "Dominar JS",       │   │
│  │   completed: false,         │   │
│  │   createdAt: Date           │   │
│  │ }                           │   │
│  └─────────────────────────────┘   │
│                                     │
│  Salvos em:                         │
│  localStorage['todos']              │
│  JSON string: "[{...}, {...}, ...]" │
└─────────────────────────────────────┘
```

---

## 🎭 FLUXO DE EVENTOS (Event Flow)

```
┌────────────────────────────────────┐
│     USUÁRIO INTERAGE               │
│  (clica, digita, pressiona tecla)  │
└────────────────┬───────────────────┘
                 │
                 ▼
    ┌────────────────────────────┐
    │ Navegador detecta evento   │
    │ (click, keypress, change)  │
    └────────────┬───────────────┘
                 │
                 ▼
    ┌────────────────────────────┐
    │ addEventListener ativa     │
    │ Callback function chamada  │
    └────────────┬───────────────┘
                 │
        ┌────────┴────────┐
        ▼                 ▼
    ┌────────────┐   ┌────────────┐
    │Função JS   │   │Função JS   │
    │executada   │   │executada   │
    │com dados   │   │com dados   │
    └────────────┘   └────────────┘
        │                 │
        └────────┬────────┘
                 │
                 ▼
    ┌────────────────────────────┐
    │ Modifica estado            │
    │ (todos array muda)         │
    └────────────┬───────────────┘
                 │
                 ▼
    ┌────────────────────────────┐
    │ Chama render + save        │
    │ (atualiza tela + storage)  │
    └────────────┬───────────────┘
                 │
                 ▼
    ┌────────────────────────────┐
    │ PÁGINA VISUALMENTE MUDA    │
    │ Usuário vê resultado       │
    └────────────────────────────┘
```

---

## 📱 RESPONSIVIDADE (Media Query)

```
BROWSER GRANDE (desktop)
┌──────────────────────────────────────────┐
│                                          │
│  ┌─────────────────────────────────┐   │
│  │      CONTAINER                  │   │
│  │      max-width: 600px           │   │
│  │      HEADER                     │   │
│  │      INPUT + STATS              │   │
│  │      FILTROS (3 colunas)        │   │
│  │      LISTA DE TAREFAS           │   │
│  │      FOOTER                     │   │
│  └─────────────────────────────────┘   │
│                                          │
└──────────────────────────────────────────┘


BROWSER PEQUENO (mobile max-width: 600px)
┌──────────────────┐
│  CONTAINER       │
│  (full screen)   │
│  HEADER          │
│  INPUT (full)    │
│  STATS (1 col)   │
│  FILTROS         │
│  (flex-wrap)     │
│  LISTA           │
│  FOOTER          │
└──────────────────┘
```

---

## 🎓 RESUMO VISUAL: HTML + CSS + JS

```
HTML (Estrutura)
    ↓
┌─ Input com id="todoInput"
├─ Button com id="addBtn"
├─ UL com id="todoList" (vazio inicialmente)
├─ Spans com id="totalCount", "completedCount", "pendingCount"
└─ Button com id="clearBtn"


CSS (Aparência)
    ↓
┌─ Define cores, tamanhos, posições
├─ Animações (slideIn)
├─ Estados (.completed, .active)
├─ Responsividade (@media queries)
└─ Efeitos hover, focus, etc


JavaScript (Comportamento)
    ↓
┌─ getElementById() → pega elementos HTML
├─ addEventListener() → escuta eventos
├─ Funções → manipulam dados e DOM
├─ renderTodos() → cria HTML dinamicamente
├─ localStorage → persiste dados
└─ Tudo conectado em um loop infinito!
```

---

## 🚀 CICLO DE VIDA COMPLETO

```
1. CARREGAR PÁGINA
   └─ HTML renderizado
   └─ CSS aplicado
   └─ JavaScript carregado

2. EVENTO: DOMContentLoaded
   └─ init() executada
   └─ loadTodos() carrega dados antigos
   └─ renderTodos() desenha lista
   └─ updateStats() mostra números

3. USUÁRIO INTERAGE
   └─ addEventListener detecta
   └─ Callback function ejecutada
   └─ Modifica array `todos`

4. ATUALIZAÇÃO
   └─ saveTodos() salva no localStorage
   └─ renderTodos() redesenha HTML
   └─ updateStats() recalcula números

5. PÁGINA ATUALIZADA VISUALMENTE
   └─ Loop volta ao passo 3
   └─ Aguarda próximo evento

6. PÁGINA FECHADA/RECARREGADA
   └─ localStorage guarda dados
   └─ Próxima vez que abrir, loadTodos() recupera
   └─ Tarefas ainda estão lá! ✅
```

---

**Agora você entende o fluxo completo! 🎉**

Quer que eu **crie um arquivo visual** desse diagrama em HTML/CSS interativo?
