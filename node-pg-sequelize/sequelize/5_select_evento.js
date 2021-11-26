const Sequelize = require('sequelize');
const models = require('./models');
const Op = Sequelize.Op;

async function select() {

    // Criar select para listar todos os eventos de ABRIL.
    const selectEventosAbril = await models.evento.findAll({
        where: {
            data: {
                [Op.like]: '%-04-%'
            }
        }
    })

    selectEventosAbril.forEach((evento) => {
        console.log("Eventos no mês de Abril: ", evento.data);
    })
    console.log("\n");

    await models.sequelize.close();
}

select();
