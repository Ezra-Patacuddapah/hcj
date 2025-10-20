// Sample initial card
let cards = [
  {
    id: 1,
    title: 'Sample data'
  },
  {
    id: 2,
    title: 'Another sample data'
  },
  {
    id: 3,
    title: 'Another sample data, Another sample data, Another sample data'
  },
  {
    id: 4,
    title: 'Another sample data'
  },
  {
    id: 5,
    title: 'Another sample data'
  },
  {
    id: 6,
    title: 'Another sample data'
  },
  {
    id: 7,
    title: 'Another sample data'
  },
  {
    id: 8,
    title: 'Another sample data'
  },
  {
    id: 9,
    title: 'Another sample data'
  }
]

// DOM Elements
const cardsContainer = document.getElementById('cardsContainer')
const emptyState = document.getElementById('emptyState')
const addCardBtn = document.getElementById('addCardBtn')
const cardModal = document.getElementById('cardModal')
const confirmModal = document.getElementById('confirmModal')
const cardForm = document.getElementById('cardForm')
const cardTitleInput = document.getElementById('cardTitle')
const closeModalBtn = document.getElementById('closeModalBtn')
const cancelBtn = document.getElementById('cancelBtn')
const closeConfirmModalBtn = document.getElementById('closeConfirmModalBtn')
const cancelDeleteBtn = document.getElementById('cancelDeleteBtn')
const confirmDeleteBtn = document.getElementById('confirmDeleteBtn')

// State variables
let currentCardId = null
let isEditing = false

// Initialize the app
function init() {
  renderCards()
  setupEventListeners()
}

// Render all cards
function renderCards() {
  if (cards.length === 0) {
    emptyState.style.display = 'block'
    return
  }
  
  emptyState.style.display = 'none'
  cardsContainer.innerHTML = ''
  
  cards.forEach(card => {
    const cardElement = createCardElement(card)
    cardsContainer.appendChild(cardElement)
  })
}

// Create a card element
function createCardElement(card) {
  const cardDiv = document.createElement('div')
  cardDiv.className = 'card'
  cardDiv.dataset.id = card.id
  
  cardDiv.innerHTML = `
    <div class="card-title">${card.title}</div>
    <div class="card-actions">
      <button class="action-btn edit-btn">&plusmn;</button>
      <button class="action-btn delete-btn">&times;</button>
    </div>
  `
  
  // Add event listeners to the action buttons
  const editBtn = cardDiv.querySelector('.edit-btn')
  const deleteBtn = cardDiv.querySelector('.delete-btn')
  
  editBtn.addEventListener('click', () => openEditModal(card.id))
  deleteBtn.addEventListener('click', () => openDeleteModal(card.id))
  
  return cardDiv
}

// Open modal for adding a new card
function openAddModal() {
  isEditing = false;
  cardTitleInput.value = '';
  currentCardId = null;
  cardModal.style.display = 'flex';
  cardTitleInput.focus();
}

// Open modal for editing an existing card
function openEditModal(cardId) {
  isEditing = true;
  const card = cards.find(c => c.id === cardId);
  cardTitleInput.value = card.title;
  currentCardId = cardId;
  cardModal.style.display = 'flex';
  cardTitleInput.focus();
}

// Open confirmation modal for deletion
function openDeleteModal(cardId) {
  currentCardId = cardId;
  confirmModal.style.display = 'flex';
}

// Save card (both create and update)
function saveCard(event) {
  event.preventDefault();
  
  const title = cardTitleInput.value.trim();
  
  if (!title) {
    return;
  }
  
  if (isEditing) {
    // Update existing card
    const cardIndex = card.findIndex(c => c.id === currentCardId);
    if (cardIndex !== -1) {
      cards[cardIndex].title = title;
    }
  } else {
    // Create new card
    const newId = cards.length > 0 ? Math.max(...cards.map(c => c.id)) + 1 : 1;
    cards.push({
      id: newId,
      title
    });
  }
  
  renderCards();
  closeModal();
}

// Delete card
function deleteCard() {
  cards = cards.filter(card => card.id !== currentCardId);
  renderCards();
  closeConfirmModal();
}

// Close modals
function closeModal() {
  cardModal.style.display = 'none';
}

function closeConfirmModal() {
  confirmModal.style.display = 'none';
}

// Set up event listeners
function setupEventListeners() {
  addCardBtn.addEventListener('click', openAddModal);
  cardForm.addEventListener('submit', saveCard);
  // closeModalBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  // closeConfirmModalBtn.addEventListener('click', closeConfirmModal);
  cancelDeleteBtn.addEventListener('click', closeConfirmModal);
  confirmDeleteBtn.addEventListener('click', deleteCard);
  
  // Close modal when clicking outside the nodal content
  window.addEventListener('click', event => {
    if (event.target === cardModal) {
      closeModal();
    }
    if (event.target === confirmModal) {
      closeConfirmModal();
    }
  });
}

// Initialize the application
init()
