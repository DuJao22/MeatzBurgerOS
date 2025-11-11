const navbarHTML = `
<nav class="bg-brand-black/80 backdrop-blur-lg">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-20">
            <!-- Logo -->
            <a href="/index.html" class="flex items-center gap-2">
                <img src="/public/images/logo.svg" alt="BurgerLoft Logo" class="h-9 w-auto">
                <span class="text-white font-display font-bold text-2xl hidden sm:block">BurgerLoft</span>
            </a>

            <!-- Desktop Nav -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="/index.html#destaques" class="text-gray-300 hover:text-primary transition-colors font-semibold">Destaques</a>
                <a href="/index.html#sobre" class="text-gray-300 hover:text-primary transition-colors font-semibold">Sobre</a>
                <a href="/menu.html" class="text-gray-300 hover:text-primary transition-colors font-semibold">Cardápio</a>
                <a href="/admin-dashboard.html" class="text-gray-300 hover:text-primary transition-colors font-semibold">Admin</a>
            </div>

            <!-- CTA & Mobile Menu Button -->
            <div class="flex items-center gap-4">
                 <a href="/menu.html" class="hidden sm:inline-block bg-primary text-white font-bold uppercase py-2 px-6 rounded-full text-sm transition-transform hover:scale-105">
                    Pedir Agora
                </a>
                <button id="mobile-menu-button" class="md:hidden text-white">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1lbnUiPjxsaW5lIHgxPSIzIiB4Mj0iMjEiIHkxPSIxMiIgeTI9IjEyIi8+PGxpbmUgeDE9IjMiIHgyPSIyMSIgeTE9IjYiIHkyPSI2Ii8+PGxpbmUgeDE9IjMiIHgyPSIyMSIgeTE9IjE4IiB5Mj0iMTgiLz48L3N2Zz4=" class="h-6 w-6" />
                </button>
            </div>
        </div>
    </div>
    <!-- Mobile Nav -->
    <div id="mobile-menu" class="hidden md:hidden bg-brand-black">
        <a href="/index.html#destaques" class="block py-3 px-4 text-gray-300 hover:bg-gray-700">Destaques</a>
        <a href="/index.html#sobre" class="block py-3 px-4 text-gray-300 hover:bg-gray-700">Sobre</a>
        <a href="/menu.html" class="block py-3 px-4 text-gray-300 hover:bg-gray-700">Cardápio</a>
        <a href="/admin-dashboard.html" class="block py-3 px-4 text-gray-300 hover:bg-gray-700">Admin</a>
    </div>
</nav>
`;

const footerHTML = `
<div class="bg-brand-black text-gray-400 py-12">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h4 class="font-display font-bold text-lg text-white mb-4">BurgerLoft</h4>
                <p class="text-sm">O simples da melhor forma. Desde 2015, servindo paixão em forma de hambúrguer.</p>
            </div>
            <div>
                <h4 class="font-display font-bold text-lg text-white mb-4">Navegue</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="/index.html#sobre" class="hover:text-primary">Sobre Nós</a></li>
                    <li><a href="/menu.html" class="hover:text-primary">Cardápio</a></li>
                    <li><a href="#" class="hover:text-primary">Contato</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-display font-bold text-lg text-white mb-4">Legal</h4>
                <ul class="space-y-2 text-sm">
                    <li><a href="#" class="hover:text-primary">Política de Privacidade</a></li>
                    <li><a href="#" class="hover:text-primary">Termos de Uso</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-display font-bold text-lg text-white mb-4">Siga-nos</h4>
                <div class="flex space-x-4">
                    <a href="#" class="hover:text-primary"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWluc3RhZ3JhbSI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiByeD0iNSIgcnk9IjUiLz48cGF0aCBkPSJNMTYgMTEuMzdBNC4wMSg0LjAxIDAgMSAxIDEyLjAxIDE2QTQuMDEgNC4wMSAwIDAgMSAxNiAxMS4zN1oiLz48bGluZSB4MT0iMTcuNSIgeDI9IjE3LjUwMSIgeTE9IjYuNSIgeTI9IjYuNSIvPjwvc3ZnPg==" class="h-6 w-6" /></a>
                    <a href="#" class="hover:text-primary"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZhY2Vib29rIj48cGF0aCBkPSJNMTggMnYxNmEyIDIgMCAwIDEtMiAySDhhMiAyIDAgMCAxLTItMlYyIi8+PHBhdGggZD0iTTggN2gxMyIvPjwvc3ZnPg==" class="h-6 w-6" /></a>
                    <a href="#" class="hover:text-primary"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdoYXRzYXBwLXNxb3ciPjxwYXRoIGQ9Ik0yMSAxMC44NzV2Mi4yNWE3Ljg3NSA3Ljg3NSAwIDAgMS0xNS43NSAwdj0yLjI1IiIvPjxwYXRoIGQ9Ik0xMiA4LjEyNVYxMyIvPjxwYXRoIGQ9Ik0xMiAxNS4yNXYuMDAxIi8+PC9zdmc+" class="h-6 w-6" /></a>
                </div>
            </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 BurgerLoft. Todos os direitos reservados. Desenvolvido por João Layon.</p>
        </div>
    </div>
</div>
`;

export function initLayout() {
    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');

    if (header) {
        header.innerHTML = navbarHTML;
    }
    if (footer) {
        footer.innerHTML = footerHTML;
    }

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}
