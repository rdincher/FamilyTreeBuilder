import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import {ResponseObject, Person}  from "./types";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  let eventParameters = event.queryStringParameters;
  try{
    let newPerson = createPersonObject(eventParameters);
  } catch(error) {
    let errorMsg = error.message
    return createResponse(400, errorMsg)
  }


  return createResponse(200, 'Success');
};

const createPersonObject = (parameters:any): Person => {
  if(!parameters.first_name){
    throw Error("Person Requires first name")
  }
  if(!parameters.last_name){
    throw Error("Person Requires last name")
  }
  let myPerson: Person = {
    first_name: parameters.first_name,
    last_name: parameters.last_name
  }
  return myPerson
}

const createResponse = (statusCode:number, body:string): ResponseObject => {
  return {
    statusCode,
    body
  }
}