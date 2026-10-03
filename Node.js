// 通用的「點一下開／關」功能
function toggle(btn, target) {
    btn.addEventListener('click', () => {
        const open = target.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
    });
}

toggle(document.getElementById('menuBtn'), document.getElementById('menuList'));
toggle(document.getElementById('miscBtn'), document.getElementById('subList'));

