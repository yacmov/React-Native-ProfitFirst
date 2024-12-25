import { Text, View } from "react-native";
import React, { Component } from "react";
import { Model } from "@nozbe/watermelondb";
import { date, field, readonly, text } from "@nozbe/watermelondb/decorators";

export class Allocation extends Model {
  static table: string = "allocations";

  @field("income") income!: number;
  @readonly @date("created_at") createdAt!: any;
}

export default Allocation;
