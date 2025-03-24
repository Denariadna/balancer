const express = require('express');
const contactService = require('../services/server');

const app = express();

app.use(express.json()); // Для обработки JSON в запросах

// Контактные конечные точки
app.post('/api/v1/contact', contactService.createContact);
app.get('/api/v1/contact', contactService.getContacts);
app.put('/api/v1/contact', contactService.updateContact);
app.delete('/api/v1/contact', contactService.deleteContact);

// Групповые конечные точки
app.post('/api/v1/group', contactService.createGroup);
app.get('/api/v1/group', contactService.getGroups);
app.put('/api/v1/group', contactService.updateGroup);
app.delete('/api/v1/group', contactService.deleteGroup);

const PORT = 6080;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
