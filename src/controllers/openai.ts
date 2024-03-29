import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import {
  Configuration,
  CreateCompletionRequest,
  // CreateCompletionResponse,
  CreateEditRequest,
  // CreateEditResponse,
  // CreateEmbeddingResponse,
  CreateEmbeddingRequest,
  OpenAIApi,
} from 'openai';
import CreateError from '../error/CreateError';

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API,
});

const openai = new OpenAIApi(configuration);

export const completion = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.method !== 'POST')
    return next(CreateError.badRequest('Only POST requests allowed'));
  const body = req.body as CreateCompletionRequest;

  const request = await openai.createCompletion(body);
  res.status(200).json(request.data);
};

export const edit = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.method !== 'POST')
    return next(CreateError.badRequest('Only POST requests allowed'));
  const body = req.body as CreateEditRequest;

  const request = await openai.createEdit(body);
  res.status(200).json(request.data);
};

export const embedding = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (req.method !== 'POST')
    return next(CreateError.badRequest('Only POST requests allowed'));
  const body = req.body as CreateEmbeddingRequest;

  const request = await openai.createEmbedding(body);
  res.status(200).json(request.data);
};
