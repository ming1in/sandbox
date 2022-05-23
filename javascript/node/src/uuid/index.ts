import { uuid } from "uuidv4";

const idempotencyKey = uuid();

console.log(idempotencyKey);
