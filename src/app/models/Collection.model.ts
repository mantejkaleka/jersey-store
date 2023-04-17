export interface Collection {
    items: Array<CollectionItem>
}

export interface CollectionItem {
    id?: String;
    url?:String,
    content: String,
    img: String,
    price: String,
    catalogId?: String
}

export interface CollectionCatalog {
    name: String;
    imgUrl: String;
    title: String;
    collectionItems?:Array<CollectionItem>
}