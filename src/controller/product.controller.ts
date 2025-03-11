import { Request, Response } from "express";
import { createProductInput, updateProductInput } from "../schema/product.schema";
import { createProduct } from "../service/product.service";

export async function createProductHandler(
    req: Request<{}, {}, createProductInput["body"]>, 
    res: Response) {
        const userId = res.locals.user._id;

        const body = req.body;

        const product = await createProduct({ ...body, user: userId });

        return res.send(product);
}

export async function updateProductHandler(
    req: Request<updateProductInput["params"]>, 
    res: Response) {
    
}

export async function getProductHandler(
    req: Request<updateProductInput["params"]>,
    res: Response) {
    
}

export async function deleteProductHandler(
    req: Request<updateProductInput["params"]>, 
    res: Response) {
    
}