const items = []; // Temporary in-memory store

exports.createItem = (req, res) => {
    const item = req.body;
    items.push(item);
    res.status(201).json({ message: 'Item created', item });
};

exports.getItems = (req, res) => {
    res.json(items);
};

exports.getItemById = (req, res) => {
    const item = items.find(i => i.id === req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
};

exports.updateItem = (req, res) => {
    const index = items.findIndex(i => i.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Item not found' });

    items[index] = { ...items[index], ...req.body };
    res.json({ message: 'Item updated', item: items[index] });
};

exports.deleteItem = (req, res) => {
    const index = items.findIndex(i => i.id === req.params.id);
    if (index === -1) return res.status(404).json({ message: 'Item not found' });

    items.splice(index, 1);
    res.json({ message: 'Item deleted' });
};
