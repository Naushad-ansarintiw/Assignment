import { db } from "@/db";
import { createUploadthing, type FileRouter } from "uploadthing/next";


const f = createUploadthing();
 
export const ourFileRouter = {
    pdfUploader: f({ pdf: { maxFileSize: "16MB" } })
        .onUploadComplete(async ({metadata, file}) => {
            let createdFile;
            try {
                 createdFile = await db.file.create({
                    data: {
                        key: file.key,
                        name: file.name,
                        url: file.url,
                        uploadStatus: "SUCCESS"
                    }
                });
                console.log(createdFile, "CORE.TS");
            } catch (error) {
                createdFile = await db.file.create({
                    data: {
                        key: file.key,
                        name: file.name,
                        url: file.url,
                        uploadStatus: "FAILED"
                    }
                });
                console.log(error, "Core.ts");
            }
        })
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;
