import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Category } from 'src/categories/categories.entity';

@Table({ tableName: 'items' })
export class Item extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @Column({ type: DataType.STRING, allowNull: true })
  image: string;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    field: 'categoryId',
  })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;
}
