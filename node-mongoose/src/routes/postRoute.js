import AuthorModel from '../models/authors';

const postRoute = (app) => {

    app.route('/posts/:id?')
        .get(async (req, res) => {
            const { id } = req.params
            const query = {};

            if (id) {
                query._id = id
            }

            try {

                const authors = await AuthorModel.find(query)
                res.send({ authors })

            } catch (error) {
                res.status(400).send({ error: 'Failed to find user' })
            }
        })
        .post(async (req, res) => {

            try {
                const author = new AuthorModel(req.body)
                await author.save()

                res.status(201).send('OK')
            } catch (error) {
                res.send(error)
            }
        })
        .put(async (req, res) => {
            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'User ID is missing.' })
            }

            try {
                const updatedAuthor = await AuthorModel.findOneAndUpdate({ _id: id }, req.body, {
                    new: true,
                });

                console.log(updatedAuthor)

                if (updatedAuthor) {
                    return res.status(200).send('OK')
                }


                res.status(400).send({ error: 'Could not update the user' })


            } catch (error) {
                res.send(error)
            }
        })
        .delete(async (req, res) => {

            const { id } = req.params

            if (!id) {
                return res.status(400).send({ error: 'User ID is missing.' })
            }

            try {
                const deletedAuthor = await AuthorModel.deleteOne({ _id: id })

                if (deletedAuthor.deletedCount) {
                    return res.send('OK')
                }

                res.status(400).send({ error: 'Could not delete the user' })

            } catch (error) {
                res.send(error)
            }
        })
}

module.exports = postRoute
