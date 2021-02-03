"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const APP_NAME = process.env.npm_package_name;
    const APP_VERSION = process.env.npm_package_version;
    const options = new swagger_1.DocumentBuilder()
        .setTitle(APP_NAME)
        .setDescription(`The ${APP_NAME} API description`)
        .setVersion(APP_VERSION)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map