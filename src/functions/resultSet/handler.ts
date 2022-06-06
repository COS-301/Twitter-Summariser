import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import ServicesLayer from "../../services";

export const getAllResultSet = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const params = JSON.parse(event.body);

        const resultSet = ServicesLayer.resultSetServices.getResultSets(params.apiKey);

        return {
            statusCode: 200,
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Methods": '*',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(resultSet)
          }
    } catch (e) {
        return formatJSONResponse({
         statusCode: 500,
          message: e
        });
      }
});

export const getResultSet = middyfy(async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        const params = JSON.parse(event.body);

        const resultSet = ServicesLayer.resultSetServices.getResultSet(params.resultsSetID, params.apiKey);

        return {
            statusCode: 200,
            headers: {
              'Content-Type': 'application/json',
              "Access-Control-Allow-Methods": '*',
              'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(resultSet)
          }
    } catch (e) {
        return formatJSONResponse({
         statusCode: 500,
          message: e
        });
      }
});