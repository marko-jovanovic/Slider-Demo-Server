import WriterService from './service/Writer';

export interface Context {
  services: {
    writerService: WriterService
  }
}
