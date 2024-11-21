import { addDoc, collection } from 'firebase/firestore';
import { firestore } from '../Firebase/Firebase';
import { products, brands, categories} from "../../Data/data";

const Admin = () => {

    const postProductData = async () => {
        try {
          const docRef =  collection(firestore, "products");
          for (const product of products) {
            await addDoc(docRef, product)
          }
          alert("products uploaded successfully")
        } catch (error) {
          console.error("Error uploading products: ", error);
        }
    }
    
    const postBrandData = async () => {
        try {
          const docRef =  collection(firestore, "brands");
          for (const brand of brands) {
            await addDoc(docRef, brand)
          }
          alert("brands uploaded successfully")
        } catch (error) {
          console.error("Error uploading brands: ", error);
        }
    }
    
    const postCategoriesData = async () => {
        try {
          const docRef =  collection(firestore, "categories");
          for (const category of categories) {
            await addDoc(docRef, category)
          }
          alert("category uploaded successfully")
        } catch (error) {
          console.error("Error uploading category: ", error);
        }
    }
    
    return (
        <>
        <button onClick={postProductData}>Post Product Data</button>
        <button onClick={postBrandData}>Post Brand Data</button>
        <button onClick={postCategoriesData}>Post Category Data</button>
        </>
    )
}
