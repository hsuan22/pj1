let menuHtml = `
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
`;
// 取得DOM的節點
let menu = document.getElementById('menu');
// menu.textContent = menuHtml;//寫入節點 文字內容，這是錯的
// menu.innerHTML = menuHtml;//將 HTML 寫入節點，這是要的

// let menuData = ['Home', 'About', 'Products', "Store"];
// let menuData = ['index.html', 'about.html', 'products.html', "store.html"];
// 不要用宣告2次這個方法

let menuData = [
    {
        title:'首頁',
        url:'index.html'
    },
    {
        title:'關於我們',
        url:'about.html'
    },
    {
        title:'商品展示',
        url:'products.html'
    },
    {
        title:'購物車',
        url:'Store.html'
    },
];

/**
menuHtml = menuHtml + `<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>`;
 */
menuHtml = ''; //不可重複宣告
for (let row of menuData){
    menuHtml +=`<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="${row.url}">${row.title}</a></li>\n`;

    console.log(menuHtml);

} //在重音符號裡才能用${}?
menu.innerHTML = menuHtml;//將HTML寫入節點