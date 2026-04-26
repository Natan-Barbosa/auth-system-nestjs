import { Module } from "@nestjs/common";
import { databaseProviders } from "./database.provider";
import { userRepository } from "./database.repository";

@Module({
    providers: [...databaseProviders, ...userRepository],
    exports: [...userRepository],
})
export class DatabaseModule { }