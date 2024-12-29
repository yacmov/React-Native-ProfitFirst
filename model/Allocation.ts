import { Model } from "@nozbe/watermelondb";
import {
  children,
  date,
  field,
  readonly,
} from "@nozbe/watermelondb/decorators";

export default class Allocation extends Model {
  static table: string = "allocations";
  static associations = {
    account_allocations: { type: "has_many", foreignKey: "allocation_id" },
  };

  @field("income") income!: number;
  @readonly @date("created_at") createdAt!: Date;

  @children("account_allocations") accountAllocations;
}
