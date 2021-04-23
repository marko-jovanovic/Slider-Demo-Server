
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

  async create(writer: Writer): Promise<Writer> {
    return await prismaClient.writer.create({
      data: writer
    });
  }

  findAll(): Promise<Writer[]> {
    return prismaClient.writer.findMany();
  }
}

export default WriterService;