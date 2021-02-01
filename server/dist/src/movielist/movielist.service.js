"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovielistService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const movielist_entity_1 = require("./movielist.entity");
let MovielistService = class MovielistService {
    constructor(movieListRepository) {
        this.movieListRepository = movieListRepository;
    }
    async fetchAll() {
        return await this.movieListRepository.find();
    }
    async insertOne(movieName) {
        await this.movieListRepository.insert({
            movieName: movieName,
        });
    }
};
__decorate([
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MovielistService.prototype, "insertOne", null);
MovielistService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(movielist_entity_1.MovieList)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MovielistService);
exports.MovielistService = MovielistService;
//# sourceMappingURL=movielist.service.js.map