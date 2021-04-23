import * as yup from 'yup';
import { Writer } from ".prisma/client";
import prismaClient from "../prismaClient";

class WriterService {
  private static instance: WriterService;

  private constructor() {}

  static getInstance(): WriterService {
    if (!WriterService.instance) {
      WriterService.instance = new WriterService();
    }

    return WriterService.instance;
  }

  async create(writer: any): Promise<Writer> {
    const schema = yup.object().shape({
      name: yup.string().required().min(5),
      about: yup.string().required(),
      imgUrl: yup.string().required().url()
    });

    await schema.validate(writer);
    return await prismaClient.writer.create({
      data: writer
    });
  }

  async update(writer: any): Promise<Writer> {
    const schema = yup.object().shape({
      id: yup.number().required(),
      name: yup.string().required().min(5),
      about: yup.string().required(),
      imgUrl: yup.string().required().url()
    });
    await schema.validate(writer);

    const retrievedWriter = await prismaClient.writer.findFirst({
      where: {
        id: writer.id
      }
    });

    if (!retrievedWriter) {
      throw new Error(`Could not find writer with ID: ${writer.id}`);
    }

    return await prismaClient.writer.update({
      data: writer,
      where: {
        id: writer.id
      }
    });
  }

  async delete(id: number): Promise<Writer> {
    const retrievedWriter = await prismaClient.writer.findFirst({
      where: { id }
    });

    if (!retrievedWriter) {
      throw new Error(`Could not find writer with ID: ${id}`);
    }

    await prismaClient.writer.delete({
      where: { id }
    });

    return retrievedWriter;
  }

  findAll(): Promise<Writer[]> {
    return prismaClient.writer.findMany();
  }
}

export default WriterService;