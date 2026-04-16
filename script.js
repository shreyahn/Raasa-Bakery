// ═══════════════════════════════════════

//   RAASA BAKERY — script.js
//   All JavaScript for the Raasa Bakery website
// ═══════════════════════════════════════

// ─── CONFIG ───
const WHATSAPP = '918147381301';

// ─── PRODUCT IMAGE MAP ───
// Real Unsplash photo URLs for each product
// Format: productId -> { url, alt }
const productImages = {
  // Bento Cakes
  b1: { url: 'images/mango-bento.png', alt: 'Mango Bento Cake' },
  b2: { url: 'images/strawberry-bento.png', alt: 'Strawberry Bento Cake' },
  b3: { url: 'images/blueberry-bento.png', alt: 'Blueberry Bento Cake' },
  b4: { url: 'images/pineapple-bento.png', alt: 'Pineapple Bento Cake' },
  b5: { url: 'images/chocolate-bento.png', alt: 'Chocolate Truffle Cake' },
  b6: { url: 'images/redvelvet-bento.png', alt: 'Red Velvet Bento Cake' },

  // Cheesecakes
  c1: { url: 'images/strawberry-cheesecake.png', alt: 'Strawberry Cheesecake' },
  c2: { url: 'images/blueberry-cheesecake.png', alt: 'Blueberry Cheesecake' },
  c3: { url: 'images/mango-cheesecake.png', alt: 'Mango Cheesecake' },
  c4: { url: 'images/lotus-cheesecake.png', alt: 'Lotus Biscoff Cheesecake' },
  c5: { url: 'images/chai-cheesecake.png', alt: 'Chai Cheesecake' },
  c6: { url: 'images/strawberry-matcha-cheesecake.png', alt: 'Strawberry Matcha Cheesecake' },
  
  // Brownies
  br1: { url: 'images/brownie-box-6.png', alt: 'Brownie Box 6' },
  br2: { url: 'images/brownie-box-12.png', alt: 'Brownie Box 12' },

  // Cupcakes
  cu1: { url: 'images/chocolate-cupcake.png', alt: 'Chocolate Cupcake' },
  cu2: { url: 'images/strawberry-cupcake.png', alt: 'Strawberry Cupcake' },
  cu3: { url: 'images/redvelvet-cupcake.png', alt: 'Red Velvet Cupcake' },
  cu4: { url: 'images/blueberry-cupcake.png', alt: 'Blueberry Cupcake' },

  // Banana Treats
  ba1: { url: 'images/banana-muffins.png', alt: 'Banana Muffins' },
  ba2: { url: 'images/banana-bread.png', alt: 'Banana Bread' },

  // Pastries
  p1: { url: 'images/mango-pastry.png', alt: 'Mango Pastry' },
  p2: { url: 'images/blueberry-pastry.png', alt: 'Blueberry Pastry' },
  p3: { url: 'images/strawberry-pastry.png', alt: 'Strawberry Pastry' },
  p4: { url: 'images/chocolate-truffle-pastry.png', alt: 'Chocolate Truffle Pastry' },
  p5: { url: 'images/redvelvet-pastry.png', alt: 'Red Velvet Pastry' },
  p6: { url: 'images/pineapple-pastry.png', alt: 'Pineapple Pastry' },
};

// ─── PRODUCT DATA ───
const products = {
  bento: {
    name: 'Bento Cakes',
    customizable: true,
    items: [
      { id: 'b1', name: 'Mango Bento Cake', price: 499, desc: 'Fresh alphonso mango layers with whipped mango cream. Light, tropical & absolutely divine.', badge: 'Bestseller' },
      { id: 'b2', name: 'Strawberry Bento Cake', price: 499, desc: 'Strawberry sponge layered with fresh strawberry cream and berry compote.', badge: '' },
      { id: 'b3', name: 'Blueberry Bento Cake', price: 499, desc: 'Soft vanilla sponge with blueberry filling and cream cheese frosting.', badge: '' },
      { id: 'b4', name: 'Pineapple Bento Cake', price: 449, desc: 'Classic pineapple cream cake — refreshing, light and perfectly sweet.', badge: '' },
      { id: 'b5', name: 'Chocolate Truffle', price: 549, desc: 'Rich dark chocolate sponge with ganache filling and truffle topping.', badge: 'Fan Fav' },
      { id: 'b6', name: 'Red Velvet Bento', price: 549, desc: 'Velvety red sponge with cream cheese frosting — a timeless classic.', badge: '' },
    ]
  },
  cheesecake: {
    name: 'Cheesecakes',
    customizable: false,
    items: [
      { id: 'c1', name: 'Strawberry Cheesecake', price: 699, desc: 'New-York style baked cheesecake with a fresh strawberry glaze.', badge: 'Bestseller' },
      { id: 'c2', name: 'Blueberry Cheesecake', price: 699, desc: 'Creamy cheesecake with a luscious blueberry topping and digestive biscuit base.', badge: '' },
      { id: 'c3', name: 'Mango Cheesecake', price: 699, desc: 'Available in Bento (small) and 500g. Pure mango indulgence.', badge: 'Seasonal' },
      { id: 'c4', name: 'Lotus Biscoff', price: 749, desc: 'Premium Biscoff cookie base with velvety cream cheese and Lotus spread drizzle.', badge: 'Premium' },
      { id: 'c5', name: 'Chai Cheesecake', price: 749, desc: 'Unique Parle-G biscuit base with tea-infused cream cheese. Desi magic.', badge: 'Unique' },
      { id: 'c6', name: 'Strawberry Matcha', price: 799, desc: 'A seasonal special — earthy matcha swirled with strawberry cream. Limited availability.', badge: 'Seasonal' },
    ]
  },
  brownie: {
    name: 'Brownie Boxes',
    customizable: false,
    items: [
      { id: 'br1', name: 'Brownie Box × 6', price: 349, desc: 'Six fudgy, dense dark chocolate brownies. Perfect for gifting or a treat-yourself moment.', badge: '' },
      { id: 'br2', name: 'Brownie Box × 12', price: 649, desc: 'Twelve rich brownies — the party pack. Add a gift message at checkout.', badge: 'Best Value' },
    ]
  },
  cupcake: {
    name: 'Cupcakes',
    customizable: true,
    items: [
      { id: 'cu1', name: 'Chocolate Cupcake', price: 120, desc: 'Moist chocolate cupcake with buttercream swirl. Rich, simple, perfect.', badge: '' },
      { id: 'cu2', name: 'Strawberry Cupcake', price: 120, desc: 'Strawberry vanilla cupcake with cream cheese frosting and berry on top.', badge: 'Bestseller' },
      { id: 'cu3', name: 'Red Velvet Cupcake', price: 130, desc: 'Classic red velvet with white cream cheese swirl. Order min. 4 pieces.', badge: '' },
      { id: 'cu4', name: 'Blueberry Cupcake', price: 120, desc: 'Blueberry vanilla cupcake with fresh berry frosting. Light and fruity.', badge: '' },
    ]
  },
  banana: {
    name: 'Banana Treats',
    customizable: false,
    items: [
      { id: 'ba1', name: 'Banana Muffins (×4)', price: 280, desc: 'Soft, moist banana muffins with a golden top. Comfort food at its best.', badge: '' },
      { id: 'ba2', name: 'Banana Bread (Loaf)', price: 349, desc: 'Classic banana bread loaf with walnuts optional. Soft, fragrant and homemade.', badge: 'Cozy Pick' },
    ]
  },
  pastry: {
    name: 'Pastries',
    customizable: true,
    items: [
      { id: 'p1', name: 'Mango Pastry', price: 149, desc: 'Layered mango cream pastry with fresh mango and sponge. Light and tropical.', badge: 'Seasonal' },
      { id: 'p2', name: 'Blueberry Pastry', price: 149, desc: 'Soft pastry slice with blueberry cream and berries on top.', badge: '' },
      { id: 'p3', name: 'Strawberry Pastry', price: 149, desc: 'Fresh strawberry layered pastry with whipped cream. Simple & lovely.', badge: '' },
      { id: 'p4', name: 'Chocolate Truffle Pastry', price: 169, desc: 'Decadent chocolate ganache pastry for the true chocoholic.', badge: 'Fan Fav' },
      { id: 'p5', name: 'Red Velvet Pastry', price: 169, desc: 'Slice of red velvet joy with cream cheese frosting.', badge: '' },
      { id: 'p6', name: 'Pineapple Pastry', price: 139, desc: 'Light pineapple cream pastry — a classic that never fails.', badge: '' },
    ]
  }
};

// ─── STATE ───
let cart = JSON.parse(localStorage.getItem('raasaCart') || '[]');
let currentPage = 'home';
let currentCategory = null;
let currentProduct = null;
let currentQty = 1;

// ─── HELPER: Get image tag for a product ───
function getProductImg(id, altText, size) {
  const img = productImages[id];
  if (img) {
    return `<img src="${img.url}" alt="${altText || img.alt}" loading="lazy" />`;
  }
  return '';
}

// ─── NAVIGATION ───
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  currentPage = page;
  window.scrollTo(0, 0);
}

function showCategory(cat) {
  currentCategory = cat;
  const data = products[cat];
  document.getElementById('productsPageTitle').textContent = data.name;
  document.getElementById('productsPageSub').textContent = data.customizable
    ? 'Customizable — finalize your design on WhatsApp'
    : 'Add to cart and checkout online';
  renderProductGrid(data.items, data.customizable, cat);
  showPage('products');
}

function renderProductGrid(items, customizable, catKey) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = items.map(p => `
    <div class="product-card" onclick="showProductDetail('${catKey}','${p.id}')">
      ${p.badge ? `<div class="product-badge">${p.badge}</div>` : ''}
      <div class="product-img-wrap">
        ${getProductImg(p.id, p.name)}
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-flavor">${customizable ? 'Customizable' : 'Ready to Order'}</div>
        <div class="product-price">₹${p.price}</div>
      </div>
    </div>
  `).join('');
}

function showProductDetail(catKey, productId) {
  const cat = products[catKey];
  const p = cat.items.find(i => i.id === productId);
  currentProduct = { ...p, catKey, customizable: cat.customizable, catName: cat.name };
  currentQty = 1;

  document.getElementById('detailCategory').textContent = cat.name;
  document.getElementById('detailName').textContent = p.name;
  document.getElementById('detailPrice').textContent = '₹' + p.price;
  document.getElementById('detailDesc').textContent = p.desc;
  document.getElementById('detailImg').innerHTML = getProductImg(p.id, p.name);
  document.getElementById('qtyNum').textContent = 1;

  const actions = document.getElementById('detailActions');
  if (cat.customizable) {
    actions.innerHTML = `
      <button class="wa-btn" style="width:100%;" onclick="customizeWhatsApp()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        Customise on WhatsApp
      </button>
      <p style="font-size:0.74rem;color:var(--light-text);margin-top:10px;text-align:center;">This item is customizable. Chat with Surabhi to finalize your design, flavour & details.</p>`;
  } else {
    actions.innerHTML = `
      <button class="add-cart-btn" onclick="addToCart()">Add to Cart</button>
      <button class="wa-btn" onclick="customizeWhatsApp()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        Order via WhatsApp
      </button>`;
  }

  showPage('detail');
}

function goBackFromDetail() {
  if (currentCategory) { showPage('products'); }
  else { showPage('home'); }
}

// ─── QTY ───
function changeQty(d) {
  currentQty = Math.max(1, currentQty + d);
  document.getElementById('qtyNum').textContent = currentQty;
}

// ─── CART ───
function addToCart() {
  const p = currentProduct;
  const existing = cart.find(i => i.id === p.id);
  if (existing) {
    existing.qty += currentQty;
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, qty: currentQty });
  }
  saveCart();
  updateCartUI();
  showToast(`${p.name} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartDrawer();
}

function updateCartItemQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (item) {
    item.qty = Math.max(1, item.qty + delta);
    saveCart();
    updateCartUI();
    renderCartDrawer();
  }
}

function saveCart() {
  localStorage.setItem('raasaCart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0);
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = total;
  document.getElementById('cartTotalDisplay').textContent = '₹' + getCartTotal();
}

function renderCartDrawer() {
  const el = document.getElementById('cartItemsList');
  if (!cart.length) {
    el.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛍</div><p>Your cart is empty.<br/>Add some sweet treats!</p></div>`;
    return;
  }
  el.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        ${getProductImg(item.id, item.name)}
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</div>
        <div class="cart-item-qty">
          <button class="ciq-btn" onclick="updateCartItemQty('${item.id}',-1)">−</button>
          <span class="ciq-num">${item.qty}</span>
          <button class="ciq-btn" onclick="updateCartItemQty('${item.id}',1)">+</button>
          <button class="remove-item" onclick="removeFromCart('${item.id}')">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleCart() {
  const overlay = document.getElementById('cartOverlay');
  const drawer = document.getElementById('cartDrawer');
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  } else {
    renderCartDrawer();
    drawer.classList.add('open');
    overlay.classList.add('open');
  }
}

// ─── CHECKOUT ───
function goCheckout() {
  if (!cart.length) { showToast('Your cart is empty!'); return; }
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  const items = document.getElementById('checkoutItems');
  items.innerHTML = cart.map(i => `
    <div class="summary-item">
      <span>${i.name} × ${i.qty}</span>
      <span>₹${i.price * i.qty}</span>
    </div>
  `).join('');
  document.getElementById('checkoutTotal').textContent = '₹' + getCartTotal();
  showPage('checkout');
}

function selectPay(el) {
  document.querySelectorAll('.pay-option').forEach(o => o.classList.remove('selected'));
  el.closest('.pay-option').classList.add('selected');
}

function placeOrder() {
  const name = document.getElementById('co-name').value.trim();
  const phone = document.getElementById('co-phone').value.trim();
  const address = document.getElementById('co-address').value.trim();
  if (!name || !phone || !address) { showToast('Please fill in all required fields.'); return; }

  const method = document.querySelector('input[name="payment"]:checked').value;

  if (method === 'whatsapp') {
    orderWhatsAppFull(name, phone, address);
    return;
  }

  showToast('Processing payment…');
  setTimeout(() => {
    cart = [];
    saveCart();
    updateCartUI();
    showPage('success');
  }, 2000);
}

function orderWhatsApp() {
  if (!cart.length) { showToast('Your cart is empty!'); return; }
  const summary = cart.map(i => `• ${i.name} ×${i.qty} = ₹${i.price * i.qty}`).join('\n');
  const msg = encodeURIComponent(`Hi Raasa! 🍰\n\nI'd like to place an order:\n\n${summary}\n\n*Total: ₹${getCartTotal()}*\n\nPlease confirm availability. Thank you!`);
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
}

function orderWhatsAppFull(name, phone, address) {
  const summary = cart.map(i => `• ${i.name} ×${i.qty} = ₹${i.price * i.qty}`).join('\n');
  const notes = document.getElementById('co-notes').value;
  const msg = encodeURIComponent(`Hi Raasa! 🍰 New Order\n\n*Customer:* ${name}\n*Phone:* ${phone}\n*Address:* ${address}\n\n*Items:*\n${summary}\n\n*Total: ₹${getCartTotal()}*\n${notes ? '\n*Notes:* ' + notes : ''}\n\nPlease confirm!`);
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  cart = []; saveCart(); updateCartUI();
  showPage('success');
}

function customizeWhatsApp() {
  const p = currentProduct;
  const msg = encodeURIComponent(`Hi Raasa! 🍰\n\nI'd like to *customize* a ${p.name}.\n\nQuantity: ${currentQty}\n\nPlease help me with flavour, design & delivery details. Thank you!`);
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
}

function bookWorkshop() {
  const msg = encodeURIComponent(`Hi Raasa! 🎂\n\nI'd like to book a spot for the *Sip & Frost Workshop*.\n\nPlease share the upcoming date and availability. Thank you!`);
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
}

// ─── UTILITY ───
function scrollToSection(id) {
  showPage('home');
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function toggleMobileMenu() {
  document.getElementById('navLinks').classList.toggle('mobile-open');
}

// ─── INIT ───
updateCartUI();
