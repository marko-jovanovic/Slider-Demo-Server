import { WriterCreateInput, WriterDeleteInput, WriterUpdateInput } from "./ArgumentTypes";
import { writerMutations } from "./Mutation";
import { writerQueries } from "./Query";
import { Writer } from "./Writer";

const WriterTypes = [
  WriterCreateInput,
  WriterUpdateInput,
  WriterDeleteInput,
  Writer,
  writerQueries,
  writerMutations,
];

export default WriterTypes;
