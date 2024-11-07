// Add this translations object at the top of script.js
const translations = {
    en: {
        home: "Home",
        ca: "CA",
        links: "Links",
        howToBuy: "How to Buy",
        title: "$NEON CAT",
        welcome: "100% original IP, this rainbow glowing neon cat sign aims to become a leader of the catcoin supercycle. It's an homage to one of the most iconic memes of all time, NYAN CAT, but at the same time an entirely original new character who's eye catching aura will captivate the attention of the masses. LFGLOW!!! 😻🚀",
        contractAddress: "CONTRACT ADDRESS",
        neonCA: "NEON CA:",
        copy: "Copy",
        copied: "Copied!",
        twitter: "Twitter",
        dexscreener: "DexScreener",
        buy: "Buy",
        createWallet: "Create a Wallet",
        walletInstructions: "First make a wallet @ Phantom.app",
        getSOL: "Get SOL",
        solInstructions: "Purchase some Solana from an exchange like Coinbase and transfer it to your wallet",
        swapForNeon: "Swap for $NEON",
        swapInstructions: "Click the swap button in Phantom, paste in the CA & buy $NEON!"
    },
    zh: {
        home: "主页",
        ca: "合约",
        links: "链接",
        howToBuy: "如何购买",
        title: "$霓虹猫",
        welcome: "100%原创IP，这个彩虹霓虹猫标志旨在成为猫币超级周期的领导者。它向有史以来最具标志性的表情包之一NYAN CAT致敬，同时又是一个全新的原创角色，其醒目的光环将吸引大众的注意力。一起发光吧！!! 😻🚀",
        contractAddress: "合约地址",
        neonCA: "NEON合约:",
        copy: "复制",
        copied: "已复制!",
        twitter: "推特",
        dexscreener: "行情",
        buy: "购买",
        createWallet: "创建钱包",
        walletInstructions: "首先在 Phantom.app 创建钱包",
        getSOL: "获取SOL",
        solInstructions: "从交易所（如Coinbase）购买Solana并转入您的钱包",
        swapForNeon: "兑换$NEON",
        swapInstructions: "点击Phantom中的兑换按钮，粘贴合约地址并购买$NEON！"
    }
};

// Add language toggle function
function toggleLanguage() {
    const currentLang = document.documentElement.getAttribute('lang') === 'zh' ? 'en' : 'zh';
    document.documentElement.setAttribute('lang', currentLang);
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[currentLang][key];
    });

    // Update the toggle button text
    const toggleBtn = document.querySelector('.lang-toggle');
    toggleBtn.textContent = currentLang === 'zh' ? '🇺🇸 EN' : '🇨🇳 中文';
}

// Copy contract address functionality
function copyAddress() {
    const address = document.querySelector('.contract-address').textContent;
    navigator.clipboard.writeText(address).then(() => {
        const button = document.querySelector('.copy-button');
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add random flicker effect to neon elements
const neonElements = document.querySelectorAll('.neon-text');
neonElements.forEach(element => {
    setInterval(() => {
        if (Math.random() < 0.01) { // 1% chance to flicker
            element.style.opacity = '0.7';
            setTimeout(() => {
                element.style.opacity = '1';
            }, 50);
        }
    }, 100);
}); 