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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieList = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let MovieList = class MovieList {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], MovieList.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    class_validator_1.IsNotEmpty({ message: 'Movie Name must not be empty' }),
    __metadata("design:type", String)
], MovieList.prototype, "movieName", void 0);
MovieList = __decorate([
    typeorm_1.Entity(),
    typeorm_1.Unique(['movieName'])
], MovieList);
exports.MovieList = MovieList;
//# sourceMappingURL=movielist.entity.js.map