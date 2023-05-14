import { createServer } from "./server";
import { consolelog } from "logger";

const port = process.env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  consolelog(`api running on ${port}`);
});
