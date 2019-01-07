module.exports = app => {
    const projectSchema = require('../../schema/project.js')(app);

    const modelInstanceName = 'project';

    const Project = app.model.define(modelInstanceName, projectSchema, {
        freezeTableName: true,
        tableName: 'yofc_im_' + modelInstanceName
    });
    return Project;
}