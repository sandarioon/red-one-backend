import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { Item } from 'src/items/items.entity';

@Table({ tableName: 'categories' })
export class Category extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @HasMany(() => Item)
  posts: Item[];
}
