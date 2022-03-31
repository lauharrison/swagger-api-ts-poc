import {generateApi} from "swagger-typescript-api";
import path from "path";

generateApi({
    name: "types.ts",
    output: path.resolve(process.cwd(), "./src/__generated__"),
    input: path.resolve(process.cwd(), "./json/seraitrade-scs-trace-service-v1-swagger.json"),
    httpClientType: "axios",
});
