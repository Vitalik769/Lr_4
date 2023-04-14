import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Advertisement {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public Name: string;
    
    @Column()
    public Sex: string;

    @Column()
    public Age: string;

    @Column()
    public Price: string;

    @Column()
    public ArendTime: string;
}

export default Advertisement;