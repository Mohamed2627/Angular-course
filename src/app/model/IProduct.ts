export interface IProduct{
    id:number;
    name:string;
    qty:number;
    price:number;
    img:string;
    categoryId:number
}
export class Category{
    id:number=1;
    name:string="category"
}