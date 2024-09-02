export interface BasicData {
    date: string | null;
    character_name: string;
    world_name: string;
    character_gender: string;
    character_class: string;
    character_class_level: string;
    character_date_create: string;
    character_exp: number;
    character_exp_rate: string;
    character_guild_name: string;
    character_image: string;
    character_level: number;
    liberation_quest_clear_flag: string;
}

export interface RankData {
    date: string;
    world_name: string;
    ranking: number;
    character_name: string;
    character_level: number;
    class_name: string;
    sub_class_name: string;
    character_guildname: string;
}