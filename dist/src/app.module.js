"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const post_model_1 = require("./models/post.model");
const post_controller_1 = require("./controllers/post.controller");
const post_service_1 = require("./services/post.service");
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: () => ({
                    uri: process.env.MONGODB_URI,
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }),
            }),
            mongoose_1.MongooseModule.forFeature([{ name: post_model_1.Post.name, schema: post_model_1.PostSchema }]),
        ],
        controllers: [post_controller_1.PostController],
        providers: [post_service_1.PostService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map