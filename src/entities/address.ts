import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { User } from "./user";

@Entity("Address", { schema: "boilerplate" })
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id"
  })
  id: string;

  @Column("int", {
    nullable: false,
    name: "number"
  })
  number: number;

  @Column("varchar", {
    nullable: false,
    length: 100,
    name: "street"
  })
  street: string;

  @Column("varchar", {
    nullable: false,
    length: 100,
    name: "neighborhood"
  })
  neighborhood: string;

  @Column("varchar", {
    nullable: false,
    length: 100,
    name: "city"
  })
  city: string;

  @Column("varchar", {
    nullable: false,
    length: 100,
    name: "state"
  })
  state: string;

  @Column("varchar", {
    nullable: false,
    length: 100,
    name: "country"
  })
  country: string;

  @Column("varchar", {
    nullable: false,
    length: 8,
    name: "zipCode"
  })
  zipCode: string;

  @OneToMany(
    type => User,
    user => user.address,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  users: User[];
}
