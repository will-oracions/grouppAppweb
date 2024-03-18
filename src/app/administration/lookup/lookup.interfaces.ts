export interface SearchFilter {
    // Filtres primaires
    regionId?: number;
    departementId?: number;
    communeId?: number;
    quartierId?: number;
    target?: SearchFilterTarget;

    // Filtre sur le nom du menage ou de la personne
    searchText?: string;

    // Filtres secondaires
    agentId?: number;
    vulnerabilities?: number[];
    birthDateFrom?: Date;
    birthDateTo?: Date;
}

type SearchFilterTarget = "pernages" | "personnes";
