// familia/ports/out/familia-repository.interface.ts
import {Familia} from '../../domain/model/entities/familia.entity'

/**
 * Interface que define os métodos necessários para persistir uma entidade 'Familia'.
 */
export const FAMILIA_REPOSITORY = Symbol('FAMILIA_REPOSITORY')

/**
 * Interface para o repositório de Família.
 */

export interface FamiliaRepository {
    createFamilia(familia: Familia): Promise<Familia>;
    updateFamilia(familia: Familia): Promise<Familia>;
    deleteFamilia(id: string): Promise<void>;
    getFamiliaById(id: string): Promise<Familia | null>;
    listFamilias(): Promise<Familia[]>;
    findFamiliaByTitle(title: string): Promise<Familia[]>;
    bulkCreateFamilias(familias: Familia[]): Promise<Familia[]>;
}
