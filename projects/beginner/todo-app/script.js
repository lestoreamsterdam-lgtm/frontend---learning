// ==================== GERENCIADOR DE ESTADO ====================

// Array para armazenar as tarefas
let todos = [];

// Estado atual do filtro
let currentFilter = 'all';

// ==================== SELETORES DO DOM ====================

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const clearBtn = document.getElementById('clearBtn');
const filterBtns = document.querySelectorAll('.filter-btn');

// Stats
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');
const pendingCount = document.getElementById('pendingCount');

// ==================== EVENT LISTENERS ====================

// Adicionar tarefa
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

// Filtros
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderTodos();
    });
});

// Limpar concluídas
clearBtn.addEventListener('click', clearCompleted);

// ==================== FUNÇÕES PRINCIPAIS ====================

/**
 * Adiciona uma nova tarefa à lista
 */
function addTodo() {
    const text = todoInput.value.trim();

    // Validação
    if (text === '') {
        alert('Por favor, escreva uma tarefa!');
        todoInput.focus();
        return;
    }

    if (text.length < 3) {
        alert('A tarefa deve ter pelo menos 3 caracteres');
        return;
    }

    // Criar objeto da tarefa
    const todo = {
        id: Date.now(), // ID único baseado no timestamp
        text: text,
        completed: false,
        createdAt: new Date()
    };

    // Adicionar ao array
    todos.push(todo);

    // Limpar input
    todoInput.value = '';
    todoInput.focus();

    // Salvar no localStorage
    saveTodos();

    // Renderizar lista
    renderTodos();

    // Atualizar stats
    updateStats();
}

/**
 * Marca uma tarefa como concluída/pendente
 */
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();
        updateStats();
    }
}

/**
 * Deleta uma tarefa
 */
function deleteTodo(id) {
    if (confirm('Tem certeza que deseja deletar esta tarefa?')) {
        todos = todos.filter(t => t.id !== id);
        saveTodos();
        renderTodos();
        updateStats();
    }
}

/**
 * Limpa todas as tarefas concluídas
 */
function clearCompleted() {
    const completedTodos = todos.filter(t => t.completed).length;

    if (completedTodos === 0) {
        alert('Nenhuma tarefa concluída para limpar!');
        return;
    }

    if (confirm(`Tem certeza que deseja deletar ${completedTodos} tarefa(s) concluída(s)?`)) {
        todos = todos.filter(t => !t.completed);
        saveTodos();
        renderTodos();
        updateStats();
    }
}

// ==================== RENDERIZAÇÃO ====================

/**
 * Renderiza a lista de tarefas no DOM
 */
function renderTodos() {
    // Limpar lista
    todoList.innerHTML = '';

    // Filtrar tarefas
    let filteredTodos = todos;

    if (currentFilter === 'pending') {
        filteredTodos = todos.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter(t => t.completed);
    }

    // Verificar se há tarefas
    if (filteredTodos.length === 0) {
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    // Renderizar cada tarefa
    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input 
                type="checkbox" 
                class="todo-checkbox" 
                ${todo.completed ? 'checked' : ''} 
                onchange="toggleTodo(${todo.id})"
            >
            <span class="todo-text">${escaparHTML(todo.text)}</span>
            <div class="todo-actions">
                <button class="btn-small btn-delete" onclick="deleteTodo(${todo.id})">
                    🗑️ Deletar
                </button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

/**
 * Atualiza as estatísticas
 */
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    const pending = total - completed;

    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = pending;

    // Habilitar/desabilitar botão limpar
    clearBtn.disabled = completed === 0;
}

// ==================== ARMAZENAMENTO ====================

/**
 * Salva as tarefas no localStorage
 */
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

/**
 * Carrega as tarefas do localStorage
 */
function loadTodos() {
    const stored = localStorage.getItem('todos');
    if (stored) {
        todos = JSON.parse(stored);
    }
}

// ==================== UTILITÁRIOS ====================

/**
 * Escapa caracteres HTML para evitar XSS
 */
function escaparHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ==================== INICIALIZAÇÃO ====================

/**
 * Inicializa a aplicação
 */
function init() {
    loadTodos();
    renderTodos();
    updateStats();
    todoInput.focus();
}

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);
