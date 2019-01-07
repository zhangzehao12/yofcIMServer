'use strict';

module.exports = app => {
    const { STRING, DATE, UUIDV1, UUID } = app.Sequelize;
    return {
        projectId: {
            allowNull: false,
            primaryKey: true,
            type: UUID,
            defaultValue: UUIDV1
        },
        projectName: STRING(50),
        describe: STRING,
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