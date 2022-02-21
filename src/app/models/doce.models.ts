export class Doce{
    Id!: number;
    Descricao: string;
    Quantidade: number;
    Valor: number;
    DataFab: Date

    constructor(){
        this.Descricao = "";
        this.Quantidade = 0;
        this.Valor = 0;
        this.DataFab = new Date();
    }
}