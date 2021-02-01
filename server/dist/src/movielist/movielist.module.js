"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovielistModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const movielist_controller_1 = require("./movielist.controller");
const movielist_entity_1 = require("./movielist.entity");
const movielist_service_1 = require("./movielist.service");
const movielist_subscriber_1 = require("./movielist.subscriber");
let MovielistModule = class MovielistModule {
};
MovielistModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([movielist_entity_1.MovieList])],
        controllers: [movielist_controller_1.MovielistController],
        providers: [movielist_service_1.MovielistService, movielist_subscriber_1.MovielistSubscriber],
    })
], MovielistModule);
exports.MovielistModule = MovielistModule;
//# sourceMappingURL=movielist.module.js.map