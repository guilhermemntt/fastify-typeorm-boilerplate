import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  JoinTable
} from "typeorm";
import { Address } from "./address";

@Entity("User", { schema: "boilerplate" })
@Index("addressId", ["address"])
export class User extends BaseEntity {
  @Column("char", {
    nullable: false,
    primary: true,
    length: 11,
    name: "cpf"
  })
  cpf: string;

  @Column("varchar", {
    nullable: false,
    length: 200,
    name: "name"
  })
  name: string;

  @Column("enum", {
    nullable: false,
    enum: ["M", "F"],
    name: "sex"
  })
  sex: ["M", "F"];

  @Column("date", {
    nullable: false,
    name: "birth"
  })
  birth: string;

  @ManyToOne(
    type => Address,
    address => address.users,
    { nullable: false, onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn({ name: "addressId", referencedColumnName: "id" })
  address: Address;
}
