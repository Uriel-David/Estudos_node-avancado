const models = require('./models');

async function insert() {

  //Eventos
  const eventoNode = await models.evento.create({nome: 'Encontro de Nodejs', data: "2021-11-26"});
  const eventoPostgres = await models.evento.create({nome: 'Encontro de Postgresql', data: "2021-11-26"});
  const eventoNodeAbril1 = await models.evento.create({nome: 'Encontro de Nodejs', data: "2022-04-01"});
  const eventoNodeAbril2 = await models.evento.create({nome: 'Encontro de Nodejs', data: "2022-04-12"});
  const eventoPostgresAbril1 = await models.evento.create({nome: 'Encontro de Postgresql', data: "2022-04-22"});
  const eventoPostgresAbril2 = await models.evento.create({nome: 'Encontro de Postgresql', data: "2022-04-30"});

  //Participantes
  const carlos  = await models.participante.create({nome: 'Carlos'});
  const augusto = await models.participante.create({nome: 'Augusto'});
  const janaina = await models.participante.create({nome: 'Janaína'});
  const rafael  = await models.participante.create({nome: 'Rafael'});


  //Participantes em eventos
  await eventoNode.setParticipantes([carlos, augusto, janaina]);
  await eventoPostgres.setParticipantes([janaina, rafael]);

  await models.sequelize.close();

  console.log("Dados Inseridos");
}

insert();
