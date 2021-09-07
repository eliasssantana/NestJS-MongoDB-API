import { Inject } from "@nestjs/common";
import { ConfigService, ConfigModule } from "@nestjs/config";
import {MongooseModuleAsyncOptions, MongooseModuleOptions} from "@nestjs/mongoose"


export default class MongooseConfig{
    static getOrmConfig(configService: ConfigService): MongooseModuleOptions{
        return{
            USER: configService.get("USER"),
            PASSWORD: configService.get("PASSWORD")
        }
    } 
}

export const MongooseConfigAsync: MongooseModuleAsyncOptions = {
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService): Promise<MongooseModuleOptions> => MongooseConfig.getOrmConfig(configService),
    inject: [ConfigService]
}