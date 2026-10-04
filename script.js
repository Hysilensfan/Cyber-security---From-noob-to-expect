// ===== 展開／收合：所有帶 data-toggle="目標id" 的按鈕都適用 =====
document.querySelectorAll('[data-toggle]').forEach(btn => {
    const target = document.getElementById(btn.dataset.toggle);
    if (!target) return;
    btn.addEventListener('click', () => {
        const open = target.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
    });
});

// ===== 中英文切換：中文寫在 data-zh，原本的英文自動記起來 =====
const items = document.querySelectorAll('[data-zh]');
items.forEach(el => el.dataset.en = el.textContent);

let zh = false;
const langBtn = document.getElementById('langBtn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        zh = !zh;
        items.forEach(el => el.textContent = zh ? el.dataset.zh : el.dataset.en);
        document.documentElement.lang = zh ? 'zh-Hant' : 'en';
        document.getElementById('langLabel').textContent = zh ? 'EN' : '中文';
    });
}
