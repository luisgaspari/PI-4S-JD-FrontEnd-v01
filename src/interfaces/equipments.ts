export interface Equipment {
    id_equipment: number;
    description: string;
    model: string;
    category: string;
    survey: Survey[];
    checklist: Checklist;
}

export interface Survey {
    id_survey: number;
    description: string;
    date_start: string;
    date_end: string;
    item_survey: ItemSurvey[];
    user: User;
}

export interface ItemSurvey {
    id_item_survey: number;
    description: string;
}

export interface User {
    iduser: number;
    name: string;
    email: string;
    password: string;
}

export interface Checklist {
    id_checklist?: number;
    description: string;
    item_checklist: ItemChecklist[];
}

export interface ItemChecklist {
    id_item_checklist: number;
    description: string;
}

export interface PostEquipment {
    description: string;
    model: string;
    category: string;
    checklist: string;  
}