import { Server } from "./presentation/server";
import { envs } from "./config/envs";

(() => {
  main();
})();

function main() {
  const server = new Server({
    serverPort: envs.SERVER_PORT,
    publicPath: envs.PUBLIC_PATH
  });
  server.start();
}