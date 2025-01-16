import {Familia} from '../../domain/model/entities/familia.entity'

export interface FamiliaRepository {
    createFamilia(familia: Familia): Promise<Familia>;
    updateFamilia(familia: Familia): Promise<Familia>;
    deleteFamilia(id: string): Promise<void>;
    getFamiliaById(id: string): Promise<Familia|null>;
    listFamilias(): Promise<Familia[]>;
}
