/**
 *
    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
    <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
 */
let menuHtml = `
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">Home</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="about.html">About</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="products.html">Products</a></li>
<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="store.html">Store</a></li>
`;
let menu = document.getElementById('menu');
menu.innerHTML = menuHtml;
// console.log(menu);

let menuData = [
    {
        title: 'Home',
        let
        url: 'index.html',
    },
    {
        title: 'About',
        url: 'about.html',
    },
    {
        title: 'Products',
        url: 'products.html',
    },
    {
        title: 'Store',
        url: 'store.html',
    },
];
// ' + row.title +'

let menuHtml = '';
for (let row of menuData){
    menuHtml += '<li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="index.html">'+ row.title +'</a></li>';
}
let menu = document.getElementById('menu');
menu.innerHTML = menuHtml;

console.log(row.title);(row.url);

// console.log(console.log([menuData[1].url]));home