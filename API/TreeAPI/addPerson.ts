import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {ResponseObject}  from "./types";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  return createResponse(200, 'Success');
};

const createResponse = (statusCode:number, body:string): ResponseObject => {
  return {
    statusCode,
    body
  }
}