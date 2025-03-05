import { Request, Response } from "express";
import { createProductInput, updateProductInput } from "../schema/product.schema";

export async function createProductHandler(
    req: Request<{}, {}, createProductInput["body"]>, 
    res: Response) {

}

export async function updateProductHandler(
    req: Request<updateProductInput["params"]>, res: Response) {
    
}

export async function getProductHandler(req: Request, res: Response) {
    
}

export async function deleteProductHandler(req: Request, res: Response) {
    
}