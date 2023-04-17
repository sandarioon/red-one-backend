import { Column, DataType, Model, Table, Default } from 'sequelize-typescript';

@Table({ tableName: 'news' })
export class News extends Model {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.STRING, allowNull: false })
  body: string;

  @Column({ type: DataType.STRING, allowNull: true })
  image: string;

  @Default(false)
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  hidden: boolean;
}
