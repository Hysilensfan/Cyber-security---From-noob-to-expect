const article = document.getElementById('article');
const langLabel = document.getElementById('langLabel');
let lang = 'zh';   // 筆記本體是中文，所以預設中文

// 載入並顯示筆記：中文讀 xxx.md，英文讀 xxx.en.md
async function load() {
    const base = article.dataset.md;
    const path = (lang === 'zh') ? base : base.replace(/\.md$/, '.en.md');
    try {
        const res = await fetch(path);
        if (!res.ok) throw new Error(res.status);
        article.innerHTML = marked.parse(await res.text());
        const h1 = article.querySelector('h1');      // 橫幅已有標題，移除筆記第一個 h1
        if (h1) h1.remove();
        article.querySelectorAll('a').forEach(a => { // 筆記內連結也用新分頁開
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        });
    } catch (e) {
        article.textContent = (lang === 'zh')
            ? '找不到筆記檔案：' + path
            : 'English version not available yet: ' + path;
    }
}

// 橫幅標題：標籤內是中文，data-en 是英文
document.querySelectorAll('[data-en]').forEach(el => el.dataset.zh = el.textContent);

document.getElementById('langBtn').addEventListener('click', () => {
    lang = (lang === 'zh') ? 'en' : 'zh';
    document.querySelectorAll('[data-en]').forEach(el => el.textContent = el.dataset[lang]);
    document.documentElement.lang = (lang === 'zh') ? 'zh-Hant' : 'en';
    langLabel.textContent = (lang === 'zh') ? 'EN' : '中文';
    load();
});

load();
