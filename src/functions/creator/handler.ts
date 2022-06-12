import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { middyfy } from '@libs/lambda';
import CreatorServices from "../../services";

import * as bcrypt from 'bcryptjs';
import { formatJSONResponse } from "@libs/api-gateway";


const responseHeaders = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Methods": '*',
    'Access-Control-Allow-Origin': '*'
}

export const getAllCreators = middyfy(async (): Promise<APIGatewayProxyResult> => {
    const creators = await CreatorServices.creatorService.getAllCreators();
    try {
        return {
            statusCode: 200,
            headers: responseHeaders,
            body: JSON.stringify(creators)
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            headers: responseHeaders,
            body: JSON.stringify('Something went wrong')
        };
    }

})

export const addCreator = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    let apiKey: string;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    apiKey = "";

    for (let i = 0; i < 15; i++) {
        apiKey += characters.charAt(Math.floor(Math.random() * characters.length) + 0);
    }

    const params = JSON.parse(event.body);

    const hashedPass = bcrypt.hashSync(params.password, 10);

    try {
        const creator = await CreatorServices.creatorService.addCreator({
            apiKey: apiKey,
            email: params.email,
            username: params.username,
            password: hashedPass,
            dateOfBirth: params.dateOfBirth,
            dateRegistered: new Date().toISOString(),

        })

        const response = {
            apiKey: creator.apiKey,
            email: creator.email,
            username: creator.username
        }

        return {
            statusCode: 200,
            headers: responseHeaders,
            body: JSON.stringify(response)
        };

    } catch (e) {
        console.log(e);
        return {
            statusCode: 500,
            headers: responseHeaders,
            body: JSON.stringify('Something went wrong')
        };
    }
})

export const loginCreator = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const params = JSON.parse(event.body);

    try {
        const creator = await CreatorServices.creatorService.getCreator(
            params.email, params.password
        )

        const response = {
            apiKey: creator.apiKey,
            email: creator.email,
            username: creator.username
        }

        return {
            statusCode: 200,
            headers: responseHeaders,
            body: JSON.stringify(response)
        };

    } catch (e) {
        return {
            statusCode: 403,
            headers: responseHeaders,
            body: JSON.stringify({message: e.message})
        };
    }

})
