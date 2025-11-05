import produto from "../model/produto.js";
import Produto from "../model/produto.js";

class ServiceProduto {

    async PegarTodos() {
        return Produto.findAll()
    }

    async PegarUm(id) {
        if (!id) {
            throw new Error('Favor informar o ID')
        }
        //usar findOne se nao sabe a pk, apenas outra coisa
        const produto = await Produto.findByPk(id)
        if (!produto) {
            throw new Error('Produto nao encontrado')
        }
        return produto
    }

    async Criar(nome, disponivel, qtde) {
        console.log(qtde)
        await Produto.create({
            nome, disponivel, qtde
        })
    }

    async Alterar(id, nome, disponivel, qtde) {
        if (id ||nome||qtde||disponivel ==undefined) {
            throw new Error('FAVOR PREENCHER TODA AS INFORMAÇOES')
        }
        const produtoVelho = await produto.findByPk(id)
        if(!produtoVelho){
            throw new Error('Produto nao encontrado')
        }
        produtoVelho.nome = nome || produtoVelho.nome
        produtoVelho.disponivel = disponivel || produtoVelho.disponivel
        produtoVelho.qtde = qtde || produtoVelho.qtde
        produtoVelho.save()
    }
    async Deletar(id) {
        if (!id) {
            throw new Error('Favor informar o ID')
        }
        //usar findOne se nao sabe a pk, apenas outra coisa
        const produto = await Produto.findByPk(id)
        if (!produto) {
            throw new Error('Produto nao encontrado')
        }
        await produto.destroy()

    }
}

export default new ServiceProduto()