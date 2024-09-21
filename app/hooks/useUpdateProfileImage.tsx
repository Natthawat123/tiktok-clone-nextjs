import { database, storage } from "@/libs/AppWriteClient"

const useUpdateProfileImage = async (id: string, image: string, file: File) => {
    try {
        await database.updateDocument(
            String(process.env.NEXT_PUBLIC_DATABASE_ID), 
            String(process.env.NEXT_PUBLIC_COLLECTION_ID_PROFILE), 
            id, 
        { 
            image: image 
        })

        await storage.createFile(String(process.env.NEXT_PUBLIC_BUCKET_ID),image,file)
    } catch (error) {
        // throw error
    }
}

export default useUpdateProfileImage