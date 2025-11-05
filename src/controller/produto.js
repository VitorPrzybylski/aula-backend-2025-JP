import produto from "../model/produto.js"
import ServiceProduto from "../service/produto.js"

class ControllerProduto {

    async PegarTodos(req, res) {
        try {
            const produtos = await ServiceProduto.PegarTodos()
            res.status(200).send({
                data: produtos
            })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async PegarUm(req, res) {
        try {
            const id=req.params.id
            // const {id}= req.params
            // const params =req.params

            const produto =await ServiceProduto.PegarUm(id)
            res.status(200).send({
                data:produto
            })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Criar(req, res) {
        try {
            // precisamos pegar os valores do body
            const { nome, disponivel, qtde } = req.body
            
            await ServiceProduto.Criar(nome, disponivel, qtde)

            res.status(201).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Alterar(req, res) {
        try {
            const id = req.params.id
            // const { nome, disponivel, qtde } = req.body
            const nome =req.body?.nome
            const disponivel =req.body?.disponivel
            const qtde =req.body?.qtde
            await ServiceProduto.Alterar(id,nome,disponivel,qtde)
            res.status(200).send({msg:'Produto alterado'})
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id
            await ServiceProduto.Deletar(id)
            res.status(204).send()
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
        return produto
    }

}
export default new ControllerProduto()