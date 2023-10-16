export default interface Arte {
    id: number;
    nome: string;
    criador: string;
    vendedor: string;
    imagem: string;
    valor: number;
    publicado: string;
    quantidade: number;
    views: number;
}

export default interface Images {
    id: number;
    image: string;
    categoria: string;
}

export default interface Explore {
    id: number;
    nome: string;
    criador: string;
    vendedor: string;
    imagem: string;
    valor: number;
    publicado: string;
    quantidade: number;
    views: number;
}

export default interface Pedido {
    id: number,
    nome: string,
    criador: string,
    categoria: string,
    imagem: string,
    valor: string,
    quantidade: number,
    status: string
}

