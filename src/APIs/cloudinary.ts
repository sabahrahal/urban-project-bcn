import type { Image } from "../interfaces/image";

const API_URL = {
    GET_IMAGES : (categoryId:string) => `https://api.imgur.com/3/album/${categoryId}/images`
}
const API_KEY = "4edd1475460b452"
export const fetchImages = async (categoryId:string):Promise<Image[]> => {
    try {

        const response = await fetch(API_URL.GET_IMAGES(categoryId), {
            method: 'GET',
            headers: {
              'Authorization': `Client-ID ${API_KEY}`
            }
        }) 
    
        if(!response.ok) throw new Error('Error en la solicitud');
        const { data } = await response.json()
        return data
        
    } catch (error) {
        throw(error)
    }

}