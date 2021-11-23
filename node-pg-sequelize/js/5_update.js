const db = require('./_database')

async function updateData() {

    await db.connect();

    const queryMudaNome = "UPDATE participante SET nome = 'Carlos Augusto' WHERE id = 1"

    await db.query(queryMudaNome);

    const queryRetiraEvento = "DELETE FROM evento_participante WHERE evento_id = 1 AND participante_id = 1"

    await db.query(queryRetiraEvento);

    await db.end();

    console.log('Dados Atualizados');
}

updateData();
