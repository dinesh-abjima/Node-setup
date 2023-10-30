import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({
  tableName:'Cats'
})
export class CatDto extends Model {
  @PrimaryKey
  @Column
  CatId : number

  @Column
  Name: string;

  @Column
  Age: number;

  @Column
  Breed: string;
}