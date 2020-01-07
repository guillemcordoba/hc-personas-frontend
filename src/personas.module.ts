import { interfaces } from "inversify";
import { GraphQlSchemaModule } from "@uprtcl/common";
import { MicroModule, i18nextModule } from "@uprtcl/micro-orchestrator";
import {
  HolochainConnectionModule,
  createHolochainProvider
} from "@uprtcl/connections";

import en from "../i18n/en.json";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

export class PersonasModule extends MicroModule {
  static id = Symbol("personas-module");

  dependencies = [HolochainConnectionModule.id];

  constructor(protected instance: string) {
    super();
  }

  async onLoad(container: interfaces.Container) {
    const personasProfilesProvider = createHolochainProvider(
      this.instance,
      "identity-manager"
    );
  }

  submodules = [
    new GraphQlSchemaModule(typeDefs, resolvers),
    new i18nextModule("identity", { en: en })
  ];
}
