// interface ProductModel {
//     id: number
//     name: string
//     price: number
//     stock: number
//     imageUrl: string
// }




// interface ProductModel {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     images: string[];
//     // Note: creationAt, updatedAt, and category are not included in the provided data
// }

interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  }
  
  interface ProductModel {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[]
    creationAt: string;
    updatedAt: string;
    category: Category;
  }
  
  
export default ProductModel;