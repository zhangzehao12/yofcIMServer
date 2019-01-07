'use strict';

module.exports = app => {
    const { STRING, DATE, UUIDV1, UUID } = app.Sequelize;
    return {
        adminId: {
            allowNull: false,
            primaryKey: true,
            type: UUID,
            defaultValue: UUIDV1,
        },
        userName: STRING(40),
        password: STRING,
        created_at: {
            allowNull: false,
            type: DATE,
            defaultValue: new Date()
        },
        updated_at: {
            allowNull: false,
            type: DATE,
            defaultValue: new Date()
        }
    }
}