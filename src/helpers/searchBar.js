export const filterItems = (searchValue, items) => {
    const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return filtered;
}