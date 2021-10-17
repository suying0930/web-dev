const NavigationItem = (item) => {
    return(`
        <a class="list-group-item override-bg override-font} ${item.route === 'Home' ? 'active' : ''}" href=${item.href}>
            <i class="${item.icon}"></i>
            <span class="d-none d-xl-inline">${item.route}</span>
        </a>
    `);
}

export default NavigationItem;