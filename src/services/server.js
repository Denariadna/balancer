class Phone {
    constructor() {
        this.TypeID = 0;
        this.CountryCode = 0;
        this.Operator = 0;
        this.Number = 0;
    }
}

class Contact {
    constructor() {
        this.ID = 0;
        this.Username = '';
        this.GivenName = '';
        this.FamilyName = '';
        this.Phone = [new Phone()];
        this.Email = [];
        this.Birthdate = null;
    }
}

class Group {
    constructor() {
        this.ID = 0;
        this.Title = '';
        this.Description = '';
        this.Contacts = []; // массив ID контактов
    }
}

exports.createContact = (req, res) => {
    const response = new Contact();
    res.status(201).json(response);
};

exports.getContacts = (req, res) => {
    const response = new Contact();
    res.status(200).json(response);
};

exports.updateContact = (req, res) => {
    const response = new Contact();
    res.status(200).json(response);
};

exports.deleteContact = (req, res) => {
    res.status(204).send();
};

exports.createGroup = (req, res) => {
    const response = new Group();
    res.status(201).json(response);
};

exports.getGroups = (req, res) => {
    const response = new Group();
    res.status(200).json(response);
};

exports.updateGroup = (req, res) => {
    const response = new Group();
    res.status(200).json(response);
};

exports.deleteGroup = (req, res) => {
    console.log('Delete Group');
    res.status(204).send();
};
