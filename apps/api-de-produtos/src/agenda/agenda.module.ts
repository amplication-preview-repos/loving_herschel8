import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AgendaModuleBase } from "./base/agenda.module.base";
import { AgendaService } from "./agenda.service";
import { AgendaController } from "./agenda.controller";

@Module({
  imports: [AgendaModuleBase, forwardRef(() => AuthModule)],
  controllers: [AgendaController],
  providers: [AgendaService],
  exports: [AgendaService],
})
export class AgendaModule {}
