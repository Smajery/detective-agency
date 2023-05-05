const sequelize = require('../db');
const {DataTypes, Sequelize} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    password: {type: DataTypes.STRING},
    isActivated: {type: DataTypes.BOOLEAN, defaultValue: false},
    activationLink: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'CLIENT'}
});

const Token = sequelize.define('token', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    refreshToken: {type: DataTypes.STRING, allowNull: false}
});

const Client = sequelize.define('client', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: {type: DataTypes.STRING, allowNull: false},
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    phone_number: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            is: /^(\+?\d{1,3}[- ]?)?\d{10}$/
        }
    },
});

const Employee = sequelize.define('employee', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    full_name: {type: DataTypes.STRING, allowNull: false},
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            notEmpty: true,
            isEmail: true
        }
    },
    phone_number: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            is: /^(\+?\d{1,3}[- ]?)?\d{10}$/
        }
    },
    address: {type: DataTypes.STRING, unique: true, allowNull: false},
    birhedAt: {type: DataTypes.DATE, allowNull: false},
    employmentedAt: {type: DataTypes.DATE, allowNull: false}
});

const JobTitle = sequelize.define('job_title', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
    salary: {type: DataTypes.INTEGER, allowNull: false}
});

const DetectivesList = sequelize.define('detectives_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Treatie = sequelize.define('treatie', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    service: {type: DataTypes.ENUM('Search', 'Adultery', 'Investigation', 'Observation'), allowNull: false},
    client_info: {type: DataTypes.STRING},
    place: {type: DataTypes.STRING},
    completedAt: {type: DataTypes.DATE},
    price: {type: DataTypes.INTEGER}
});

const Case = sequelize.define('case', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.BOOLEAN, defaultValue: false},
    completedAt: {type: DataTypes.DATE}
});

const Document = sequelize.define('document', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.ENUM('Document', 'Observation', 'Expertise'), allowNull: false},
    result: {type: DataTypes.STRING, allowNull: false},
});

const File = sequelize.define('file', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    extension: {type: DataTypes.STRING, allowNull: false},
})

User.hasOne(Token)
Token.belongsTo(User)

User.hasOne(Client)
Client.belongsTo(User)

User.hasOne(Employee)
Employee.belongsTo(User)

Treatie.hasOne(Case)
Case.belongsTo(Treatie)

Case.hasOne(DetectivesList)
DetectivesList.belongsTo(Case)

DetectivesList.hasMany(Employee)
Employee.belongsTo(DetectivesList)

Client.hasMany(Treatie)
Treatie.belongsTo(Client)

JobTitle.hasMany(Employee)
Employee.belongsTo(JobTitle)

Case.hasMany(Document)
Document.belongsTo(Case)

Document.hasMany(File)
File.belongsTo(Document)

module.exports = {
    User,
    Token,
    Client,
    Employee,
    JobTitle,
    DetectivesList,
    Treatie,
    Case,
    Document,
    File
}